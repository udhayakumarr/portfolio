import {
  DownloadIcon,
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  MailIcon,
} from "./icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 border-t border-gray-900 bg-gray-950/20 light:border-gray-200 light:bg-gray-50/60 overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-xs font-semibold text-violet-400 light:text-violet-600 uppercase tracking-widest mb-3">
            Connection
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white light:text-gray-900 mb-4">
            Let&apos;s Build Something Together
          </p>
          <p className="text-gray-400 light:text-gray-600 leading-relaxed text-sm sm:text-base">
            I am open to senior roles, frontend system design consulting, and
            technical advisory. Reach out via email or connect with me on
            LinkedIn.
          </p>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-5 mb-12">
          {/* Mail */}
          <a
            href="mailto:rudhaya7896@gmail.com"
            aria-label="Email"
            className="group w-14 h-14 flex items-center justify-center rounded-full border border-gray-800 bg-gray-900/40 text-gray-300 light:border-gray-300 light:bg-gray-100 light:text-gray-600 transition-all duration-300 hover:scale-110 hover:border-emerald-500/40 hover:text-emerald-400 hover:shadow-[0_0_20px_-3px_rgba(16,185,129,0.3)]"
          >
            <MailIcon className="w-6 h-6" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/udhayakumarr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group w-14 h-14 flex items-center justify-center rounded-full border border-gray-800 bg-gray-900/40 text-gray-300 light:border-gray-300 light:bg-gray-100 light:text-gray-600 transition-all duration-300 hover:scale-110 hover:border-violet-500/40 hover:text-violet-400 hover:shadow-[0_0_20px_-3px_rgba(139,92,246,0.3)]"
          >
            <GitHubIcon className="w-6 h-6 fill-current" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/udhaya-kumar-337b02185/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group w-14 h-14 flex items-center justify-center rounded-full border border-gray-800 bg-gray-900/40 text-gray-300 light:border-gray-300 light:bg-gray-100 light:text-gray-600 transition-all duration-300 hover:scale-110 hover:border-blue-500/40 hover:text-blue-400 hover:shadow-[0_0_20px_-3px_rgba(59,130,246,0.3)]"
          >
            <LinkedInIcon className="w-6 h-6 fill-current" />
          </a>

          {/* LeetCode - link to be added later */}
          <a
            href="https://leetcode.com/u/rudhaya7896/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="group w-14 h-14 flex items-center justify-center rounded-full border border-gray-800 bg-gray-900/40 text-gray-300 light:border-gray-300 light:bg-gray-100 light:text-gray-600 transition-all duration-300 hover:scale-110 hover:border-orange-500/40 hover:text-orange-400 hover:shadow-[0_0_20px_-3px_rgba(249,115,22,0.3)]"
          >
            <LeetCodeIcon className="w-6 h-6 fill-current" />
          </a>
        </div>

        {/* Download Resume */}
        <div className="flex justify-center mb-16">
          <a
            href="/Udhayakumar.pdf"
            download
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl border border-gray-700 text-gray-200 light:border-gray-300 light:text-gray-700 light:hover:bg-gray-100 light:hover:border-gray-400 font-semibold transition-all duration-300 hover:bg-gray-800 hover:border-gray-600 hover:scale-[1.02] active:scale-[0.98]"
          >
            Download Resume
            <DownloadIcon className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Footer info & Footer Links */}
        <div className="mt-24 pt-8 border-t border-gray-900 light:border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Udhaya Kumar. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/udhayakumarr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white light:hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/udhaya-kumar-337b02185/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white light:hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
