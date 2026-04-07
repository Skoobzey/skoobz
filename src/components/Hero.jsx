import { useState } from 'react'

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:hidden animate-fade-in">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-accent-dark/10 blur-3xl" />
              <img
                src="/skoobz.png"
                alt="Skoobz"
                className="relative w-full h-full rounded-full object-contain border border-black/10 dark:border-white/10"
              />
            </div>
          </div>

          <div className="animate-slide-up">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Hey, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                Skoobz
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-lg">
              I work in IT and love designing and building all kinds of things using code.
              I spend most of my free time coding or gaming.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-dark text-white font-semibold transition-colors"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="animate-fade-in hidden lg:flex justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-accent-dark/10 blur-3xl" />
              <img
                src="/skoobz.png"
                alt="Skoobz"
                className="relative w-full h-full rounded-full object-contain border border-black/10 dark:border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
