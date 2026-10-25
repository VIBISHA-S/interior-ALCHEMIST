import { cn } from "@/lib/utils";

// Concentric rings centred exactly on the line where two sections meet. The upper section draws the
// top half and the lower section the bottom half, so the arcs read as one shape flowing across the seam.
// Both halves share the same size and horizontal position, which keeps them aligned at every width.
const radii = [44, 52, 60, 68, 76, 84, 92];

export default function ArcSeam({ half, side }: { half: "top" | "bottom"; side: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      viewBox={half === "top" ? "-100 -100 200 100" : "-100 0 200 100"}
      className={cn(
        "pointer-events-none absolute -z-10 aspect-[2/1] w-[clamp(18.75rem,40*var(--vw),38.75rem)] text-taupe/25",
        half === "top" ? "bottom-0" : "top-0",
        side === "left" ? "-left-[14%]" : "-right-[14%]"
      )}
      fill="none"
      stroke="currentColor"
    >
      {radii.map((r) => (
        <circle key={r} r={r} strokeWidth={3} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}
