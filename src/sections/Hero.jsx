// ─── Hero Section ────────────────────────────────────────────
// Full-viewport hero with animated typing effect, glowing
// gradient blobs, floating tech pills, and social links.

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowDown } from "react-icons/fi";
import { personal } from "../data/personal";
import { techPills } from "../data/skills";

// ── Typing hook ──────────────────────────────────────────────
function useTypingEffect(words, { typeSpeed = 80, deleteSpeed = 40, pauseMs = 1800 } = {}) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx,   setWordIdx]   = useState(0);
  const [phase,     setPhase]     = useState("typing");

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;

    if (phase === "typing") {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), pauseMs);
      }
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIdx, words, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}

// ── Parallax mouse tracking ──────────────────────────────────
function useMouseParallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth  - 0.5) * 40);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return { springX, springY };
}

const SOCIAL_ICONS = [
  { icon: FiGithub,   href: personal.socials.github,   label: "GitHub"   },
  { icon: FiLinkedin, href: personal.socials.linkedin,  label: "LinkedIn" },
  { icon: FiInstagram,  href: personal.socials.instagram,   label: "Instagram"  },
  { icon: FiMail,     href: personal.socials.email,     label: "Email"    },
];

const Hero = () => {
  const typedRole = useTypingEffect(personal.rotatingRoles);
  const { springX, springY } = useMouseParallax();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background blobs ────────────────────────────── */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute -bottom-20 -right-30 w-[500px] h-[500px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div
          className="w-full h-full"
          style={{
            background: "radial-gradient(ellipse, rgba(6,182,212,0.15) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* ── Grid lines ──────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Main content ────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl ml-4 xl:ml-8">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-8 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-medium">Available for opportunities</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-violet-400 text-lg mb-3"
          >
            👋 Hey there! I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-white leading-[1.05] mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            {personal.name.split(" ").map((word, i) => (
              <span
                key={i}
                className={i === 1 ? "gradient-text block" : "block"}
              >
                {word}
              </span>
            ))}
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-display text-2xl md:text-3xl text-slate-300 font-medium">
              {typedRole}
            </span>
            <span className="w-0.5 h-8 bg-violet-400 animate-pulse rounded-full" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted text-lg max-w-xl leading-relaxed mb-10"
          >
            I craft pixel-perfect, blazing-fast web experiences from design
            to deployment — turning ideas into elegant, scalable products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary text-base py-3 px-8"
            >
              <span className="relative z-10">View My Work</span>
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline text-base py-3 px-8"
            >
              Let's Talk
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex items-center gap-4"
          >
            {SOCIAL_ICONS.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href || "#"}
                target={href?.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="p-2.5 rounded-xl glass text-muted hover:text-violet-400 transition-colors border border-white/5 hover:border-violet-500/30"
              >
                <Icon size={20} />
              </motion.a>
            ))}
            <span className="text-muted text-sm ml-2 font-mono">Find me online</span>
          </motion.div>
        </div>
      </div>

      {/* ── Floating tech pills ──────────────────────────── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2.5">
        {techPills.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.06, duration: 0.5 }}
            whileHover={{ x: -6, scale: 1.05 }}
            className="px-4 py-2 glass rounded-full text-sm font-mono text-violet-300 border border-violet-500/20 cursor-default"
            style={{
              animation: `float ${5 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      {/* ── Scroll cue ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs font-mono tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
