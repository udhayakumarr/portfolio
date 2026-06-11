export default function Skills() {
  const skillCategories = [
    {
      title: "Core Frontend",
      description: "Building rich user experiences with clean, responsive, and type-safe UI architectures.",
      color: "border-violet-500/20 hover:border-violet-500/50 hover:shadow-[0_0_20px_-3px_rgba(139,92,246,0.3)] text-violet-400 bg-violet-500/5",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["React", "Next.js (App/Pages)", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3"],
    },
    {
      title: "Systems & Architecture",
      description: "Designing scalable monorepos, micro-frontends, and optimizing critical loading paths.",
      color: "border-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_20px_-3px_rgba(59,130,246,0.3)] text-blue-400 bg-blue-500/5",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: ["Frontend System Design", "Micro Frontends", "Monorepos (Turborepo)", "Webpack & Vite", "Web Performance Opt."],
    },
    {
      title: "Backend & APIs",
      description: "Developing fast, robust API services and schema-first data orchestrations.",
      color: "border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_20px_-3px_rgba(16,185,129,0.3)] text-emerald-400 bg-emerald-500/5",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: ["Node.js", "Express", "GraphQL (Apollo/Router)", "REST APIs", "WebSockets"],
    },
    {
      title: "Ecosystem & Tools",
      description: "Ensuring top-tier DX and rapid software deliveries with automation and testing frameworks.",
      color: "border-orange-500/20 hover:border-orange-500/50 hover:shadow-[0_0_20px_-3px_rgba(249,115,22,0.3)] text-orange-400 bg-orange-500/5",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ["Tailwind CSS", "Zustand & Redux", "Jest & React Testing Library", "CI/CD Pipelines", "Git & GitHub Actions"],
    },
  ];

  return (
    <section id="skills" className="relative py-24 border-t border-gray-900 bg-gray-950/20">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">
            Expertise
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Technical Superpowers
          </p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Over the course of 8+ years, I have honed my skills across the stack, 
            focusing heavily on frontend engineering performance, developer tooling, and clean system abstractions.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-2xl border bg-gray-900/10 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${category.color}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800">
                    {category.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium font-mono px-3 py-1.5 rounded-md border border-gray-800/80 bg-gray-900/40 text-gray-300 hover:text-white hover:border-gray-750 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
