import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import "../styles/about.css";

const EASY_CUBIC_BEZIER = [0.16, 1, 0.3, 1];

const SKILL_MODES = [
  {
    id: "frontend",
    label: "FRONTEND",
    number: "01",
    color: "blue",
    title: "Building for humans.",
    description:
      "I build responsive and interactive web interfaces with a strong focus on clean structure, usability, and making things feel good to use.",
    skills: ["React.js", "JavaScript", "Tailwind CSS"],
    command: "npm run build",
    output: "interface compiled successfully",
    progress: 82,
    status: "BUILDING",
  },
  {
    id: "backend",
    label: "BACKEND",
    number: "02",
    color: "orange",
    title: "Making things work.",
    description:
      "I work with backend logic, APIs, servers, and databases to turn a good interface into an actual working application.",
    skills: ["Node.js", "Express", "MongoDB", "Mongoose"],
    command: "node server.js",
    output: "api server running",
    progress: 72,
    status: "CONNECTING",
  },
  {
    id: "python",
    label: "PYTHON",
    number: "03",
    color: "yellow",
    title: "Solving with code.",
    description:
      "Python is where I explore automation, problem-solving, data, and the foundations that connect software development with data science.",
    skills: ["Python", "NumPy", "Pandas"],
    command: "python project.py",
    output: "process completed",
    progress: 76,
    status: "EXPERIMENTING",
  },
  {
    id: "data",
    label: "DATA / AI",
    number: "04",
    color: "purple",
    title: "Following the patterns.",
    description:
      "As an MSc Data Science student, I am building my understanding of statistics, machine learning, data analysis, and AI through hands-on learning.",
    skills: ["Data Science", "Machine Learning", "AI"],
    command: "model.fit(data)",
    output: "learning patterns...",
    progress: 65,
    status: "LEARNING",
  },
];

const ABOUT_STATS = [
  {
    value: "WEB",
    label: "BUILDING",
  },
  {
    value: "DS",
    label: "STUDYING",
  },
  {
    value: "AI",
    label: "EXPLORING",
  },
];

