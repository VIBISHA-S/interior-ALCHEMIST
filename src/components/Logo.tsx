import { cn } from "@/lib/utils";
import { maskStyle } from "@/lib/mask";

// The client's logo (from FINAL LOGO FILE.eps), stored as alpha masks so it takes any colour via `bg-*`.
const variants = {
  full: { file: "/logo.png", ratio: "1212 / 1066" },
  mark: { file: "/logo-mark.png", ratio: "1196 / 594" },
  wordmark: { file: "/logo-wordmark.png", ratio: "1204 / 446" },
};

export default function Logo({
  variant = "wordmark",
  className,
}: {
  variant?: keyof typeof variants;
  className?: string;
}) {
  const { file, ratio } = variants[variant];
  return (
    <span
      role="img"
      aria-label="Interior Alchemist"
      className={cn("block bg-ink", className)}
      style={maskStyle(file, ratio)}
    />
  );
}
