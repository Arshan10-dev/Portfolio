// ─── SectionTitle Component ──────────────────────────────────
// Reusable section heading with animated accent line.
// Props: eyebrow (small label above), title, subtitle (optional)

import { motion } from "framer-motion";

const SectionTitle = ({ eyebrow, title, subtitle, center = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      {/* Eyebrow label */}
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
          <span className="w-6 h-[2px] bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
          <span className="text-sm font-mono font-medium tracking-widest text-violet-400 uppercase">
            {eyebrow}
          </span>
          <span className="w-6 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </div>
      )}

      {/* Main title */}
      <h2
        className="font-display font-bold leading-tight"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        {/* Split the last word to apply gradient */}
        {(() => {
          const words = title.split(" ");
          const last = words.pop();
          return (
            <>
              {words.join(" ")}{" "}
              <span className="gradient-text">{last}</span>
            </>
          );
        })()}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p className={`mt-4 text-muted text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
