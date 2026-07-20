import { ArchitectureIcon, CodeBracketIcon, DatabaseIcon, ToolsIcon } from "./icons";

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Frontend",
      description: "Building rich user experiences with clean, responsive, and type-safe UI architectures.",
      color: "border-violet-500/20 hover:border-violet-500/50 hover:shadow-[0_0_20px_-3px_rgba(139,92,246,0.3)] text-violet-400 bg-violet-500/5",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3"],
    },
    {
      title: "Systems & Architecture",
      description: "Designing scalable monorepos, micro-frontends, and optimizing critical loading paths.",
      color: "border-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_20px_-3px_rgba(59,130,246,0.3)] text-blue-400 bg-blue-500/5",
      icon: <ArchitectureIcon className="w-6 h-6" />,
      skills: ["Frontend System Design", "Micro Frontends", "Monorepos (Turborepo)", "Webpack & Vite", "Web Performance Opt."],
    },
    {
      title: "Backend & APIs",
      description: "Developing fast, robust API services and schema-first data orchestrations.",
      color: "border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_20px_-3px_rgba(16,185,129,0.3)] text-emerald-400 bg-emerald-500/5",
      icon: <DatabaseIcon className="w-6 h-6" />,
      skills: ["Node.js", "Express", "GraphQL", "REST APIs", "WebSockets", "Ruby", "Ruby On Rails"],
    },
    {
      title: "Ecosystem & Tools",
      description: "Ensuring top-tier DX and rapid software deliveries with automation and testing frameworks.",
      color: "border-orange-500/20 hover:border-orange-500/50 hover:shadow-[0_0_20px_-3px_rgba(249,115,22,0.3)] text-orange-400 bg-orange-500/5",
      icon: <ToolsIcon className="w-6 h-6" />,
      skills: ["Tailwind CSS", "Zustand & Redux", "Jest & React Testing Library", "Cypress", "CI/CD Pipelines", "Git & GitHub Actions"],
    },
  ];

  return (
    <section id="skills" className="relative py-24 border-t border-gray-900 bg-gray-950/20 light:border-gray-200 light:bg-gray-50/60 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-semibold text-violet-400 light:text-violet-600 uppercase tracking-widest mb-3">
            Expertise
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white light:text-gray-900 mb-4">
            Technical Superpowers
          </p>
          <p className="text-gray-400 light:text-gray-600 leading-relaxed text-sm sm:text-base">
            Over the course of 8+ years, I have honed my skills across the stack,
            focusing heavily on frontend engineering performance, developer tooling, and clean system abstractions.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`card-lift rounded-2xl border bg-gray-900/10 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 light:bg-white light:shadow-[0_4px_20px_-8px_rgba(15,23,42,0.1)] ${category.color}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 light:bg-gray-100 light:border-gray-200">
                    {category.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white light:text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-400 light:text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium font-mono px-3 py-1.5 rounded-md border border-gray-800/80 bg-gray-900/40 text-gray-300 hover:text-white hover:border-gray-750 light:border-gray-200 light:bg-gray-100 light:text-gray-700 light:hover:text-gray-900 light:hover:border-gray-300 transition-all duration-200"
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
