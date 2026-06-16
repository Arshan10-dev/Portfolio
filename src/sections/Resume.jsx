// ─── Resume Section ──────────────────────────────────────────
// Timeline of experience & education with a download CTA.
// Edit the EXPERIENCE and EDUCATION arrays below directly.

import { motion } from "framer-motion";
import { FiDownload, FiCalendar, FiMapPin, FiBriefcase, FiBook } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { personal } from "../data/personal";

// ── Replace with your real experience ──────────────────────
const EXPERIENCE = [
  {
    role: "Mern Stack Development",
    company: "Self Learning & Personal Projects",
    location: "Remote",
    period: "2024 - Present",
    description:
      "Built multiple full stack web applications using React, Node.js, Express.js and MongoDB while learning modern web development practices.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"]
  },
  {
    role: "Mobile App Development",
    company: "Personal Projects",
    location: "Remote",
    period: "2025 - Present",
    description:
      "Developed Android applications using React Native and Expo, focusing on UI design, API integration and performance optimization.",
    tags: ["React Native", "Expo Go", "TypeScript", "Python"]
  },
  {
    role: "Computer Networking",
    company: "Independent Learning",
    location: "Remote",
    period: "2025 - Present",
    description:
      "Exploring networking fundamentals including routing, switching, network protocols, and troubleshooting using Cisco Packet Tracer and practical simulations.",
    tags: ["Networking", "Cisco Packet Tracer", "Network Protocols", "WireShark"]
  },
];

// ── Replace with your real education ───────────────────────
const EDUCATION = [
  {
    degree: "B.Sc. Computer Science",            // ← your degree
    institution: "University of Mumbai",    // ← your institution
    location: "Mumbai, India",
    period: "2024 – 2027",
    description:
      "Currently in the Final Year",
  },
  {
    degree: "Computer Networking",
    institution: "Cisco Networking Academy",
    location: "Online",
    period: "2025-Present",
    description:
      "Learning networking concepts including routing, switching, IP addressing, network protocols and troubleshooting through practical labs.",
  },
];

// ── Timeline Item ───────────────────────────────────────────
const TimelineItem = ({ item, index, isExperience }) => (
  <motion.div
    initial={{ opacity: 0, x: isExperience ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    className="relative pl-8 pb-10 last:pb-0"
  >
    {/* Vertical line */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent" />
    {/* Dot */}
    <div className="absolute left-0 top-1 w-2.5 h-2.5 -translate-x-[4px] rounded-full border-2 border-violet-500 bg-[#060612]" />

    <div className="glass glass-hover rounded-2xl p-5">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <h4 className="font-display font-semibold text-white text-base">
            {isExperience ? item.role : item.degree}
          </h4>
          <p className="text-violet-400 text-sm font-medium mt-0.5">
            {isExperience ? item.company : item.institution}
          </p>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-mono text-muted bg-white/5 px-3 py-1 rounded-full flex-shrink-0">
          <FiCalendar size={11} />
          {item.period}
        </span>
      </div>

      <div className="flex items-center gap-1.5 text-xs text-muted mb-3">
        <FiMapPin size={11} />
        {item.location}
      </div>

      <p className="text-muted text-sm leading-relaxed mb-3">{item.description}</p>

      {/* Tags (experience only) */}
      {item.tags && (
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

const Resume = () => {
  return (
    <section id="resume" className="section-padding relative">
      <div
        className="absolute top-1/3 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          eyebrow="My Journey"
          title="Experience & Education"
          subtitle="A timeline of the roles and learning that shaped my craft."
        />

        <div className="grid lg:grid-cols-2 gap-12 mb-14">
          {/* Experience column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <FiBriefcase className="text-violet-400" size={20} />
              <h3 className="font-display font-semibold text-lg text-white">Work Experience</h3>
            </motion.div>
            {EXPERIENCE.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} isExperience />
            ))}
          </div>

          {/* Education column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <FiBook className="text-blue-400" size={20} />
              <h3 className="font-display font-semibold text-lg text-white">Education</h3>
            </motion.div>
            {EDUCATION.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} isExperience={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
