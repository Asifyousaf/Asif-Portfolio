import { useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { useLocation } from "@tanstack/react-router";

export function MotionSystem() {
  const cursor = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const toTop = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Scroll & reveal observers re-scanned on page navigation and anchor jumps
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    // If reduced motion is requested, immediately reveal everything
    if (reduced.matches) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.05, rootMargin: "0px 0px 150px 0px" }
    );

    const scanReveals = () => {
      const reveals = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in or near the viewport, immediately reveal it
        if (rect.top <= viewportHeight + 150 && rect.bottom >= -100) {
          el.classList.add("is-visible");
        } else {
          observer.observe(el);
        }
      });
    };

    // Scan immediately, in next frames, and during async page transitions
    scanReveals();
    const rafId = requestAnimationFrame(scanReveals);
    const t1 = setTimeout(scanReveals, 50);
    const t2 = setTimeout(scanReveals, 200);
    const t3 = setTimeout(scanReveals, 500);

    // Watch for new DOM insertions (such as TanStack Router mounting new route components)
    const mutationObserver = new MutationObserver(() => {
      scanReveals();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const scroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) {
        progress.current.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
      }
      if (toTop.current) {
        toTop.current.classList.toggle("is-shown", window.scrollY > 400);
      }
      // Re-scan during scrolling to ensure nothing stays hidden
      scanReveals();
    };

    const toTopClick = () =>
      window.scrollTo({ top: 0, behavior: reduced.matches ? "auto" : "smooth" });

    const topBtn = toTop.current;
    topBtn?.addEventListener("click", toTopClick);
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("scroll", scroll);
      topBtn?.removeEventListener("click", toTopClick);
    };
  }, [location.pathname, location.hash]);

  // Cursor tracking & green/inverted surface detection
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const move = (e: PointerEvent) => {
      if (!cursor.current || e.pointerType !== "mouse") return;

      cursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      cursor.current.classList.add("cursor-visible");

      const target = e.target instanceof Element ? e.target.closest("a, button, [role='button'], input, textarea") : null;
      cursor.current.classList.toggle("cursor-active", Boolean(target));

      // Detect if cursor is over the green footer (.contact-section) or other neon primary elements
      const isInverted = Boolean(
        e.target instanceof Element &&
        (
          e.target.closest(".contact-section, .studio-button, .credential-badge, .node-selected, .image-open") ||
          (target && (target.classList.contains("studio-button") || target.closest(".contact-section")))
        )
      );
      cursor.current.classList.toggle("cursor-inverted", isInverted);
    };

    const onMouseLeave = () => {
      cursor.current?.classList.remove("cursor-visible");
    };

    const onMouseEnter = () => {
      cursor.current?.classList.add("cursor-visible");
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

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

