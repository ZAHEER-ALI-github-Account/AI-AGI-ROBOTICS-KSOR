/**
 * The two shapes the homepage's Neural Core morphs between — a brain and a
 * robot head — as particle clouds, plus the "synapses" (line segments) that
 * connect them.
 *
 * Pure and deterministic: a seeded generator, so the same count gives the same
 * cloud on every load. Coordinates are in scene units, centred on the origin,
 * with +z as the FRONT of both shapes (the brain's frontal lobe, the robot's
 * face) so the morph keeps the shape facing the same way.
 */

export interface NeuralShapes {
  readonly count: number;
  /** xyz per particle. */
  readonly brain: Float32Array;
  readonly head: Float32Array;
  /** rgb per particle, in each shape. */
  readonly brainColor: Float32Array;
  readonly headColor: Float32Array;
  /** Per-particle base size, and a 0–1 delay that staggers the morph. */
  readonly size: Float32Array;
  readonly delay: Float32Array;
  /** Pairs of particle indices joined by a line — short in BOTH shapes. */
  readonly edges: Uint32Array;
  /** For each particle, the edges that touch it (for travelling pulses). */
  readonly adjacency: readonly (readonly number[])[];
}

type Rand = () => number;

/** mulberry32 — a tiny, fast, seeded PRNG. */
function seeded(seed: number): Rand {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Vec3 = [number, number, number];
type Rgb = [number, number, number];

const CYAN: Rgb = [0, 0.898, 1];
const VIOLET: Rgb = [0.545, 0.361, 0.965];
const GOLD: Rgb = [1, 0.784, 0.341];
const ICE: Rgb = [0.75, 0.95, 1];

function mixRgb(a: Rgb, b: Rgb, t: number): Rgb {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

/** A uniformly random unit vector. */
function direction(rand: Rand): Vec3 {
  const u = rand() * 2 - 1;
  const theta = rand() * Math.PI * 2;
  const s = Math.sqrt(1 - u * u);
  return [s * Math.cos(theta), u, s * Math.sin(theta)];
}

interface Particle {
  p: Vec3;
  c: Rgb;
}

// ── The brain ──────────────────────────────────────────────────────────────
// Two hemispheres split by a midline gap, folded into gyri; a cerebellum at
// the back and a brain stem beneath. Left hemisphere leans cyan, right violet.
function brainParticle(rand: Rand): Particle {
  const r = rand();
  if (r < 0.8) {
    const [dx, dy, dz] = direction(rand);
    const side = dx >= 0 ? 1 : -1;
    const fold = 1 + 0.075 * Math.sin(dz * 13 + dy * 7) * Math.cos(dy * 11 - dx * 6);
    const depth = rand() < 0.86 ? 1 : 0.5 + rand() * 0.42;
    let y = dy * 0.92;
    if (y < -0.3) y = -0.3 + (y + 0.3) * 0.45; // flatter underside
    const p: Vec3 = [
      (dx * 1.02 * fold + side * 0.07) * depth,
      (y * fold + 0.08) * depth,
      dz * 1.32 * fold * depth,
    ];
    const t = (dx + 1) / 2;
    return { p, c: mixRgb(mixRgb(CYAN, VIOLET, t), ICE, depth < 1 ? 0.25 : 0) };
  }
  if (r < 0.92) {
    const [dx, dy, dz] = direction(rand);
    const fold = 1 + 0.05 * Math.sin(dy * 30);
    return {
      p: [dx * 0.58 * fold, -0.5 + dy * 0.26 * fold, -0.86 + dz * 0.36 * fold],
      c: mixRgb(VIOLET, CYAN, 0.25),
    };
  }
  const a = rand() * Math.PI * 2;
  const y = -0.35 - rand() * 0.95;
  const radius = 0.16 + (y + 1.3) * 0.03;
  return {
    p: [Math.cos(a) * radius, y, -0.42 + Math.sin(a) * radius - (y + 0.35) * 0.18],
    c: mixRgb(VIOLET, ICE, 0.2),
  };
}

// ── The robot head ─────────────────────────────────────────────────────────
// A rounded box (superellipsoid) shell, two ring eyes, a mouth grille, ear
// discs, an antenna with a gold beacon, and a neck.
function signedPow(v: number, e: number): number {
  return Math.sign(v) * Math.abs(v) ** e;
}

const HEAD_W = 1.05;
const HEAD_H = 1.12;
const HEAD_D = 1.0;
const HEAD_Y = 0.12;

function headParticle(rand: Rand): Particle {
  const r = rand();
  if (r < 0.6) {
    const [dx, dy, dz] = direction(rand);
    const e = 2 / 5; // squarer than a sphere, rounder than a box
    const p: Vec3 = [
      signedPow(dx, e) * HEAD_W,
      signedPow(dy, e) * HEAD_H + HEAD_Y,
      signedPow(dz, e) * HEAD_D,
    ];
    return { p, c: mixRgb(VIOLET, CYAN, (dy + 1) / 2) };
  }
  if (r < 0.74) {
    // Eyes: a bright ring and a soft core, on the face plane.
    const side = rand() < 0.5 ? -1 : 1;
    const a = rand() * Math.PI * 2;
    const ring = rand() < 0.7;
    const radius = ring ? 0.2 + (rand() - 0.5) * 0.025 : rand() * 0.11;
    return {
      p: [side * 0.4 + Math.cos(a) * radius, 0.3 + Math.sin(a) * radius, HEAD_D + 0.03],
      c: ring ? CYAN : ICE,
    };
  }
  if (r < 0.8) {
    // Mouth grille: five horizontal bars.
    const bar = Math.floor(rand() * 5);
    return {
      p: [(rand() - 0.5) * 0.9, -0.3 - bar * 0.09, HEAD_D + 0.02],
      c: mixRgb(CYAN, VIOLET, 0.35),
    };
  }
  if (r < 0.88) {
    // Ears: discs on either side.
    const side = rand() < 0.5 ? -1 : 1;
    const a = rand() * Math.PI * 2;
    const radius = 0.28 * Math.sqrt(rand());
    return {
      p: [side * (HEAD_W + 0.06 + rand() * 0.1), HEAD_Y + Math.sin(a) * radius, Math.cos(a) * radius],
      c: VIOLET,
    };
  }
  if (r < 0.92) {
    // Antenna and its beacon.
    if (rand() < 0.55) {
      return { p: [0, HEAD_H + HEAD_Y + rand() * 0.42, 0], c: mixRgb(VIOLET, GOLD, 0.4) };
    }
    const [dx, dy, dz] = direction(rand);
    return { p: [dx * 0.09, HEAD_H + HEAD_Y + 0.5 + dy * 0.09, dz * 0.09], c: GOLD };
  }
  // Neck: a short cylinder with collar rings.
  const a = rand() * Math.PI * 2;
  const y = -1.06 - rand() * 0.42;
  const radius = 0.42 + (Math.abs(((y + 1.06) * 10) % 1) < 0.15 ? 0.05 : 0);
  return { p: [Math.cos(a) * radius, y, Math.sin(a) * radius], c: mixRgb(VIOLET, CYAN, 0.2) };
}

/**
 * Sort a cloud by direction from its centre — latitude band, then longitude —
 * so particle `i` in one shape and particle `i` in the other point the same
 * way. That is what lets a particle travel a short path in the morph, and
 * what lets one set of edges read as connections in both shapes.
 */
function byDirection(particles: Particle[]): Particle[] {
  const key = ({ p }: Particle): number => {
    const radius = Math.hypot(p[0], p[1], p[2]) || 1;
    const band = Math.floor((Math.acos(Math.max(-1, Math.min(1, p[1] / radius))) / Math.PI) * 36);
    const longitude = (Math.atan2(p[0], p[2]) + Math.PI) / (Math.PI * 2);
    return band + longitude;
  };
  return particles
    .map((particle) => ({ particle, k: key(particle) }))
    .sort((a, b) => a.k - b.k)
    .map(({ particle }) => particle);
}

/** Distance between particles `i` and `j` of one cloud. */
function distance(cloud: Float32Array, i: number, j: number): number {
  const i3 = i * 3;
  const j3 = j * 3;
  return Math.hypot(cloud[i3] - cloud[j3], cloud[i3 + 1] - cloud[j3 + 1], cloud[i3 + 2] - cloud[j3 + 2]);
}

export function createNeuralShapes(count: number, seed = 20260814): NeuralShapes {
  const rand = seeded(seed);
  const brainCloud = byDirection(Array.from({ length: count }, () => brainParticle(rand)));
  const headCloud = byDirection(Array.from({ length: count }, () => headParticle(rand)));

  const brain = new Float32Array(count * 3);
  const head = new Float32Array(count * 3);
  const brainColor = new Float32Array(count * 3);
  const headColor = new Float32Array(count * 3);
  const size = new Float32Array(count);
  const delay = new Float32Array(count);

  for (let i = 0; i < count; i += 1) {
    brain.set(brainCloud[i].p, i * 3);
    head.set(headCloud[i].p, i * 3);
    brainColor.set(brainCloud[i].c, i * 3);
    headColor.set(headCloud[i].c, i * 3);
    // Mostly fine dust, a few bright "neurons".
    size[i] = rand() < 0.06 ? 2.6 + rand() * 1.6 : 0.9 + rand() * 1.1;
    delay[i] = rand();
  }

  // Synapses: pairs that are close in the brain AND in the head, a few per
  // particle, so the network reads as a network in both shapes.
  const maxPerParticle = 3;
  const maxEdges = Math.round(count * 1.25);
  const edgeList: number[] = [];
  const degree = new Uint8Array(count);
  for (let i = 0; i < count && edgeList.length / 2 < maxEdges; i += 1) {
    if (degree[i] >= maxPerParticle) continue;
    for (let j = i + 1; j < count; j += 1) {
      if (degree[j] >= maxPerParticle) continue;
      if (distance(brain, i, j) > 0.19 || distance(head, i, j) > 0.3) continue;
      edgeList.push(i, j);
      degree[i] += 1;
      degree[j] += 1;
      if (degree[i] >= maxPerParticle) break;
    }
  }
  const edges = Uint32Array.from(edgeList);

  const adjacency: number[][] = Array.from({ length: count }, () => []);
  for (let e = 0; e < edges.length / 2; e += 1) {
    adjacency[edges[e * 2]].push(e);
    adjacency[edges[e * 2 + 1]].push(e);
  }

  return { count, brain, head, brainColor, headColor, size, delay, edges, adjacency };
}
