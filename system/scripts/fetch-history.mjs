// Make sure the checkout has its full git history before `ksor build` runs.
//
// `ksor build` verifies the append-only takedown ledger (.ksor/takedowns.yaml)
// against the file's git history, so a deleted entry cannot pass for one that
// never existed. A shallow clone has no history, and ksor refuses it
// (`ksor-ledger-unverifiable`). Vercel always clones shallow, so its build
// command runs this first.
//
// - Not a git checkout (e.g. a `vercel deploy` CLI upload): nothing to fetch;
//   exits 0 and leaves the decision to ksor.
// - Already complete (a normal local clone): exits 0 at once.
// - Shallow: `git fetch --unshallow`, then checks the result. If the fetch
//   fails, this FAILS the build with the reason. It never falls back to
//   `--allow-unverifiable-ledger`; that choice stays a deliberate one.
import { execFileSync } from "node:child_process";
import process from "node:process";

const git = (...args) =>
  execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 180_000 }).trim();

function fail(message) {
  console.error(`fetch-history: ${message}`);
  process.exit(1);
}

try {
  git("rev-parse", "--git-dir");
} catch {
  console.log("fetch-history: not a git checkout — nothing to fetch.");
  process.exit(0);
}

if (git("rev-parse", "--is-shallow-repository") !== "true") {
  console.log("fetch-history: full history already present.");
  process.exit(0);
}

// The remote to deepen from: `origin` when the clone has one, otherwise the
// repository Vercel says it built from.
let remote = "origin";
const remotes = git("remote").split(/\s+/).filter(Boolean);
if (!remotes.includes("origin")) {
  const { VERCEL_GIT_PROVIDER, VERCEL_GIT_REPO_OWNER, VERCEL_GIT_REPO_SLUG } = process.env;
  if (VERCEL_GIT_PROVIDER === "github" && VERCEL_GIT_REPO_OWNER && VERCEL_GIT_REPO_SLUG) {
    remote = `https://github.com/${VERCEL_GIT_REPO_OWNER}/${VERCEL_GIT_REPO_SLUG}.git`;
  } else if (remotes.length > 0) {
    remote = remotes[0];
  } else {
    fail("shallow clone with no remote to fetch history from.");
  }
}

console.log(`fetch-history: shallow clone — fetching full history from ${remote.replace(/\/\/[^@/]*@/, "//")} …`);
try {
  git("fetch", "--unshallow", "--no-tags", remote);
} catch (error) {
  fail(`git fetch --unshallow failed:\n${String(error.stderr ?? error.message).trim()}`);
}

if (git("rev-parse", "--is-shallow-repository") === "true") fail("history is still shallow after the fetch.");
console.log(`fetch-history: done — ${git("rev-list", "--count", "HEAD")} commits available.`);
