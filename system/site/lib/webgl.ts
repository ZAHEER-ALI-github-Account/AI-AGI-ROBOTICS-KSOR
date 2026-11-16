/**
 * Whether this browser can draw the site's 3D scenes. Checked once, by asking
 * a throwaway canvas for a WebGL context — the same test three.js would fail
 * on, done before three.js is even downloaded.
 */
let cached: boolean | null = null;

export function hasWebGL(): boolean {
  if (cached !== null) return cached;
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    cached = gl !== null;
    // Hand the context straight back, so the probe does not hold a GPU slot.
    (gl as WebGLRenderingContext | null)?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    cached = false;
  }
  return cached;
}

/** A phone, or a machine that says it is short of cores or memory. */
export function isLowPower(): boolean {
  if (typeof window === "undefined") return false;
  const small = window.matchMedia("(max-width: 767px)").matches;
  const nav = navigator as Navigator & { deviceMemory?: number };
  const fewCores = (navigator.hardwareConcurrency ?? 8) <= 4;
  const littleMemory = (nav.deviceMemory ?? 8) <= 4;
  return small || fewCores || littleMemory;
}
