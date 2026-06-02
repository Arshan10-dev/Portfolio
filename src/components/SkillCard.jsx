// ─── SkillCard Component ─────────────────────────────────────
// Animated skill bar card for a single skill category.
// Props: category object from data/skills.js, index for stagger

import { motion } from "framer-motion";

const SkillCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="glass glass-hover rounded-2xl p-7"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-3 h-8 rounded-full"
          style={{ background: `linear-gradient(180deg, ${category.color}, ${category.color}88)` }}
        />
        <h3 className="font-display font-semibold text-lg text-white">
          {category.label}
        </h3>
      </div>

      {/* Skill bars */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-slate-300">{skill.name}</span>
              
            </div>
            {/* Bar track */}
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full relative"
                style={{
                  background: `linear-gradient(90deg, ${category.color}, ${category.color}cc)`,
                  boxShadow: `0 0 8px ${category.color}66`,
                }}
              >
                {/* Shine shimmer on the bar */}
                <span className="absolute right-0 top-0 w-2 h-full bg-white/30 rounded-full blur-sm" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
