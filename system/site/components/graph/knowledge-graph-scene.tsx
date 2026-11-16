"use client";

import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef, type MutableRefObject, type ReactElement } from "react";
import * as THREE from "three";

import { installThreeConsole } from "@/lib/three-console";

import type { GraphLink, GraphNode } from "@/lib/knowledge-graph";

installThreeConsole();

/** The parts of drei's OrbitControls the scene drives. */
interface OrbitControlsImpl {
  target: THREE.Vector3;
  autoRotate: boolean;
  enabled: boolean;
  update(): void;
}


/** A camera flight the scene performs: to a node, then (optionally) a callback. */
export interface FlightRequest {
  node: number;
  /** Called when the camera arrives. */
  onArrive?: () => void;
}

interface SceneProps {
  nodes: readonly GraphNode[];
  links: readonly GraphLink[];
  hovered: number | null;
  onHover: (index: number | null) => void;
  onSelect: (index: number) => void;
  /** Set by the page to fly the camera; the scene clears it on arrival. */
  flight: MutableRefObject<FlightRequest | null>;
  reducedMotion: boolean;
  /** A phone or a modest machine: fewer stars, a lower pixel ratio. */
  lowPower?: boolean;
}

function nodeRadius(node: GraphNode): number {
  if (node.kind === "hub") return 0.95;
  if (node.kind === "section") return 0.55;
  return 0.2 + Math.min(node.degree, 10) * 0.025;
}

/** A soft round glow, drawn once and shared by every halo sprite. */
function useGlowTexture(): THREE.Texture {
  const texture = useMemo(() => {
    const size = 128;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (ctx !== null) {
      const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.18, "rgba(255,255,255,0.55)");
      g.addColorStop(0.45, "rgba(255,255,255,0.12)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
    }
    const t = new THREE.CanvasTexture(canvas);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
  useEffect(() => () => texture.dispose(), [texture]);
  return texture;
}

function Node({
  node,
  index,
  glow,
  state,
  onHover,
  onSelect,
}: {
  node: GraphNode;
  index: number;
  glow: THREE.Texture;
  /** "focus" = hovered, "near" = a neighbour of it, "dim" = everything else. */
  state: "rest" | "focus" | "near" | "dim";
  onHover: (index: number | null) => void;
  onSelect: (index: number) => void;
}): ReactElement {
  const radius = nodeRadius(node);
  const group = useRef<THREE.Group>(null);
  const halo = useRef<THREE.SpriteMaterial>(null);
  const core = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((_, delta) => {
    const g = group.current;
    if (g === null) return;
    const targetScale = state === "focus" ? 1.6 : state === "near" ? 1.15 : 1;
    const s = g.scale.x + (targetScale - g.scale.x) * Math.min(1, delta * 10);
    g.scale.setScalar(s);
    const targetOpacity = state === "dim" ? 0.18 : 1;
    if (core.current !== null) core.current.opacity += (targetOpacity - core.current.opacity) * Math.min(1, delta * 8);
    if (halo.current !== null) {
      const haloTarget = (state === "dim" ? 0.12 : node.kind === "article" ? 0.55 : 0.85) * (state === "focus" ? 1.4 : 1);
      halo.current.opacity += (haloTarget - halo.current.opacity) * Math.min(1, delta * 8);
    }
  });

  return (
    <group ref={group} position={node.position as [number, number, number]}>
      <mesh
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          onHover(index);
        }}
        onPointerOut={() => onHover(null)}
        onClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          onSelect(index);
        }}
      >
        {/* A generous invisible hit area, so small nodes are easy to catch. */}
        <sphereGeometry args={[Math.max(radius * 1.8, 0.5), 12, 12]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[radius, 24, 24]} />
        <meshBasicMaterial ref={core} color={node.color} transparent toneMapped={false} />
      </mesh>
      <sprite scale={radius * (node.kind === "hub" ? 9 : 7)}>
        <spriteMaterial
          ref={halo}
          map={glow}
          color={node.color}
          transparent
          opacity={0.6}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </sprite>
      {node.kind !== "article" ? (
        <Html center distanceFactor={22} position={[0, radius + 0.9, 0]} style={{ pointerEvents: "none" }} zIndexRange={[10, 0]}>
          <span
            className="block font-mono text-[11px] tracking-[0.18em] whitespace-nowrap uppercase"
            style={{ color: node.color, textShadow: "0 0 12px rgba(0,0,0,0.9)", opacity: state === "dim" ? 0.25 : 0.95 }}
          >
            {node.title}
          </span>
        </Html>
      ) : null}
    </group>
  );
}

