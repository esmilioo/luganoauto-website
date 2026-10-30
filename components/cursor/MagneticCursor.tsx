"use client";

import { useEffect, useRef } from "react";

export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;

      const t = e.target as HTMLElement;
      const magnetic = t.closest("[data-magnetic]") as HTMLElement | null;
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        if (el !== magnetic) el.style.transform = "";
      });
      if (magnetic) {
        const r = magnetic.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        magnetic.style.transform = `translate3d(${(mouseX - cx) * 0.2}px, ${
          (mouseY - cy) * 0.2
        }px, 0)`;
        ring.style.width = "48px";
        ring.style.height = "48px";
        ring.style.borderColor = "rgba(255,46,76,0.8)";
      } else {
        ring.style.width = "28px";
        ring.style.height = "28px";
        ring.style.borderColor = "rgba(245,245,245,0.3)";
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX - 14}px, ${ringY - 14}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full bg-titanium mix-blend-difference"
        style={{ transition: "transform 0.05s linear" }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-7 w-7 rounded-full border border-titanium/30"
        style={{
          transition:
            "width 0.35s var(--ease-apple), height 0.35s var(--ease-apple), border-color 0.3s",
        }}
        aria-hidden
      />
    </>
  );
}