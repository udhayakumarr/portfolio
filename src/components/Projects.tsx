export default function Projects() {
  return (
    <section id="projects" className="relative py-24 border-t border-gray-900 bg-gray-950/40">
      {/* Background radial accent */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            Projects
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Engineering Playgrounds
          </p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            A sneak peek of open-source architectures and libraries currently under construction.
          </p>
        </div>

        {/* Coming Soon Showcase */}
        <div className="max-w-xl mx-auto rounded-3xl border border-gray-850 bg-gray-900/10 backdrop-blur-md p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl hover:border-blue-500/35 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] transition-all duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-mono mb-6 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Coming Soon
          </div>

          <h3 className="font-display text-2xl font-bold text-white mb-3">
            Projects In Pipeline
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-8">
            Case studies, architectural design docs, and configurations covering micro-frontends, 
            monorepo build scripts, AST theme compilers, and custom React hook libraries are currently under construction.
          </p>

          {/* Sub-tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-mono text-gray-500 border-t border-gray-900 pt-6">
            <span>Turborepo</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-800" />
            <span>Module Federation</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-800" />
            <span>RSC Hydration</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-800" />
            <span>GraphQL Apollo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
