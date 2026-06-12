// ─── Projects Section ────────────────────────────────────────
// Filterable project grid with featured highlight and
// category filter tabs. Cards from data/projects.js

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

// Filter tabs — add more categories if needed
const FILTERS = ["All", "Featured", "React", "Python", "Crud API", "JavaScript"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on active tab
  const filtered = projects.filter((p) => {
    if (activeFilter === "All")      return true;
    if (activeFilter === "Featured") return p.featured;
    return p.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <section id="projects" className="section-padding relative">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          eyebrow="My Work"
          title="Featured Projects"
          subtitle="A curated selection of projects I've built — from concept to deployment."
          center
        />

        {/* ── Filter tabs ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-glow-violet"
                  : "glass text-muted hover:text-white border border-white/5"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* ── Project grid ─────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-muted"
          >
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg">No projects match this filter.</p>
          </motion.div>
        )}

        {/* ── GitHub CTA ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-muted mb-4">
            These are just highlights — there's more on GitHub.
          </p>
          <a
            href="https://github.com/Arshan10-dev" /* ← replace */
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-sm"
          >
            View All on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