function Links({
  nodes,
  links,
  hovered,
}: {
  nodes: readonly GraphNode[];
  links: readonly GraphLink[];
  hovered: number | null;
}): ReactElement {
  // All links, coloured by their endpoints; brightness by kind.
  const base = useMemo(() => {
    const position = new Float32Array(links.length * 6);
    const color = new Float32Array(links.length * 6);
    const c = new THREE.Color();
    links.forEach((link, i) => {
      const a = nodes[link.source];
      const b = nodes[link.target];
      position.set([...a.position, ...b.position], i * 6);
      const strength = link.kind === "related" ? 0.55 : link.kind === "hub" ? 0.7 : 0.22;
      c.set(a.color).multiplyScalar(strength);
      color.set([c.r, c.g, c.b], i * 6);
      c.set(b.color).multiplyScalar(strength);
      color.set([c.r, c.g, c.b], i * 6 + 3);
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(position, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(color, 3));
    return geometry;
  }, [nodes, links]);

  // The hovered node's own links, drawn bright on top.
  const focus = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    if (hovered === null) return geometry;
    const touching = links.filter((l) => l.source === hovered || l.target === hovered);
    const position = new Float32Array(touching.length * 6);
    const color = new Float32Array(touching.length * 6);
    const c = new THREE.Color();
    touching.forEach((link, i) => {
      const a = nodes[link.source];
      const b = nodes[link.target];
      position.set([...a.position, ...b.position], i * 6);
      c.set(a.color);
      color.set([c.r, c.g, c.b], i * 6);
      c.set(b.color);
      color.set([c.r, c.g, c.b], i * 6 + 3);
    });
    geometry.setAttribute("position", new THREE.BufferAttribute(position, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(color, 3));
    return geometry;
  }, [nodes, links, hovered]);

  useEffect(() => () => base.dispose(), [base]);
  useEffect(() => () => focus.dispose(), [focus]);

  return (
    <>
      <lineSegments geometry={base}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={hovered === null ? 0.75 : 0.18}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </lineSegments>
      <lineSegments geometry={focus}>
        <lineBasicMaterial vertexColors transparent opacity={1} depthWrite={false} blending={THREE.AdditiveBlending} toneMapped={false} />
      </lineSegments>
    </>
  );
}

/** Flies the camera (and the orbit target) to a node, then reports arrival. */
function CameraRig({
  nodes,
  flight,
  reducedMotion,
}: {
  nodes: readonly GraphNode[];
  flight: MutableRefObject<FlightRequest | null>;
  reducedMotion: boolean;
}): null {
  const { camera, controls } = useThree();
  const active = useRef<{
    request: FlightRequest;
    fromPos: THREE.Vector3;
    toPos: THREE.Vector3;
    fromTarget: THREE.Vector3;
    toTarget: THREE.Vector3;
    t: number;
  } | null>(null);

  useFrame((_, delta) => {
    const orbit = controls as OrbitControlsImpl | null;
    if (orbit === null) return;

    if (flight.current !== null && active.current?.request !== flight.current) {
      const node = nodes[flight.current.node];
      const toTarget = new THREE.Vector3(...node.position);
      // Approach from where the camera already is, stopping a short way off.
      const away = camera.position.clone().sub(toTarget).normalize();
      const distance = node.kind === "article" ? 4.2 : node.kind === "hub" ? 9 : 7;
      active.current = {
        request: flight.current,
        fromPos: camera.position.clone(),
        toPos: toTarget.clone().add(away.multiplyScalar(distance)),
        fromTarget: orbit.target.clone(),
        toTarget,
        t: reducedMotion ? 1 : 0,
      };
      orbit.autoRotate = false;
      orbit.enabled = false;
    }

    const f = active.current;
    if (f === null) return;
    f.t = Math.min(1, f.t + delta / 1.3);
    const e = f.t < 0.5 ? 4 * f.t ** 3 : 1 - (-2 * f.t + 2) ** 3 / 2; // easeInOutCubic
    camera.position.lerpVectors(f.fromPos, f.toPos, e);
    orbit.target.lerpVectors(f.fromTarget, f.toTarget, e);
    orbit.update();
    if (f.t >= 1) {
      active.current = null;
      orbit.enabled = true;
      if (flight.current === f.request) flight.current = null;
      f.request.onArrive?.();
    }
  });

  return null;
}

export default function KnowledgeGraphScene({
  nodes,
  links,
  hovered,
  onHover,
  onSelect,
  flight,
  reducedMotion,
  lowPower = false,
}: SceneProps): ReactElement {
  const neighbours = useMemo(() => {
    if (hovered === null) return null;
    const set = new Set<number>([hovered]);
    for (const l of links) {
      if (l.source === hovered) set.add(l.target);
      if (l.target === hovered) set.add(l.source);
    }
    return set;
  }, [hovered, links]);

  useEffect(() => {
    document.body.style.cursor = hovered === null ? "" : "pointer";
    return () => {
      document.body.style.cursor = "";
    };
  }, [hovered]);

  return (
    <Canvas
      dpr={lowPower ? [1, 1.25] : [1, 1.75]}
      camera={{ position: [0, 5, 30], fov: 50, near: 0.1, far: 400 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onPointerMissed={() => onHover(null)}
    >
      <Stars radius={90} depth={50} count={lowPower ? 700 : 1800} factor={3} saturation={0} fade speed={reducedMotion ? 0 : 0.6} />
      <SceneContent
        nodes={nodes}
        links={links}
        hovered={hovered}
        neighbours={neighbours}
        onHover={onHover}
        onSelect={onSelect}
      />
      <CameraRig nodes={nodes} flight={flight} reducedMotion={reducedMotion} />
      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.35}
        minDistance={3}
        maxDistance={70}
        rotateSpeed={0.7}
        zoomSpeed={0.9}
        onStart={(e) => {
          // The first touch from the reader ends the idle turn for good.
          const target = (e as unknown as { target: OrbitControlsImpl } | undefined)?.target;
          if (target !== undefined) target.autoRotate = false;
        }}
      />
    </Canvas>
  );
}

function SceneContent({
  nodes,
  links,
  hovered,
  neighbours,
  onHover,
  onSelect,
}: {
  nodes: readonly GraphNode[];
  links: readonly GraphLink[];
  hovered: number | null;
  neighbours: Set<number> | null;
  onHover: (index: number | null) => void;
  onSelect: (index: number) => void;
}): ReactElement {
  const glow = useGlowTexture();
  return (
    <>
      <Links nodes={nodes} links={links} hovered={hovered} />
      {nodes.map((node, i) => (
        <Node
          key={node.url}
          node={node}
          index={i}
          glow={glow}
          state={hovered === null ? "rest" : hovered === i ? "focus" : neighbours?.has(i) ? "near" : "dim"}
          onHover={onHover}
          onSelect={onSelect}
        />
      ))}
    </>
  );
}
