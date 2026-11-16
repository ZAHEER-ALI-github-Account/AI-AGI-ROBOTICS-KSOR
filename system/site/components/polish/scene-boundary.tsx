"use client";

import { Component, type ReactNode } from "react";

/**
 * Catches a 3D scene that fails after it starts — a lost GPU context, a driver
 * that refuses a shader — and shows the page's fallback instead of a broken
 * page. The failure is logged once, as an error worth knowing about.
 */
export class SceneBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  componentDidCatch(error: unknown): void {
    console.error("3D scene unavailable, showing the fallback:", error);
  }

  render(): ReactNode {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
