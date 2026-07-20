"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("light");
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const next = !isLight;
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      aria-pressed={isLight}
      className={`cursor-pointer relative inline-flex items-center w-14 h-8 rounded-full border transition-colors duration-300 border-gray-800 bg-gray-900/60 light:border-gray-300 light:bg-gray-200 ${className}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-linear-to-br from-violet-500 to-blue-500 shadow-md flex items-center justify-center transition-transform duration-300 ${
          isLight ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isLight ? (
          <SunIcon className="w-3.5 h-3.5 text-white" />
        ) : (
          <MoonIcon className="w-3.5 h-3.5 text-white" />
        )}
      </span>
    </button>
  );
}
