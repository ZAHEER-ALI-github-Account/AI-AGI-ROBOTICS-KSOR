import { setConsoleFunction } from "three";

/**
 * Three's own console hook (`THREE.setConsoleFunction`), installed once by each
 * 3D scene module.
 *
 * It drops exactly one message: the `THREE.Clock` deprecation (r183). That
 * clock is created by @react-three/fiber's own store (9.8.2, the latest
 * release), not by this site, so the warning cannot be fixed from here and
 * would otherwise appear on every load of a 3D page. Every other message passes
 * through to the console unchanged.
 */
const SILENCED = [/Clock: This module has been deprecated/];

let installed = false;

export function installThreeConsole(): void {
  if (installed) return;
  installed = true;
  setConsoleFunction((level: string, message: string, ...rest: unknown[]) => {
    if (SILENCED.some((pattern) => pattern.test(message))) return;
    const method = level === "error" ? console.error : level === "warn" ? console.warn : console.log;
    method(message, ...rest);
  });
}
