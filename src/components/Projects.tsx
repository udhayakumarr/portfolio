"use client";

import { useEffect, useRef, useState } from "react";
import projectsData from "@/data/projects.json";
import { ChevronLeftIcon, ChevronRightIcon, LockIcon } from "./icons";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  image: string;
  year: string;
};

const projects = projectsData as Project[];

const CARD_WIDTH = 340;
const GAP = 32;

export default function Projects() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    setActive(((index % projects.length) + projects.length) % projects.length);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(active - 1);
      if (e.key === "ArrowRight") goTo(active + 1);
    };        
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goTo(active - 1);
    else if (delta < -50) goTo(active + 1);
    touchStartX.current = null;
  };

  return (
    <section
      id="projects"
      className="relative py-24 border-t border-gray-900 bg-gray-950/40 light:border-gray-200 light:bg-gray-50/60 overflow-hidden"
    >
      {/* Background radial accents */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-semibold text-blue-400 light:text-blue-600 uppercase tracking-widest mb-3">
            Projects
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white light:text-gray-900 mb-4">
            Engineering Playgrounds
          </p>
          <p className="text-gray-400 light:text-gray-600 leading-relaxed text-sm sm:text-base">
            A sneak peek of architectures and systems built under active
            engagements. Demos and source are under NDA.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev / Next controls */}
          <button
            onClick={() => goTo(active - 1)}
            aria-label="Previous project"
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-gray-800 bg-gray-900/70 backdrop-blur-md text-gray-300 hover:text-white hover:border-violet-500/40 light:border-gray-300 light:bg-white/70 light:text-gray-600 light:hover:text-gray-900 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => goTo(active + 1)}
            aria-label="Next project"
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-gray-800 bg-gray-900/70 backdrop-blur-md text-gray-300 hover:text-white hover:border-violet-500/40 hover:scale-110 transition-all duration-300"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {/* Track */}
          <div
            className="overflow-hidden py-10"
            style={{ perspective: "1400px" }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transformStyle: "preserve-3d",
                transform: `translateX(calc(50% - ${CARD_WIDTH / 2}px - ${
                  active * (CARD_WIDTH + GAP)
                }px))`,
              }}
            >
              {projects.map((project, index) => {
                const offset = index - active;
                const isActive = offset === 0;
                const depth = Math.min(Math.abs(offset), 3);

                return (
                  <div
                    key={project.id}
                    style={{
                      width: CARD_WIDTH,
                      marginRight: GAP,
                      transform: `rotateY(${offset * -12}deg) translateZ(${
                        isActive ? 0 : -depth * 60
                      }px) scale(${isActive ? 1 : 0.86})`,
                      opacity: isActive
                        ? 1
                        : Math.max(0.25, 0.6 - depth * 0.15),
                      filter: isActive
                        ? "blur(0px)"
                        : `blur(${Math.min(depth, 2)}px)`,
                    }}
                    onClick={() => goTo(index)}
                    className="shrink-0 cursor-pointer transition-all duration-700 ease-out"
                  >
                    <div
                      className={`group relative h-full rounded-3xl border bg-gray-900/20 light:bg-white backdrop-blur-md overflow-hidden shadow-2xl transition-all duration-700 ${
                        isActive
                          ? "border-violet-500/50 shadow-[0_0_45px_-8px_rgba(139,92,246,0.35)]"
                          : "border-gray-850 light:border-gray-200"
                      }`}
                    >
                      {/* Animated glow ring on active card */}
                      {isActive && (
                        <div className="absolute -inset-px rounded-3xl bg-[conic-gradient(from_0deg,rgba(139,92,246,0.5),rgba(59,130,246,0.5),rgba(139,92,246,0.5))] opacity-25 blur-md animate-[spin_6s_linear_infinite] pointer-events-none" />
                      )}

                      <div className="relative">

                        {/* Content */}
                        <div className="p-6 flex flex-col gap-4">
                          <h3 className="font-display text-lg font-bold text-white light:text-gray-900">
                            {project.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-400 light:text-gray-600 leading-relaxed line-clamp-3">
                            {project.description}
                          </p>

                          <ul className="flex flex-col gap-1.5">
                            {project.highlights.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-2 text-[11px] text-gray-400 light:text-gray-600"
                              >
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2 pt-3 mt-1 border-t border-gray-900 light:border-gray-200">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-full border border-gray-800 bg-gray-900/40 text-[10px] font-mono text-gray-400 light:border-gray-200 light:bg-gray-100 light:text-gray-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots + counter */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="text-[11px] font-mono text-gray-600 light:text-gray-500 tabular-nums">
              {(active + 1).toString().padStart(2, "0")} /{" "}
              {projects.length.toString().padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => goTo(index)}
                  aria-label={`Go to ${project.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === active
                      ? "w-6 bg-violet-400"
                      : "w-2 bg-gray-700 hover:bg-gray-600 light:bg-gray-300 light:hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