const About = () => {
  const [activeMode, setActiveMode] = useState(0);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  const currentMode = SKILL_MODES[activeMode];

  const nextMode = () => {
    setActiveMode((current) =>
      current === SKILL_MODES.length - 1 ? 0 : current + 1
    );

    setIsExplorerOpen(true);
  };

  return (
    <SectionWrapper delay={0.1}>
      <section
        id="about"
        className={`about-section about-mode-${currentMode.color}`}
      >
        {/* BACKGROUND */}
        <div className="about-noise" />

        <div className="about-grid" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="about-glow about-glow-one" />
        <div className="about-glow about-glow-two" />

        <div className="about-container">
          {/* SECTION TOP */}
          <motion.div
            className="about-topline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: EASY_CUBIC_BEZIER,
            }}
          >
            <div className="about-index">
              <span className="about-index-number">01</span>
              <span>BACKGROUND / EXPERTISE</span>
            </div>

            <div className="about-location">
              <span className="about-live-dot" />
              <span>LEARNING IN PUBLIC</span>
            </div>
          </motion.div>

          {/* HUGE TITLE */}
          <div className="about-title-wrap">
            <motion.h2
              className="about-title about-title-one"
              initial={{
                opacity: 0,
                y: 100,
                rotateX: -25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: EASY_CUBIC_BEZIER,
              }}
            >
              MORE THAN
            </motion.h2>

            <motion.h2
              className="about-title about-title-two"
              initial={{
                opacity: 0,
                y: 100,
                rotateX: -25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.12,
                duration: 1,
                ease: EASY_CUBIC_BEZIER,
              }}
            >
              JUST CODE<span>.</span>
            </motion.h2>
          </div>

          {/* MAIN CONTENT */}
          <div className="about-main-grid">
            {/* LEFT */}
            <motion.div
              className="about-narrative"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: EASY_CUBIC_BEZIER,
              }}
            >
              <span className="about-label">
                THE SHORT VERSION
              </span>

              <p className="about-lead">
                I&apos;m{" "}
                <strong>Mayur Argade</strong>, a developer
                and MSc Data Science student based in Mumbai.
              </p>

              <p>
                I enjoy turning ideas into useful digital
                experiences while continuously exploring the
                space between{" "}
                <strong>software, data, and AI.</strong>
              </p>

              <p>
                Right now, I&apos;m strengthening my
                foundations by building web projects,
                learning machine learning, and understanding
                how real systems work beyond tutorials.
              </p>

              <div className="about-stats">
                {ABOUT_STATS.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="about-stat"
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
                      delay: 0.35 + index * 0.1,
                      duration: 0.5,
                    }}
                  >
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT INTERACTIVE EXPLORER */}
            <motion.div
              className="about-explorer"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.9,
                ease: EASY_CUBIC_BEZIER,
              }}
            >
              <div className="explorer-top">
                <div>
                  <span className="explorer-eyebrow">
                    CURRENT TOOLKIT
                  </span>

                  <h3>
                    What I&apos;m
                    <br />
                    <span>working with.</span>
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={nextMode}
                  className="explorer-cycle-button"
                  aria-label="Change skill mode"
                >
                  <motion.span
                    animate={
                      prefersReducedMotion
                        ? {}
                        : { rotate: 360 }
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ↻
                  </motion.span>
                </button>
              </div>

              {/* MODE SELECTOR */}
              <div className="about-mode-selector">
                {SKILL_MODES.map((mode, index) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => {
                      setActiveMode(index);
                      setIsExplorerOpen(true);
                    }}
                    onMouseEnter={() => setActiveMode(index)}
                    className={`about-mode-button ${
                      activeMode === index ? "active" : ""
                    }`}
                  >
                    <span className="mode-number">
                      {mode.number}
                    </span>

                    <span>{mode.label}</span>

                    {activeMode === index && (
                      <motion.div
                        layoutId="active-about-mode"
                        className="active-mode-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* DYNAMIC PANEL */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMode.id}
                  className="explorer-panel"
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: EASY_CUBIC_BEZIER,
                  }}
                >
                  <div className="panel-status">
                    <div>
                      <span className="panel-dot" />
                      <span>{currentMode.status}</span>
                    </div>

                    <span>{currentMode.number}</span>
                  </div>

                  <h4>{currentMode.title}</h4>

                  <p>{currentMode.description}</p>

                  <div className="panel-skills">
                    {currentMode.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* PROGRESS */}
                  <div className="panel-progress">
                    <div className="progress-heading">
                      <span>FOCUS LEVEL</span>
                      <strong>
                        {currentMode.progress}%
                      </strong>
                    </div>

                    <div className="about-progress-track">
                      <motion.div
                        className="about-progress-fill"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${currentMode.progress}%`,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: EASY_CUBIC_BEZIER,
                        }}
                      />
                    </div>
                  </div>

                  {/* TERMINAL */}
                  <div className="about-terminal">
                    <span>
                      $ {currentMode.command}
                    </span>

                    <strong>
                      ✓ {currentMode.output}
                    </strong>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* CLICK HINT */}
              <AnimatePresence>
                {!isExplorerOpen && (
                  <motion.span
                    className="explorer-hint"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                  >
                    INTERACT WITH THE MODES ↑
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* BOTTOM QUOTE / STATUS */}
          <motion.div
            className="about-bottom"
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
              delay: 0.35,
              duration: 0.8,
              ease: EASY_CUBIC_BEZIER,
            }}
          >
            <div className="about-quote">
              <span>NOTE TO SELF</span>

              <p>
                “Keep learning, keep building, and accept
                that breaking things is sometimes part of
                figuring out how they work.”
              </p>
            </div>

            <div className="about-availability">
              <span className="availability-dot">
                <span />
              </span>

              <div>
                <small>STATUS</small>

                <strong>
                  OPEN TO PROJECTS & COLLABORATIONS
                </strong>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default About;