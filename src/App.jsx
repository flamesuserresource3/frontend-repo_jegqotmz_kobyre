import React from 'react';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-medium tracking-wide text-white">Portfolio</a>
          <div className="flex items-center gap-5 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#portfolio" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-neutral-400">
        <p>© {new Date().getFullYear()} — Designed with restraint. Built with care.</p>
      </footer>
    </div>
  );
}

export default App;
