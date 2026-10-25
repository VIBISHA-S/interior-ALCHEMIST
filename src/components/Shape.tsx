import { cn } from "@/lib/utils";
import { maskStyle } from "@/lib/mask";

// One of the background shapes (sources in design/shapes/clean), coloured by `bg-*` through an SVG mask.
// Place inside a `relative isolate overflow-hidden` section and position it with `className`.
const shapes = {
  leaf: { file: "/shapes/leaf.svg", ratio: "1000 / 1200" },
  hatching: { file: "/shapes/hatching.svg", ratio: "1510 / 640" },
  // from the client's shape sheet
  pinwheel: { file: "/shapes/pinwheel.svg", ratio: "1 / 1" },
  "hatch-circle": { file: "/shapes/hatch-circle.svg", ratio: "1 / 1" },
  asterisk: { file: "/shapes/asterisk.svg", ratio: "1 / 1" },
  waves: { file: "/shapes/waves.svg", ratio: "1 / 1" },
  quarters: { file: "/shapes/quarters.svg", ratio: "1 / 1" },
};

export default function Shape({ kind, className }: { kind: keyof typeof shapes; className?: string }) {
  const { file, ratio } = shapes[kind];
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 block bg-taupe/25", className)}
      style={maskStyle(file, ratio)}
    />
  );
}
