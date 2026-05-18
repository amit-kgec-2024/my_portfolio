"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const lerp = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      requestAnimationFrame(lerp);
    };

    const onEnter = () => ring.style.transform += " scale(2)";
    const onLeave = () => ring.style.transform = ring.style.transform.replace(" scale(2)", "");

    document.querySelectorAll("a, button, [data-hover]").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", move);
    const raf = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          width: 8, height: 8,
          background: "#C8F135",
          borderRadius: "50%",
          position: "fixed",
          top: 0, left: 0,
          pointerEvents: "none",
          zIndex: 10000,
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={ringRef}
        style={{
          width: 32, height: 32,
          border: "1.5px solid #C8F135",
          borderRadius: "50%",
          position: "fixed",
          top: 0, left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          transition: "transform 0.08s ease, width 0.2s, height 0.2s",
        }}
      />
    </>
  );
}
