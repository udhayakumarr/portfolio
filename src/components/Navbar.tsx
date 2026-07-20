"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { CloseIcon, GitHubMarkIcon, MenuIcon } from "./icons";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);

      if (y < 80) {
        setHidden(false);
      } else if (y > lastY.current + 4) {
        setHidden(true);
        setIsMobileMenuOpen(false);
      } else if (y < lastY.current - 4) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-4 inset-x-0 z-50 w-11/12 max-w-4xl mx-auto transition-transform duration-500 ease-out"
      style={{
        transform: `translateY(${hidden ? "-150%" : "0"})`,
      }}
    >
      <div
        className={`flex items-center justify-between gap-4 rounded-full border backdrop-blur-xl px-4 py-2.5 sm:px-6 transition-all duration-300 ${
          isScrolled
            ? "border-gray-800 bg-gray-950/80 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)] light:border-gray-200 light:bg-white/85 light:shadow-[0_8px_30px_-10px_rgba(15,23,42,0.18)]"
            : "border-gray-800/60 bg-gray-950/50 shadow-[0_8px_24px_-12px_rgba(139,92,246,0.25)] light:border-gray-200/70 light:bg-white/60 light:shadow-[0_8px_24px_-12px_rgba(139,92,246,0.15)]"
        }`}
      >
        {/* Logo */}
        <a
          href="#about"
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-white light:text-gray-900 flex items-center gap-1.5 group shrink-0"
        >
          <span className="text-violet-500 group-hover:text-blue-400 transition-colors duration-300">
            &lt;
          </span>
          <span>Udhaya</span>
          <span className="text-violet-500 group-hover:text-blue-400 transition-colors duration-300">
            .dev /&gt;
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-white light:text-gray-600 light:hover:text-gray-900 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/udhayakumarr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-linear-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-md shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            <GitHubMarkIcon className="w-4 h-4 fill-current" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2.5">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full border border-gray-800 bg-gray-900/50 text-gray-400 hover:text-white light:border-gray-300 light:bg-gray-100 light:text-gray-600 light:hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full inset-x-0 mt-3 rounded-3xl border border-gray-800 bg-gray-950/95 light:border-gray-200 light:bg-white/95 backdrop-blur-xl shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] light:shadow-[0_16px_40px_-12px_rgba(15,23,42,0.2)] transition-all duration-300 origin-top overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-80 opacity-100 scale-100 py-4"
            : "max-h-0 opacity-0 scale-95 pointer-events-none py-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-gray-400 hover:text-white light:text-gray-600 light:hover:text-gray-900 py-2 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://github.com/udhayakumarr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-violet-600 to-blue-600 text-white shadow-md shadow-violet-500/25 transition-all duration-300 mt-2"
          >
            <GitHubMarkIcon className="w-4 h-4 fill-current" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
