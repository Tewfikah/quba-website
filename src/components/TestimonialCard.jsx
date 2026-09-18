import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialCard({ rating = 5, quote, name, meta }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="min-w-[260px] sm:min-w-[300px] lg:min-w-0 rounded-2xl border border-[#083b35]/15 bg-white/80 backdrop-blur shadow-[0_18px_40px_rgba(2,20,18,0.12)]"
    >
      <div className="p-6">
        {/* Stars */}
        <div className="flex items-center gap-1 text-amber-400">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="mt-4 text-[12px] leading-relaxed text-[#083b35]/80">
          “{quote}”
        </p>

        {/* Footer */}
        <div className="mt-5 border-t border-[#083b35]/10 pt-4">
          <div className="text-[12px] font-semibold text-[#083b35]">
            {name}
          </div>
          <div className="mt-1 text-[10px] text-[#083b35]/60">{meta}</div>
        </div>
      </div>
    </motion.article>
  );
}