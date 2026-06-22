'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yasirahmadmalik8@gmail.com',
    href: 'mailto:yasirahmadmalik8@gmail.com',
    color: '#00D4FF',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lahore, Pakistan',
    href: null,
    color: '#7F00FF',
  },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/yasirahmadmalik/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/yasirmalik8', icon: Github, label: 'GitHub' },
  { href: 'https://x.com/yasirahmadm1428?s=21', icon: Twitter, label: 'Twitter' },
  {
    href: 'https://www.instagram.com/yasir.malik1428?igsh=ODB2Y2ZyYXA0ODN2&utm_source=qr',
    icon: Instagram,
    label: 'Instagram',
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32"
      style={{
        background:
          'radial-gradient(ellipse at 50% 80%, rgba(127, 0, 255, 0.06) 0%, transparent 60%), #050507',
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(180deg, #7F00FF, transparent)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7F00FF] text-sm uppercase tracking-[4px] font-medium mb-3">
            Get in Touch
          </p>
          <h2 className="section-heading text-white">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, #00D4FF, #7F00FF)' }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white font-space mb-3">
                Let&apos;s Work Together
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m currently open to new opportunities and collaborations. Whether
                you have a project idea, a job offer, or just want to chat about tech —
                I&apos;d love to hear from you!
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 glass border border-white/8 rounded-2xl p-4"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}15` }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-white hover:text-[#00D4FF] transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-11 h-11 glass border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00D4FF]/30 transition-all duration-300"
                  >
                    <s.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass border border-white/8 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Background glow */}
              <div
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }}
              />

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                {/* Name */}
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/30 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/30 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/30 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70"
                  style={{
                    background: sending
                      ? 'rgba(127, 0, 255, 0.5)'
                      : 'linear-gradient(135deg, #7F00FF 0%, #00D4FF 100%)',
                    boxShadow: sending ? 'none' : '0 8px 25px rgba(127, 0, 255, 0.3)',
                  }}
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Success Toast */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="absolute inset-0 flex items-center justify-center rounded-2xl"
                    style={{ background: 'rgba(5,5,7,0.95)' }}
                  >
                    <div className="text-center">
                      <CheckCircle size={48} className="text-[#00D4FF] mx-auto mb-4" />
                      <h4 className="text-lg font-bold text-white font-space mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Thanks for reaching out. I&apos;ll get back to you soon!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
