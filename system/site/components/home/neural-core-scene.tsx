"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, type MutableRefObject, type ReactElement } from "react";
import * as THREE from "three";

import { createNeuralShapes, type NeuralShapes } from "@/lib/neural-shapes";

/** What the hero hands the scene: live values it reads every frame. */
export interface NeuralCoreInput {
  /** 0 = brain, 1 = robot head. Driven by scroll (GSAP ScrollTrigger). */
  morph: number;
  /** Pointer position, -1..1 on both axes, relative to the window. */
  pointerX: number;
  pointerY: number;
}

interface SceneProps {
  input: MutableRefObject<NeuralCoreInput>;
  count: number;
  reducedMotion: boolean;
  /** Render only while the hero is on screen. */
  active: boolean;
}

const PULSES = 64;

const pointVertex = /* glsl */ `
  attribute float aSize;
  attribute float aMix;
  attribute vec3 aColorA;
  attribute vec3 aColorB;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uTwinkle;
  varying vec3 vColor;
  void main() {
    vColor = mix(aColorA, aColorB, aMix);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float twinkle = 1.0 + uTwinkle * 0.35 * sin(uTime * 2.2 + position.x * 9.0 + position.y * 7.0);
    gl_PointSize = aSize * twinkle * uPixelRatio * (26.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const pointFragment = /* glsl */ `
  uniform float uOpacity;
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float halo = smoothstep(0.5, 0.0, d);
    float core = smoothstep(0.16, 0.0, d);
    vec3 color = vColor * halo + vec3(core) * 0.55;
    gl_FragColor = vec4(color, halo * uOpacity);
  }
