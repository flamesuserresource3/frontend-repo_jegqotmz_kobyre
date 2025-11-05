import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-20 text-neutral-200">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="grid gap-10 md:grid-cols-[240px,1fr]"
      >
        <div className="flex items-start justify-center md:justify-start">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 p-0.5 shadow-2xl shadow-black/40">
            <div className="flex h-full w-full items-center justify-center bg-neutral-950">
              <User className="h-10 w-10 text-neutral-400" />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-white">About</h2>
            <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] tracking-widest text-neutral-300">静 — SEI</span>
          </div>
          <p className="mb-4 text-neutral-300">
            I’m a designer-engineer who collaborates with founders and teams to build products that feel calm and intentional. My process balances structure and intuition — reducing noise, emphasizing essential signals, and translating brand values into quiet, reliable interfaces.
          </p>
          <p className="text-neutral-400">
            I focus on accessibility, performance, and micro-interactions that support trust. If you value clarity and longevity over trends, we’ll get along well.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-300">
            {['Design Systems','Frontend','Prototyping','Accessibility','Motion','Performance'].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
