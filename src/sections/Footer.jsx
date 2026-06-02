// ─── Footer Section ──────────────────────────────────────────
// Dark footer with nav links, social icons, and copyright.
// Replace name and links in data/personal.js

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart } from "react-icons/fi";
import { personal } from "../data/personal";

const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Resume",   href: "#resume"   },
  { label: "Contact",  href: "#contact"  },
];

const SOCIAL_LINKS = [
  { icon: FiGithub,   href: personal.socials.github,   label: "GitHub"   },
  { icon: FiLinkedin, href: personal.socials.linkedin,  label: "LinkedIn" },
  { icon: FiInstagram,  href: personal.socials.instagram,   label: "Instagram"  },
  { icon: FiMail,     href: personal.socials.email,     label: "Email"    },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 mt-10">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-center mb-10">

          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                {personal.avatarInitials}
              </div>
              <span className="font-display font-bold text-lg gradient-text">{personal.name}</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Building beautiful, performant web experiences one component at a time.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </motion.nav>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-end gap-3"
          >
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href || "#"}
                target={href?.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl glass text-muted hover:text-violet-400 flex items-center justify-center transition-colors border border-white/5 hover:border-violet-500/30"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center"
        >
          <p className="text-muted text-sm">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="text-muted text-sm flex items-center gap-1.5">
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
