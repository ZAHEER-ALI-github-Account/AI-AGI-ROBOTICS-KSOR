import { RecordShell } from "@/components/record-shell";
import { ParticleField } from "@/components/article/particle-field";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <>
      {/* The reading pages' only background motion: a light 2D canvas, held
          by the layout so it keeps drifting across page changes. */}
      <ParticleField />
      <RecordShell>{children}</RecordShell>
    </>
  );
}
