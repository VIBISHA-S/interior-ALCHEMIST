import { cn } from "@/lib/utils";

// Maroon / gold / stone hairline from the mockup, used under the marquee and at the foot of the page.
// `relative` keeps it above the locked (sticky) sections.
export default function Stripe({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("relative flex h-[3px] w-full", className)}>
      <span className="flex-1 bg-maroon" />
      <span className="flex-1 bg-gold" />
      <span className="flex-1 bg-stone" />
    </div>
  );
}
