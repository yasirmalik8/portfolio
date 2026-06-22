'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle, Send, Github, Linkedin, Twitter, Instagram, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'yasirahmadmalik8@gmail.com', href: 'mailto:yasirahmadmalik8@gmail.com', color: '#F97316' },
  { icon: Phone, label: 'Phone', value: '+92 344 2536193', href: 'tel:+923442536193', color: '#F97316' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+92 346 733 6193', href: 'https://wa.me/923467336193', color: '#25D366' },
  { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan', href: null, color: '#F59E0B' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/yasirahmadmalik/', icon: Linkedin, label: 'LinkedIn', color: '#0A66C2', bg: 'rgba(10,102,194,0.15)' },
  { href: 'https://github.com/yasirmalik8', icon: Github, label: 'GitHub', color: '#E6EDF3', bg: 'rgba(230,237,243,0.1)' },
  { href: 'https://x.com/yasirahmadm1428?s=21', icon: Twitter, label: 'Twitter', color: '#1D9BF0', bg: 'rgba(29,155,240,0.15)' },
  { href: 'https://www.instagram.com/yasir.malik1428?igsh=ODB2Y2ZyYXA0ODN2&utm_source=qr', icon: Instagram, label: 'Instagram', color: '#E1306C', bg: 'rgba(225,48,108,0.15)' },
  { href: 'https://wa.me/923467336193', icon: MessageCircle, label: 'WhatsApp', color: '#25D366', bg: 'rgba(37,211,102,0.15)' },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#111111]">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="section-badge">Contact Me</span>
          <h2 className="section-heading mt-6">Get In Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white font-space mb-3">Let&apos;s Work Together</h3>
              <p className="text-white/55 leading-relaxed text-sm">
                I&apos;m currently open to new opportunities and collaborations. Whether you have a project idea, a job offer, or just want to chat about tech — I&apos;d love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}>
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-white/35 uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-white/75 hover:text-[#F97316] transition-colors font-medium">{item.value}</a>
                    ) : (
                      <p className="text-sm text-white/75 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs text-white/35 uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map(s => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ background: s.bg, border: `1px solid ${s.color}40`, color: s.color }}>
                    <s.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick email CTA */}
            <div className="card-dark p-5 rounded-xl">
              <p className="text-xs text-white/35 uppercase tracking-wider mb-2">Quick Contact</p>
              <a
                href="mailto:yasirahmadmalik8@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}
              >
                <Mail size={15} />
                Send Email Directly
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div>
                  <label className="block text-xs text-white/45 uppercase tracking-wider mb-2">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="input-dark" />
                </div>
                <div>
                  <label className="block text-xs text-white/45 uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="input-dark" />
                </div>
                <div>
                  <label className="block text-xs text-white/45 uppercase tracking-wider mb-2">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Project Inquiry" className="input-dark" />
                </div>
                <div>
                  <label className="block text-xs text-white/45 uppercase tracking-wider mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                    placeholder="Tell me about your project or opportunity..." className="input-dark resize-none" />
                </div>
                <button type="submit" disabled={sending}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 hover:scale-[1.02] hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                  {sending ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                  ) : (
                    <><Send size={16} />Send Message</>
                  )}
                </button>
              </form>

              <AnimatePresence>
                {success && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 flex items-center justify-center rounded-2xl z-20"
                    style={{ background: 'rgba(17,17,17,0.97)', border: '1px solid rgba(249,115,22,0.2)' }}>
                    <div className="text-center p-8">
                      <CheckCircle size={52} className="text-[#F97316] mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white font-space mb-2">Message Sent!</h4>
                      <p className="text-white/55 text-sm">Thanks for reaching out. I&apos;ll get back to you soon!</p>
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
