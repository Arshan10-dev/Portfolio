// ─── ProjectCard Component ───────────────────────────────────
// Glassmorphism project card with image, tags, and action buttons.
// Props: project object from data/projects.js

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full"
    >
      {/* ── Image ─────────────────────────────── */}
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060612]/90 via-transparent to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 left-3 text-xs font-mono font-medium px-3 py-1 rounded-full bg-violet-600/90 text-white backdrop-blur-sm">
            Featured
          </span>
        )}

        {/* Quick action buttons on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass text-white hover:bg-violet-600/50 transition-colors"
            aria-label="View GitHub repository"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass text-white hover:bg-blue-600/50 transition-colors"
            aria-label="View live demo"
          >
            <FiExternalLink size={20} />
          </a>
        </motion.div>
      </div>

      {/* ── Content ───────────────────────────── */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-xl text-white mb-2 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 text-sm py-2 px-4 flex-1 justify-center"
          >
            <FiGithub size={15} />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-sm py-2 px-4 flex-1 justify-center relative z-10"
          >
            <FiExternalLink size={15} />
            <span className="relative z-10">Live Demo</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
