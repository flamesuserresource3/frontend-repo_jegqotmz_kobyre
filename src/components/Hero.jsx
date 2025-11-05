import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft vignette + gradient sheen overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-neutral-100">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs tracking-widest text-neutral-200 backdrop-blur-sm"
        >
          <span className="text-red-400">●</span> 静かな自信 — Minimal Japanese Aesthetic
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="font-geist mb-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Crafting Calm, Trustworthy Digital Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 }}
          className="mx-auto mb-8 max-w-2xl text-sm text-neutral-300 sm:text-base"
        >
          I design and build minimalist interfaces with a focus on clarity, performance, and subtle motion — inspired by Japanese principles of restraint and balance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/20"
          >
            View Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-red-500/90 px-5 py-2 text-sm text-white shadow-lg shadow-red-500/20 transition hover:bg-red-500"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
