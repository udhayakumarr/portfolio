import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

      <div className="w-full min-w-0 max-w-3xl mx-auto px-6 flex flex-col items-center relative z-10">
        
        <div className="flex flex-col items-center gap-6 text-center">
          
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-violet-500/40 overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105 hover:border-violet-400 transition-all duration-300">
            <Image
              src="/images/profile.png"
              alt="Udhaya Kumar"
              fill
              sizes="(min-width: 640px) 96px, 80px"
              className="object-cover"
              priority
            />
          </div>

          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/35 bg-violet-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
            <span className="text-xs font-semibold text-violet-300 light:text-violet-700 uppercase tracking-widest font-display">
              8+ Years Experience
            </span>
          </div>

          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white light:text-gray-900">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Udhaya Kumar
            </span>{" "}
            <br />
            Senior Software Engineer
          </h1>

          <p className="text-lg text-gray-400 light:text-gray-600 max-w-xl leading-relaxed">
            Senior Software Engineer with 8+ years of experience. I specialize
            in frontend engineering with React.js, Next.js, and modern
            JavaScript, with a deep focus on frontend system design, web
            performance optimization, and accessibility (a11y). Backed by
            hands-on experience in Node.js, contributing to backend API changes,
            and a strong grasp of data structures and algorithms, I focus on
            delivering fast, scalable, and high-impact web applications from end
            to end. Currently expanding my expertise into AI engineering,
            focusing on RAG frameworks and building AI agents for real-world use
            cases. Let&apos;s connect!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-sm font-semibold bg-linear-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-sm font-semibold border border-gray-800 bg-gray-900/40 hover:bg-gray-800 text-gray-300 hover:text-white hover:border-gray-700 light:border-gray-300 light:bg-gray-100 light:hover:bg-gray-200 light:text-gray-700 light:hover:text-gray-900 light:hover:border-gray-400 transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-gray-900 light:border-gray-200 max-w-lg mx-auto text-center">
            <div>
              <p className="font-display text-3xl font-extrabold text-white light:text-gray-900">
                8+
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">
                Years of Exp
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-white light:text-gray-900">
                6+
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">
                Production Apps
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-white light:text-gray-900">
                20+
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">
                Technologies & Tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
