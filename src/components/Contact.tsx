export default function Contact() {
  return (
    <section id="contact" className="relative py-24 border-t border-gray-900 bg-gray-950/20">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">
            Connection
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Let&apos;s Build Something Together
          </p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            I am open to senior roles, frontend system design consulting, and technical advisory. 
            Reach out via email or connect with me on LinkedIn.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Gmail Card */}
          <a
            href="mailto:rudhaya7896@gmail.com"
            className="group flex items-center gap-5 p-6 rounded-2xl border border-gray-800 bg-gray-900/10 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-emerald-500/40 hover:shadow-[0_0_20px_-3px_rgba(16,185,129,0.2)]"
          >
            <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-0.5">Gmail Address</p>
              <p className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                rudhaya7896@gmail.com
              </p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/udhaya-kumar-337b02185/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 rounded-2xl border border-gray-800 bg-gray-900/10 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-blue-500/40 hover:shadow-[0_0_20px_-3px_rgba(59,130,246,0.2)]"
          >
            <div className="p-4 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-0.5">LinkedIn Profile</p>
              <p className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                linkedin.com/in/udhaya-kumar-337b02185/
              </p>
            </div>
          </a>
        </div>

        {/* Footer info & Footer Links */}
        <div className="mt-24 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Udhaya Kumar. All Rights Reserved. Built with Next.js & Tailwind CSS v4.</p>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/udhayakumarr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/udhaya-kumar-337b02185/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
