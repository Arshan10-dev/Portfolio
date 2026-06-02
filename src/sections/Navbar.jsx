// ─── Navbar Section ──────────────────────────────────────────
// Sticky top navbar with active-section highlighting,
// blur background on scroll, and mobile hamburger menu.

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { personal } from "../data/personal";

const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Resume",   href: "#resume"   },
  { label: "Contact",  href: "#contact"  },
];

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // ── Scroll listener for background ──────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Intersection Observer for active section ─────────────
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  // ── Close menu on resize ─────────────────────────────────
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 glass border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* ── Logo ──────────────────────────────────────── */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="font-display font-bold text-xl flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
              {personal.avatarInitials}
            </span>
            <span className="gradient-text">{personal.name.split(" ")[0]}</span>
          </motion.a>

          {/* ── Desktop Links ─────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-violet-600/20 border border-violet-500/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </nav>

          {/* ── CTA Button ────────────────────────────────── */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNavClick("#contact")}
            className="hidden md:block btn-primary text-sm py-2 px-5"
          >
            Hire Me
          </motion.button>

          {/* ── Hamburger ─────────────────────────────────── */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg glass text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Menu ───────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[68px] left-4 right-4 z-40 glass rounded-2xl p-5 border border-white/10 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-violet-600/15 transition-all"
                >
                  {label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-2 btn-primary text-sm text-center"
              >
                Hire Me
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
