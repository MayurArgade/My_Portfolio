import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    number: "01",
    title: "Gemini AI Clone",
    tech: ["ReactJS", "CSS"],
    category: "React",
    link: "https://mayurargade.github.io/Geminiclone/",
    description:
      "A responsive AI chat interface inspired by Gemini, built using modern React concepts and component-based architecture.",
    accent: "blue",
  },
  {
    number: "02",
    title: "Wallpaper App",
    tech: ["HTML", "CSS", "JavaScript", "Unsplash API"],
    category: "API",
    link: "https://wallpaper-app-dun.vercel.app/",
    description:
      "A dynamic wallpaper discovery platform that fetches and displays high-resolution images using the Unsplash API.",
    accent: "orange",
  },
  {
    number: "03",
    title: "To-Do List App",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
    category: "JavaScript",
    link: "https://mayurargade.github.io/To-Do-List/",
    description:
      "A clean productivity application for managing tasks with browser-based local storage persistence.",
    accent: "yellow",
  },
  {
    number: "04",
    title: "Flash Card",
    tech: ["ReactJS", "State Management"],
    category: "React",
    link: "https://mayurargade.github.io/Flashcard/",
    description:
      "An interactive study tool built with React, using state management to create a smooth flashcard learning experience.",
    accent: "purple",
  },
  {
    number: "05",
    title: "E-Commerce Website",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    link: "https://mayurargade.github.io/multi-page-website-/",
    description:
      "A responsive multi-page e-commerce interface focused on layout, navigation, and a structured shopping experience.",
    accent: "green",
  },
];

const FILTERS = ["All", "React", "JavaScript", "API", "Frontend"];

const EASY_CUBIC_BEZIER = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: EASY_CUBIC_BEZIER,
    },
  },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <SectionWrapper delay={0.1}>
      <section
        id="projects"
        className="relative min-h-screen overflow-hidden bg-black px-6 py-28 text-white"
      >
        {/* BACKGROUND GRID */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="mx-auto grid h-full max-w-[1450px] grid-cols-4">
            <div className="border-r border-white" />
            <div className="border-r border-white" />
            <div className="border-r border-white" />
            <div />
          </div>
        </div>

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute right-[-15rem] top-[-12rem] h-[35rem] w-[35rem] rounded-full bg-blue-500/[0.08] blur-[130px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1450px]">
          {/* TOP LINE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: EASY_CUBIC_BEZIER,
            }}
            className="mb-10 flex items-center justify-between border-b border-white/10 pb-5"
          >
            <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-neutral-500">
              <span className="text-blue-400">02</span>

              <span>SELECTED WORKS / PROJECTS</span>
            </div>

           <div className="hidden items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-neutral-500 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{projects.length} PROJECTS</span>
          </div>
          </motion.div>

{/* BIG TITLE */}
<div className="mb-12 overflow-hidden sm:mb-16">
  <motion.h2
    initial={{
      opacity: 0,
      y: 35,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      ease: EASY_CUBIC_BEZIER,
    }}
    className="text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl"
  >
    Things I've <span className="text-neutral-500">Built</span>
    <span className="text-blue-500">.</span>
  </motion.h2>
</div>

          {/* INTRO + FILTER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: EASY_CUBIC_BEZIER,
            }}
            className="mb-12 flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-6 lg:flex-row lg:items-end"
          >
            <p className="max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
              A collection of projects where I explored{" "}
              <span className="text-white">
                frontend development, React, APIs, and
                interactive user experiences.
              </span>{" "}
              Every project taught me something new, usually
              after something broke first.
            </p>

            {/* INTERACTIVE FILTER */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`relative overflow-hidden rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                    activeFilter === filter
                      ? "border-blue-400 bg-blue-400 text-black"
                      : "border-white/10 bg-white/[0.02] text-neutral-500 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* PROJECT LIST */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="border-t border-white/10"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.number}
                  variants={cardVariants}
                  onMouseEnter={() =>
                    setHoveredProject(project.number)
                  }
                  onMouseLeave={() =>
                    setHoveredProject(null)
                  }
                  className={`group relative grid cursor-default grid-cols-1 overflow-hidden border-b border-white/10 transition-all duration-500 md:grid-cols-[100px_1fr_220px_70px] ${
                    hoveredProject === project.number
                      ? "bg-white/[0.04]"
                      : "bg-transparent"
                  }`}
                >
                  {/* ACCENT LINE */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{
                      scaleY:
                        hoveredProject === project.number
                          ? 1
                          : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: EASY_CUBIC_BEZIER,
                    }}
                    className={`absolute left-0 top-0 h-full w-[2px] origin-top ${
                      project.accent === "blue"
                        ? "bg-blue-400"
                        : project.accent === "orange"
                        ? "bg-orange-400"
                        : project.accent === "yellow"
                        ? "bg-yellow-300"
                        : project.accent === "purple"
                        ? "bg-purple-400"
                        : "bg-emerald-400"
                    }`}
                  />

                  {/* NUMBER */}
                  <div className="flex items-start p-5 pt-7 font-mono text-xs text-neutral-600">
                    {project.number}
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="p-5 md:py-7">
                    <div className="mb-3 flex items-start justify-between gap-5">
                      <div>
                        <span
                          className={`mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] ${
                            project.accent === "blue"
                              ? "text-blue-400"
                              : project.accent === "orange"
                              ? "text-orange-400"
                              : project.accent === "yellow"
                              ? "text-yellow-300"
                              : project.accent === "purple"
                              ? "text-purple-400"
                              : "text-emerald-400"
                          }`}
                        >
                          {project.category}
                        </span>

                        <h3 className="text-2xl font-bold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-3xl">
                          {project.title}
                        </h3>
                      </div>

                      <motion.span
                        animate={{
                          x:
                            hoveredProject === project.number
                              ? 4
                              : 0,

                          y:
                            hoveredProject === project.number
                              ? -4
                              : 0,
                        }}
                        className="text-xl text-neutral-500 md:hidden"
                      >
                        ↗
                      </motion.span>
                    </div>

                    <p className="max-w-2xl text-sm leading-7 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
                      {project.description}
                    </p>

                    {/* TECH */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] font-mono text-neutral-500 transition-all duration-300 group-hover:border-white/20 group-hover:text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT INFO */}
                  <div className="hidden flex-col justify-between border-l border-white/5 p-6 md:flex">
                    <div className="text-right">
                      <span className="block text-[9px] font-bold tracking-[0.18em] text-neutral-600">
                        STATUS
                      </span>

                      <span className="mt-2 inline-flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        LIVE
                      </span>
                    </div>

                    <span className="text-right text-[10px] font-mono uppercase tracking-wider text-neutral-600">
                      VIEW PROJECT
                    </span>
                  </div>

                  {/* LINK */}
                  <div className="hidden items-center justify-center border-l border-white/5 md:flex">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.15,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-xl text-white transition-all duration-300 hover:border-blue-400 hover:bg-blue-400 hover:text-black"
                      aria-label={`View ${project.title}`}
                    >
                      ↗
                    </motion.a>
                  </div>

                  {/* MOBILE LINK */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-t border-white/5 px-5 py-4 text-[10px] font-bold tracking-[0.15em] text-neutral-500 md:hidden"
                  >
                    <span>VIEW LIVE PROJECT</span>

                    <span className="text-blue-400">↗</span>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* FOOTER */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="mt-12 flex flex-col justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.15em] text-neutral-600">
              <span className="h-2 w-2 rounded-full bg-blue-400" />

              <span>More experiments coming soon</span>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-neutral-600">
              {filteredProjects.length} / {projects.length} DISPLAYED
            </span>
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Projects;