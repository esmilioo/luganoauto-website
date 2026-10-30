"use client";

import { useEffect, useRef } from "react";

type CursorState = "default" | "interactive" | "text";

const STATE_DIMS: Record<
  CursorState,
  { w: number; h: number; r: number; c: string; dotOp: number }
> = {
  default: { w: 28, h: 28, r: 50, c: "rgba(245, 245, 245, 0.3)", dotOp: 1 },
  interactive: { w: 48, h: 48, r: 50, c: "rgba(255, 46, 76, 0.85)", dotOp: 1 },
  text: { w: 2, h: 22, r: 2, c: "rgba(245, 245, 245, 0.85)", dotOp: 0 },
};

const SHAKE_DURATION = 1400; // ms totali dell'effetto
const SHAKE_WINDOW = 600; // ms finestra per contare i flip
const SHAKE_FLIPS = 5; // flip minimi per attivare
const SHAKE_PEAK = 90; // px di diametro al picco
const MIN_SPEED = 8; // sotto questa soglia non contiamo flip

export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Nasconde cursore nativo in tutto il sito
    const STYLE_ID = "lugano-custom-cursor";
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = `
        html, body, a, button, input, textarea, select,
        [contenteditable="true"], [data-magnetic], * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Posizione
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    // Dimensioni correnti (interpolate)
    let curW = 28;
    let curH = 28;
    let curR = 50;

    let state: CursorState = "default";
    let raf = 0;
    let windowVisible = true;

    // === Shake detection ===
    let shakeStart = 0;
    const flips: number[] = [];
    let lastSignX = 0;
    let lastSignY = 0;

    const isShaking = (now: number) =>
      shakeStart > 0 && now - shakeStart < SHAKE_DURATION;

    const computeShake = (now: number): number => {
      if (shakeStart === 0) return 0;
      const elapsed = now - shakeStart;
      if (elapsed >= SHAKE_DURATION) {
        shakeStart = 0;
        return 0;
      }
      const t = elapsed / SHAKE_DURATION;
      // 0→20%: crescita rapida (0→1); 20%→100%: decadimento lineare (1→0)
      return t < 0.2 ? t / 0.2 : Math.max(0, 1 - (t - 0.2) / 0.8);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const now = performance.now();

      // 1) Shake detection
      const dx = e.movementX;
      const dy = e.movementY;
      const speed = Math.abs(dx) + Math.abs(dy);

      if (speed > MIN_SPEED && !isShaking(now)) {
        const signX = Math.sign(dx);
        const signY = Math.sign(dy);

        if (signX !== 0 && lastSignX !== 0 && signX !== lastSignX) {
          flips.push(now);
        }
        if (signY !== 0 && lastSignY !== 0 && signY !== lastSignY) {
          flips.push(now);
        }
        if (signX !== 0) lastSignX = signX;
        if (signY !== 0) lastSignY = signY;

        // Prune finestra mobile
        while (flips.length && now - flips[0] > SHAKE_WINDOW) {
          flips.shift();
        }

        // Trigger
        if (flips.length >= SHAKE_FLIPS) {
          shakeStart = now;
          flips.length = 0;
        }
      }

      // 2) State detection
      const t = e.target as HTMLElement;
      const tag = t.tagName;
      const isText =
        tag === "INPUT" || tag === "TEXTAREA" || t.isContentEditable;
      const magnetic = t.closest("[data-magnetic]") as HTMLElement | null;

      document
        .querySelectorAll<HTMLElement>("[data-magnetic]")
        .forEach((el) => {
          if (el !== magnetic) el.style.transform = "";
        });

      if (isText) {
        state = "text";
      } else if (magnetic) {
        state = "interactive";
        const r = magnetic.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        magnetic.style.transform = `translate3d(${(mouseX - cx) * 0.2}px, ${
          (mouseY - cy) * 0.2
        }px, 0)`;
      } else {
        const clickable = t.closest("a, button, [role='button']");
        state = clickable ? "interactive" : "default";
      }
    };

    const onLeave = () => (windowVisible = false);
    const onEnter = () => (windowVisible = true);

    // === Loop di rendering ===
    const tick = () => {
      const now = performance.now();
      const shake = computeShake(now);

      // Lerp posizione
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      // Dimensioni target (state + shake blend)
      const dims = STATE_DIMS[state];
      const targetW = dims.w + (SHAKE_PEAK - dims.w) * shake;
      const targetH = dims.h + (SHAKE_PEAK - dims.h) * shake;
      const targetR = shake > 0.1 ? 50 : dims.r;

      // Interpolazione fluida
      curW += (targetW - curW) * 0.15;
      curH += (targetH - curH) * 0.15;
      curR += (targetR - curR) * 0.15;

      // Applica dimensioni
      ring.style.width = `${curW}px`;
      ring.style.height = `${curH}px`;
      ring.style.borderRadius = `${curR}%`;

      // Colore: durante shake forza crimson + alone
      if (shake > 0) {
        ring.style.borderColor = `rgba(255, 46, 76, ${0.3 + 0.55 * shake})`;
        ring.style.boxShadow = `0 0 ${40 * shake}px ${12 * shake}px rgba(255, 46, 76, ${
          0.45 * shake
        })`;
      } else {
        ring.style.borderColor = dims.c;
        ring.style.boxShadow = "none";
      }

      // Posizione (translate -50% mantiene il centro allineato)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
        1 + shake * 2
      })`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      // Opacità combinata windowVisible + dotOp + shake
      const dotVisible = dims.dotOp > 0 || shake > 0.1;
      dot.style.opacity = windowVisible && dotVisible ? "1" : "0";
      ring.style.opacity = windowVisible ? "1" : "0";

      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      document.getElementById(STYLE_ID)?.remove();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full bg-titanium mix-blend-difference"
        style={{ transition: "opacity 0.2s" }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] border"
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          borderColor: "rgba(245, 245, 245, 0.3)",
          transition: "opacity 0.2s",
        }}
        aria-hidden
      />
    </>
  );
}