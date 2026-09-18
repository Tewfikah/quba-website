import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsCarousel({ items = [], isRTL = false }) {
  const scrollerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateButtons = () => {
    const el = scrollerRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const left = Math.abs(el.scrollLeft);

    setCanLeft(left > 2);
    setCanRight(left < max - 2);
  };

  useEffect(() => {
    updateButtons();
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => updateButtons();
    const onResize = () => updateButtons();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;

    const amount = Math.round(el.clientWidth * 0.85);
    const direction = isRTL ? -dir : dir;

    el.scrollBy({
      left: direction * amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-8">
      {/* Arrow controls (show on sm+ screens) */}
      <div className="absolute -top-12 right-0 hidden sm:flex items-center gap-2">
        <motion.button
          whileHover={{ scale: canLeft ? 1.05 : 1 }}
          whileTap={{ scale: canLeft ? 0.98 : 1 }}
          onClick={() => scrollByAmount(-1)}
          disabled={!canLeft}
          aria-label="Scroll testimonials left"
          className={[
            "h-10 w-10 rounded-full border grid place-items-center transition",
            canLeft
              ? "border-[#083b35]/25 bg-white/70 text-[#083b35] hover:bg-white"
              : "border-[#083b35]/10 bg-white/40 text-[#083b35]/30 cursor-not-allowed",
          ].join(" ")}
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: canRight ? 1.05 : 1 }}
          whileTap={{ scale: canRight ? 0.98 : 1 }}
          onClick={() => scrollByAmount(1)}
          disabled={!canRight}
          aria-label="Scroll testimonials right"
          className={[
            "h-10 w-10 rounded-full border grid place-items-center transition",
            canRight
              ? "border-[#083b35]/25 bg-white/70 text-[#083b35] hover:bg-white"
              : "border-[#083b35]/10 bg-white/40 text-[#083b35]/30 cursor-not-allowed",
          ].join(" ")}
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>
      </div>

      {/* Scroll area */}
      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {items.map((t, idx) => (
          <div key={idx} className="snap-start">
            <TestimonialCard
              rating={t.rating ?? 5}
              quote={t.quote}
              name={t.name}
              meta={t.meta}
            />
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none relative -mt-20 h-20">
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#eef6f5] to-transparent" />
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#eef6f5] to-transparent" />
      </div>
    </div>
  );
}