`;

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function NeuralCore({ input, count, reducedMotion }: Omit<SceneProps, "active">): ReactElement {
  const shapes: NeuralShapes = useMemo(() => createNeuralShapes(count), [count]);
  const group = useRef<THREE.Group>(null);
  const { size, gl } = useThree();

  // Live buffers the frame loop writes into.
  const buffers = useMemo(() => {
    const position = Float32Array.from(shapes.brain);
    const mix = new Float32Array(shapes.count);
    const linePosition = new Float32Array(shapes.edges.length * 3);
    const pulsePosition = new Float32Array(PULSES * 3);
    const pulseState = Array.from({ length: PULSES }, (_, i) => ({
      edge: (i * 97) % Math.max(1, shapes.edges.length / 2),
      t: (i * 0.137) % 1,
      speed: 0.6 + ((i * 53) % 10) / 10,
      forward: true,
    }));
    return { position, mix, linePosition, pulsePosition, pulseState };
  }, [shapes]);

  const pointGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(buffers.position, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute("aMix", new THREE.BufferAttribute(buffers.mix, 1).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute("aColorA", new THREE.BufferAttribute(shapes.brainColor, 3));
    geometry.setAttribute("aColorB", new THREE.BufferAttribute(shapes.headColor, 3));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(shapes.size, 1));
    return geometry;
  }, [buffers, shapes]);

  const pointMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: pointVertex,
        fragmentShader: pointFragment,
        uniforms: {
          uTime: { value: 0 },
          uPixelRatio: { value: 1 },
          uTwinkle: { value: reducedMotion ? 0 : 1 },
          uOpacity: { value: 0.95 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [reducedMotion],
  );

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(buffers.linePosition, 3).setUsage(THREE.DynamicDrawUsage));
    return geometry;
  }, [buffers]);

  const lineMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: new THREE.Color("#00e5ff"),
        transparent: true,
        opacity: 0.16,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );

  const pulseGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(buffers.pulsePosition, 3).setUsage(THREE.DynamicDrawUsage));
    const color = new Float32Array(PULSES * 3);
    const pulseSize = new Float32Array(PULSES);
    const zero = new Float32Array(PULSES);
    for (let i = 0; i < PULSES; i += 1) {
      // Mostly white-cyan sparks, every fourth one gold.
      color.set(i % 4 === 0 ? [1, 0.784, 0.341] : [0.8, 0.98, 1], i * 3);
      pulseSize[i] = 3.2 + (i % 3);
    }
    geometry.setAttribute("aColorA", new THREE.BufferAttribute(color, 3));
    geometry.setAttribute("aColorB", new THREE.BufferAttribute(color, 3));
    geometry.setAttribute("aMix", new THREE.BufferAttribute(zero, 1));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(pulseSize, 1));
    return geometry;
  }, [buffers]);

  const pulseMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: pointVertex,
        fragmentShader: pointFragment,
        uniforms: {
          uTime: { value: 0 },
          uPixelRatio: { value: 1 },
          uTwinkle: { value: 0 },
          uOpacity: { value: 1 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );

  // Release GPU resources when the scene unmounts.
  useEffect(
    () => () => {
      for (const disposable of [pointGeometry, pointMaterial, lineGeometry, lineMaterial, pulseGeometry, pulseMaterial]) {
        disposable.dispose();
      }
    },
    [pointGeometry, pointMaterial, lineGeometry, lineMaterial, pulseGeometry, pulseMaterial],
  );

  // Desktop: the core sits to the right of the headline. Narrow: centred,
  // behind the text, a little smaller.
  const wide = size.width >= 900;
  const groupY = useRef(0);
  groupY.current = wide ? 0 : 0.35;
  const scale = wide ? 1 : 0.78;

  const yaw = useRef(0.6);
  const lineCyan = useMemo(() => new THREE.Color("#00e5ff"), []);
  const lineViolet = useMemo(() => new THREE.Color("#8b5cf6"), []);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 1 / 20);
    const { morph, pointerX, pointerY } = input.current;
    const time = state.clock.elapsedTime;
    const pixelRatio = gl.getPixelRatio();
    pointMaterial.uniforms.uTime.value = time;
    pointMaterial.uniforms.uPixelRatio.value = pixelRatio;
    pulseMaterial.uniforms.uPixelRatio.value = pixelRatio;

    // ── Morph: each particle starts a little later than the last, so the
    //    cloud flows into the new shape rather than snapping. ──
    const { brain, head, delay, edges, count: n } = shapes;
    const position = buffers.position;
    for (let i = 0; i < n; i += 1) {
      const start = delay[i] * 0.45;
      const t = smoothstep(start, start + 0.55, morph);
      buffers.mix[i] = t;
      const i3 = i * 3;
      // A swirl on the way through, strongest mid-flight.
      const lift = Math.sin(t * Math.PI) * 0.35 * (delay[i] - 0.5);
      position[i3] = brain[i3] + (head[i3] - brain[i3]) * t + lift;
      position[i3 + 1] = brain[i3 + 1] + (head[i3 + 1] - brain[i3 + 1]) * t;
      position[i3 + 2] = brain[i3 + 2] + (head[i3 + 2] - brain[i3 + 2]) * t - lift;
    }
    pointGeometry.attributes.position.needsUpdate = true;
    pointGeometry.attributes.aMix.needsUpdate = true;

    // ── Synapses follow their particles. ──
    const line = buffers.linePosition;
    for (let e = 0; e < edges.length; e += 1) {
      const p3 = edges[e] * 3;
      line[e * 3] = position[p3];
      line[e * 3 + 1] = position[p3 + 1];
      line[e * 3 + 2] = position[p3 + 2];
    }
    lineGeometry.attributes.position.needsUpdate = true;
    lineMaterial.color.lerpColors(lineCyan, lineViolet, morph);
    // Lines thin out mid-flight, when particles are furthest from their partners.
    lineMaterial.opacity = 0.17 * (1 - 0.75 * Math.sin(Math.min(1, morph) * Math.PI));

    // ── Pulses: sparks running along synapses, hopping to a connected one. ──
    const edgeCount = edges.length / 2;
    if (edgeCount > 0) {
      for (let k = 0; k < PULSES; k += 1) {
        const pulse = buffers.pulseState[k];
        if (!reducedMotion) pulse.t += dt * pulse.speed * 1.6;
        if (pulse.t >= 1) {
          const end = edges[pulse.edge * 2 + (pulse.forward ? 1 : 0)];
          const next = shapes.adjacency[end];
          const choice = next.length > 0 ? next[Math.floor(Math.random() * next.length)] : Math.floor(Math.random() * edgeCount);
          pulse.forward = edges[choice * 2] === end;
          pulse.edge = choice;
          pulse.t = 0;
        }
        const a = edges[pulse.edge * 2 + (pulse.forward ? 0 : 1)] * 3;
        const b = edges[pulse.edge * 2 + (pulse.forward ? 1 : 0)] * 3;
        for (let axis = 0; axis < 3; axis += 1) {
          buffers.pulsePosition[k * 3 + axis] = position[a + axis] + (position[b + axis] - position[a + axis]) * pulse.t;
        }
      }
      pulseGeometry.attributes.position.needsUpdate = true;
    }

    // ── Motion: a slow turn that settles to face the reader as the head
    //    forms, and a lean towards the pointer. ──
    const g = group.current;
    if (g === null) return;
    const settle = smoothstep(0.55, 1, morph);
    if (!reducedMotion) yaw.current += dt * 0.16 * (1 - settle);
    const wrapped = Math.atan2(Math.sin(yaw.current), Math.cos(yaw.current));
    const targetY = wrapped * (1 - settle) + pointerX * 0.45;
    const targetX = -pointerY * 0.22 + 0.08;
    const ease = 1 - Math.exp(-dt * 3);
    g.rotation.y += (targetY - g.rotation.y) * ease;
    g.rotation.x += (targetX - g.rotation.x) * ease;
    if (!reducedMotion) g.position.y = Math.sin(time * 0.8) * 0.04 + groupY.current;
  });

  return (
    <group ref={group} position={[wide ? 1.55 : 0, groupY.current, 0]} scale={scale}>
      <lineSegments geometry={lineGeometry} material={lineMaterial} />
      <points geometry={pointGeometry} material={pointMaterial} />
      <points geometry={pulseGeometry} material={pulseMaterial} />
    </group>
  );
}

/**
 * The Neural Core: a particle brain that becomes a robot head as the reader
 * scrolls. Loaded only in the browser (the hero imports it with `ssr: false`)
 * and rendered only while the hero is on screen.
 */
export default function NeuralCoreScene({ input, count, reducedMotion, active }: SceneProps): ReactElement {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.1, 5.2], fov: 42, near: 0.1, far: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      aria-hidden
    >
      <NeuralCore input={input} count={count} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
