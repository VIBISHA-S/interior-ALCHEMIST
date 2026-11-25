"use client";

import { useEffect, useRef } from "react";

// Pins a section (from md up) while the next one scrolls over it. A plain `top: 0` hides the lower part
// of any section taller than the screen, because it sticks before you can scroll to its bottom. So the
// pin offset is the screen height minus the section height: it sticks only once its bottom is in view.
export default function Pin({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      el.style.top = `${Math.min(0, window.innerHeight - el.offsetHeight)}px`;
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="md:sticky md:top-0">
      {children}
    </div>
  );
}
