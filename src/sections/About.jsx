// ─── About Section ───────────────────────────────────────────
// Split layout: bio text on left, animated stat cards on right.
// Replace text content in data/personal.js

import { motion } from "framer-motion";
import { FiDownload, FiMapPin, FiMail } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { personal } from "../data/personal";

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      {/* Subtle background accent */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          eyebrow="About Me"
          title="The Story Behind the Code"
          subtitle="A little bit about who I am, what I do, and what drives me."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Bio ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Avatar placeholder */}
            <div className="flex items-center gap-5 mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-blue-500 flex items-center justify-center font-display font-bold text-2xl text-white shadow-glow-violet">
                  {personal.avatarInitials}
                </div>
                {/* Online indicator */}
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-[#060612] flex items-center justify-center">
                  <span className="w-2 h-2 bg-emerald-300 rounded-full animate-ping absolute" />
                </span>
              </div>
              <div>
                <p className="font-display font-semibold text-xl text-white">{personal.name}</p>
                {/* Replace with your actual role */}
                <p className="text-violet-400 font-mono text-sm">{personal.role}</p>
                <div className="flex items-center gap-1.5 text-muted text-sm mt-1">
                  <FiMapPin size={13} />
                  {personal.location}
                </div>
              </div>
            </div>

            {/* Bio paragraphs — edit in data/personal.js */}
            <p className="text-slate-300 leading-relaxed text-[1.05rem]">
              {personal.about}
            </p>
            <p className="text-muted leading-relaxed">
              {personal.aboutExtra}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={personal.resumeUrl}
                download
                className="btn-primary flex items-center gap-2 text-sm py-2.5 px-6"
              >
                <FiDownload size={16} />
                <span className="relative z-10">Download CV</span>
              </a>
              <a
                href={personal.socials.email}
                className="btn-outline flex items-center gap-2 text-sm py-2.5 px-6"
              >
                <FiMail size={16} />
                Say Hello
              </a>
            </div>
          </motion.div>

          {/* ── Right: Stats grid ────────────────────────── */}
          <div className="grid grid-cols-2 gap-4">
            {personal.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="glass glass-hover rounded-2xl p-6 flex flex-col gap-2"
              >
                <span
                  className="font-display font-bold leading-none gradient-text"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
                >
                  {stat.value}
                </span>
                <span className="text-muted text-sm">{stat.label}</span>
              </motion.div>
            ))}

            {/* Extra decorative card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 glass rounded-2xl p-5 flex items-center gap-4 border border-violet-500/20"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white text-lg flex-shrink-0">
                ⚡
              </div>
              <div>
                <p className="text-white font-medium text-sm">Currently building in public</p>
                {/* Replace with your current project/focus */}
                <p className="text-muted text-xs mt-0.5">
                  Working on an AI-powered design-to-code tool
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
