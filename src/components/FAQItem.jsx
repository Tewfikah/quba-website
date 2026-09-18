import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ id, question, answer, isOpen, onToggle, isRTL }) {
  return (
    <div className="rounded-lg overflow-hidden">
      {/* Button Row */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        className={[
          "w-full flex items-center justify-between gap-4",
          "bg-[#083b35] text-white",
          "px-4 sm:px-5 py-3",
          "rounded-lg border border-white/10",
          "shadow-[0_16px_30px_rgba(2,20,18,0.18)]",
          "text-left",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60",
          isRTL ? "flex-row-reverse text-right" : "",
        ].join(" ")}
      >
        <span className="text-[12px] sm:text-[13px] font-semibold leading-snug">
          {question}
        </span>

        <ChevronDown
          className={[
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen ? "rotate-180" : "rotate-0",
          ].join(" ")}
        />
      </button>

      {/* Answer Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-[#083b35]/95 border-x border-b border-white/10 rounded-b-lg"
          >
            <div className={["px-4 sm:px-5 py-3", isRTL ? "text-right" : ""].join(" ")}>
              <p className="text-[12px] leading-relaxed text-white/75">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}