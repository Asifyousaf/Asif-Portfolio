import { useEffect, useRef } from "react";

export function MotionSystem() {
  const cursor = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    const move = (e: PointerEvent) => {
      if (!cursor.current || e.pointerType !== "mouse" || reduced.matches) return;
      cursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      cursor.current.classList.add("cursor-visible");
      const target = e.target instanceof Element ? e.target.closest("a,button") : null;
      cursor.current.classList.toggle("cursor-active", Boolean(target));
    };
    const scroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", scroll, { passive: true }); scroll();
    return () => { observer.disconnect(); window.removeEventListener("pointermove", move); window.removeEventListener("scroll", scroll); };
  }, []);
  return <><div className="reading-progress" ref={progress} /><div className="system-cursor" ref={cursor} aria-hidden="true" /></>;
}