// ─── Skills Section ──────────────────────────────────────────
// Three skill category cards with animated progress bars,
// plus a horizontal scrolling tech marquee strip.

import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { skillCategories, techPills } from "../data/skills";

// Duplicated for seamless loop
const MARQUEE_ITEMS = [...techPills, ...techPills];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          eyebrow="My Toolkit"
          title="Skills & Technologies"
          subtitle="The tools, languages, and frameworks I reach for to build exceptional products."
        />

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

        {/* ── Marquee strip ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #060612, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(-90deg, #060612, transparent)" }} />

          <div className="overflow-hidden py-4">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 w-max"
            >
              {MARQUEE_ITEMS.map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="px-5 py-2.5 glass rounded-full text-sm font-mono text-violet-300 border border-violet-500/15 whitespace-nowrap flex-shrink-0"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
