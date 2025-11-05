import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Kumo Analytics',
    desc: 'A privacy-first dashboard with calm defaults and precise motion.',
    link: '#',
    accent: 'from-red-500/40 to-orange-500/30',
  },
  {
    title: 'Ikigai Notes',
    desc: 'Minimal note-taking app inspired by shibumi — effortless clarity.',
    link: '#',
    accent: 'from-rose-500/40 to-amber-500/30',
  },
  {
    title: 'Enso Commerce',
    desc: 'Elegant storefront with accessible interactions and fast search.',
    link: '#',
    accent: 'from-orange-500/40 to-red-500/30',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Selected Work</h2>
          <p className="mt-1 text-sm text-neutral-400">A few projects that reflect my approach — minimal, reliable, and human.</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            onClick={(e) => p.link === '#' ? e.preventDefault() : null}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-4 shadow-xl shadow-black/30 backdrop-blur-sm"
          >
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-20`} />
            <div className="mb-24 h-40 w-full overflow-hidden rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_60%),linear-gradient(180deg,rgba(16,16,16,1)_0%,rgba(10,10,10,1)_100%)]" />
            <div className="relative z-10">
              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-white" />
              </div>
              <p className="text-sm text-neutral-400">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
