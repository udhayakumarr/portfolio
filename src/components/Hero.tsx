import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Profile Photo */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-violet-500/40 overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105 hover:border-violet-400 transition-all duration-300">
            <Image
              src="/profile.png"
              alt="Udhaya Kumar"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center self-start gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/35 bg-violet-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
            <span className="text-xs font-semibold text-violet-300 uppercase tracking-widest font-display">
              8+ Years Experience
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            Hi, I&apos;m <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Udhaya Kumar</span> <br />
            Senior Software Engineer
          </h1>

          {/* Subheading / Bio */}
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            I specialize in **Frontend System Design**, building scalable micro-frontends, 
            high-performance React & Next.js architectures, and robust APIs with Node.js, 
            Express, and GraphQL. Focused on delivering premium developer experiences and scalable systems.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-sm font-semibold border border-gray-800 bg-gray-900/40 hover:bg-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-gray-900 max-w-lg">
            <div>
              <p className="font-display text-3xl font-extrabold text-white">8+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">
                Years of Exp
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-white">6+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">
                Production Apps
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-white">99.9%</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">
                System Uptime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
