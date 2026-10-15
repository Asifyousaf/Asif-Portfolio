import { useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";

export function MotionSystem() {
  const cursor = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const toTop = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    // IntersectionObserver for reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 80px 0px" }
    );

    const observeReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in or near viewport, reveal immediately
        if (rect.top <= vh + 150 && rect.bottom >= -100) {
          el.classList.add("is-visible");
        } else {
          observer.observe(el);
        }
      });
    };

    // Initial and multi-frame checks to catch async route mounts
    observeReveals();
    const frameId = requestAnimationFrame(observeReveals);
    const t1 = setTimeout(observeReveals, 60);
    const t2 = setTimeout(observeReveals, 250);
    const t3 = setTimeout(observeReveals, 600);

    // MutationObserver to catch any deferred DOM updates
    const mutObserver = new MutationObserver(() => {
      observeReveals();
    });
    mutObserver.observe(document.body, { childList: true, subtree: true });

    // Custom cursor motion: symmetrical center pinning & surface contrast detection
    const move = (e: PointerEvent) => {
      if (!cursor.current || e.pointerType === "touch" || reduced.matches) return;
      // Symmetrical center pinning with translate(-50%, -50%)
      cursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      cursor.current.classList.add("cursor-visible");

      const target = e.target instanceof Element ? e.target : null;
      const isInteractive = Boolean(
        target?.closest("a, button, [role='button'], input, textarea, .case-link, .project-image-link, .system-node, .resume-download-btn, .more-work a")
      );
      cursor.current.classList.toggle("cursor-active", isInteractive);

      // Invert cursor color on the neon-green contact section or lime elements for high contrast
      const isLightSurface = Boolean(
        target?.closest(".contact-section, .studio-button, .node-selected")
      );
      cursor.current.classList.toggle("cursor-inverted", isLightSurface);
    };

    const handleMouseLeave = () => {
      cursor.current?.classList.remove("cursor-visible");
    };

    // Scroll reading progress & back-to-top button
    const scroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) {
        progress.current.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
      }
      if (toTop.current) {
        toTop.current.classList.toggle("is-shown", window.scrollY > 500);
      }
    };

    const toTopClick = () => {
      window.scrollTo({ top: 0, behavior: reduced.matches ? "auto" : "smooth" });
    };

    const topBtn = toTop.current;
    topBtn?.addEventListener("click", toTopClick);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();

    return () => {
      observer.disconnect();
      mutObserver.disconnect();
      cancelAnimationFrame(frameId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", scroll);
      topBtn?.removeEventListener("click", toTopClick);
    };
  }, [location.pathname]);

  return (
    <>
      <div className="reading-progress" ref={progress} />
      <div className="system-cursor" ref={cursor} aria-hidden="true" />
      <button className="back-to-top" ref={toTop} type="button" aria-label="Back to top">
        <ArrowUp size={18} />
      </button>
    </>
  );
}
