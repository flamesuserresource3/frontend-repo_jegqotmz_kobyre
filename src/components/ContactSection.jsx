import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailto = `mailto:hello@example.com?subject=${encodeURIComponent('Project Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

  return (
    <section id="contact" className="relative mx-auto max-w-2xl scroll-mt-20 px-6 py-20">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-white">Contact</h2>
        <p className="mt-1 text-sm text-neutral-400">Tell me about your project — I’ll respond within 1–2 business days.</p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }}
        className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 shadow-xl shadow-black/30 backdrop-blur-sm"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs text-neutral-400">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white outline-none ring-0 transition placeholder:text-neutral-500 focus:border-white/20"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-neutral-400">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white outline-none ring-0 transition placeholder:text-neutral-500 focus:border-white/20"
              placeholder="you@company.com"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-xs text-neutral-400">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
            className="w-full resize-none rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white outline-none ring-0 transition placeholder:text-neutral-500 focus:border-white/20"
            placeholder="What would you like to build together?"
          />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-neutral-400">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-1 hover:text-white"><Mail className="h-4 w-4" /> Email</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white"><Github className="h-4 w-4" /> GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-red-500/90 px-4 py-2 text-sm text-white shadow-lg shadow-red-500/20 transition hover:bg-red-500">
            Send <Send className="h-4 w-4" />
          </button>
        </div>
      </motion.form>
    </section>
  );
}
