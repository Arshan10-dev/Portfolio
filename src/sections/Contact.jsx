// ─── Contact Section ─────────────────────────────────────────
// Contact form UI (no backend — wire up to Formspree,
// EmailJS, or your own API by replacing handleSubmit).
// Also shows social cards for quick reach.

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend, FiGithub, FiLinkedin, FiInstagram,
  FiMail, FiMapPin, FiCheck,
} from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { personal } from "../data/personal";
import emailjs from "@emailjs/browser";
// Quick contact items shown on left panel
const CONTACT_ITEMS = [
  { icon: FiMail, label: "Email", value: personal.email, href: personal.socials.email },
  { icon: FiMapPin, label: "Location", value: personal.location, href: null },
  { icon: FiGithub, label: "GitHub", value: "github.com/Arshan10-dev", href: personal.socials.github },
  { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/mohammad-arshan10", href: personal.socials.linkedin },
];

const SOCIAL_LINKS = [
  { icon: FiGithub, href: personal.socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: personal.socials.linkedin, label: "LinkedIn" },
  { icon: FiInstagram, href: personal.socials.instagram, label: "Instagram" },
  { icon: FiMail, href: personal.socials.email, label: "Email" },
];

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  // ── Validation ─────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (form.message.trim().length < 20) e.message = "At least 20 characters please.";
    return e;
  };

  // ── Submit handler — replace with real API call ────────
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setSending(true);
    setErrors({});

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setForm(INITIAL_FORM);

      setTimeout(() => setSent(false), 5000);
    } catch (error) {
  console.error("EmailJS Error:", error);
  alert(JSON.stringify(error));
} finally {
      setSending(false);
    }
  };

  // ↓ Replace this timeout with your real API call:
  //   await fetch("https://formspree.io/f/YOUR_ID", { method:"POST", body: JSON.stringify(form), headers:{"Content-Type":"application/json"} })

const handleChange = (e) => {
  setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  if (errors[e.target.name]) setErrors((err) => ({ ...err, [e.target.name]: "" }));
};

// Shared input class
const inputClass = (field) =>
  `w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder:text-muted
     focus:outline-none focus:ring-2 transition-all duration-200
     ${errors[field]
    ? "border-red-500/60 focus:ring-red-500/30"
    : "border-white/10 focus:border-violet-500/60 focus:ring-violet-500/20"}`;

return (
  <section id="contact" className="section-padding relative">
    {/* Background glow */}
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)",
        filter: "blur(80px)",
      }}
    />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <SectionTitle
        eyebrow="Get In Touch"
        title="Let's Work Together"
        subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        center
      />

      <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10">
        {/* ── Left panel ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="glass rounded-2xl p-6 space-y-5">
            <h3 className="font-display font-semibold text-white text-lg">Contact Info</h3>
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0 mt-0.5">
                  <Icon size={15} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-slate-300 hover:text-violet-300 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-300">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display font-semibold text-white text-lg mb-4">Follow Me</h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href || "#"}
                  target={href?.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass text-muted hover:text-violet-400 flex items-center justify-center transition-colors border border-white/5 hover:border-violet-500/30"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Availability badge */}
          <motion.div
            animate={{ boxShadow: ["0 0 0 0 rgba(52,211,153,0)", "0 0 0 8px rgba(52,211,153,0)", "0 0 0 0 rgba(52,211,153,0)"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="glass rounded-2xl p-5 flex items-center gap-3 border border-emerald-500/20"
          >
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full flex-shrink-0" />
            <div>
              <p className="text-white text-sm font-medium">Currently Available</p>
              <p className="text-muted text-xs">Open to freelance & full-time roles</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Contact form ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-8 space-y-5">
            {/* Row: name + email */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-muted mb-1.5 font-medium">Your Name</label>
                <input
                  type="text" name="name" value={form.name}
                  onChange={handleChange} placeholder="Jane Smith"
                  className={inputClass("name")}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs text-muted mb-1.5 font-medium">Email Address</label>
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="jane@example.com"
                  className={inputClass("email")}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs text-muted mb-1.5 font-medium">Subject</label>
              <input
                type="text" name="subject" value={form.subject}
                onChange={handleChange} placeholder="Project collaboration"
                className={inputClass("subject")}
              />
              {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs text-muted mb-1.5 font-medium">Message</label>
              <textarea
                name="message" value={form.message}
                onChange={handleChange} rows={6}
                placeholder="Tell me about your project, timeline, and budget..."
                className={`${inputClass("message")} resize-none`}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={sending || sent}
              whileHover={!sending && !sent ? { scale: 1.02 } : {}}
              whileTap={!sending && !sent ? { scale: 0.98 } : {}}
              className={`w-full btn-primary py-3.5 flex items-center justify-center gap-2 text-sm font-semibold
                  ${(sending || sent) ? "opacity-80 cursor-not-allowed" : ""}`}
            >
              {sent ? (
                <>
                  <FiCheck size={17} />
                  <span className="relative z-10">Message Sent! 🎉</span>
                </>
              ) : sending ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  <span className="relative z-10">Sending…</span>
                </>
              ) : (
                <>
                  <FiSend size={15} />
                  <span className="relative z-10">Send Message</span>
                </>
              )}
            </motion.button>

            <p className="text-center text-xs text-muted">
              I typically reply within 24 hours ✌️
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);
};
export default Contact;
