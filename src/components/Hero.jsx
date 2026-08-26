import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import "../styles/hero.css";

const EASE = [0.16, 1, 0.3, 1];

const MODES = [
  {
    id: "web",
    tech: "REACT / WEB",
    label: "BUILDING EXPERIENCES",
    short: "WEB",
    description:
      "Building responsive, interactive web experiences that are actually useful.",
    progress: 82,
    status: "ACTIVE",
    command: "npm run build",
    output: "UI compiled successfully",
    nodes: 6,
  },
  {
    id: "code",
    tech: "JAVASCRIPT",
    label: "MAKING IDEAS MOVE",
    short: "JS",
    description:
      "Turning static ideas into interactive experiences with clean logic and code.",
    progress: 78,
    status: "CODING",
    command: "const idea = build();",
    output: "interaction initialized",
    nodes: 8,
  },
  {
    id: "python",
    tech: "PYTHON",
    label: "SOLVING WITH CODE",
    short: "PY",
    description:
      "Exploring automation, data, problem-solving, and the weird things Python can do.",
    progress: 74,
    status: "LEARNING",
    command: "python project.py",
    output: "process running...",
    nodes: 5,
  },
  {
    id: "ai",
    tech: "AI / ML",
    label: "EXPLORING INTELLIGENCE",
    short: "AI",
    description:
      "Learning how data, models, and intelligent systems can solve real problems.",
    progress: 68,
    status: "EXPLORING",
    command: "model.fit(data)",
    output: "patterns detected",
    nodes: 12,
  },
  {
    id: "data",
    tech: "DATA SCIENCE",
    label: "FINDING PATTERNS",
    short: "DS",
    description:
      "Using data, statistics, and curiosity to understand what the numbers are saying.",
    progress: 72,
    status: "ANALYZING",
    command: "data.describe()",
    output: "insights loading...",
    nodes: 10,
  },
];

const useMagnetic = (enabled) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 14,
    mass: 0.15,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 14,
    mass: 0.15,
  });

  const handleMouseMove = (event) => {
    if (!enabled) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const moveX =
      (event.clientX - rect.left - rect.width / 2) * 0.22;

    const moveY =
      (event.clientY - rect.top - rect.height / 2) * 0.22;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    style: {
      x: springX,
      y: springY,
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
};

const Hero = () => {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const [isFinePointer, setIsFinePointer] = useState(false);
  const [activeMode, setActiveMode] = useState(0);
  const [isVisualOpen, setIsVisualOpen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 22,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 22,
  });

  const visualX = useTransform(smoothX, (value) => value * -0.04);
  const visualY = useTransform(smoothY, (value) => value * -0.04);

  const glowX = useTransform(smoothX, (value) => value * 0.07);
  const glowY = useTransform(smoothY, (value) => value * 0.07);

  const primaryMagnetic = useMagnetic(
    !prefersReducedMotion && isFinePointer
  );

  const secondaryMagnetic = useMagnetic(
    !prefersReducedMotion && isFinePointer
  );

  const currentMode = MODES[activeMode];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const updatePointer = () => {
      setIsFinePointer(mediaQuery.matches);
    };

    updatePointer();

    mediaQuery.addEventListener("change", updatePointer);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updatePointer
      );
    };
  }, []);

  const handleSectionMouseMove = (event) => {
    if (prefersReducedMotion || !isFinePointer) return;

    const section = sectionRef.current;

    if (!section) return;

    const rect = section.getBoundingClientRect();

    mouseX.set(
      event.clientX - rect.left - rect.width / 2
    );

    mouseY.set(
      event.clientY - rect.top - rect.height / 2
    );
  };

  const handleSectionMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const nextMode = () => {
    setActiveMode((current) =>
      current === MODES.length - 1 ? 0 : current + 1
    );

    setIsVisualOpen(true);
  };

  const selectMode = (index) => {
    setActiveMode(index);
    setIsVisualOpen(true);
  };

  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Introduction"
      className={`hero-section hero-mode-${currentMode.id}`}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
    >
      {/* Background */}
      <div className="hero-noise" />

      <motion.div
        className="hero-glow hero-glow-one"
        style={
          prefersReducedMotion
            ? undefined
            : {
                x: glowX,
                y: glowY,
              }
        }
      />

      <motion.div
        className="hero-glow hero-glow-two"
        style={
          prefersReducedMotion
            ? undefined
            : {
                x: useTransform(
                  smoothX,
                  (value) => value * -0.05
                ),
                y: useTransform(
                  smoothY,
                  (value) => value * -0.05
                ),
              }
        }
      />

      <div className="hero-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* TOP BAR */}
      <motion.div
        className="hero-top"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: EASE,
        }}
      >
        <div className="hero-location">
          <span className="hero-status-dot" />
          <span>MUMBAI, INDIA</span>
        </div>

        <div className="hero-top-center">
          <span>PORTFOLIO</span>
          <span className="hero-top-divider">/</span>
          <span>2026</span>
        </div>

        <div className="hero-availability">
          <span>AVAILABLE FOR</span>
          <strong>OPPORTUNITIES</strong>
        </div>
      </motion.div>

      {/* MAIN */}
      <div className="hero-main">
        <motion.div
          className="hero-index"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: EASE,
          }}
        >
          <span>01</span>
          <span>HELLO, HUMAN.</span>
        </motion.div>

        {/* NAME */}
        <div className="hero-name-container">
          <motion.h1
            className="hero-name hero-name-mayur"
            initial={{
              opacity: 0,
              y: 120,
              rotateX: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 1.1,
              ease: EASE,
            }}
          >
            MAYUR
          </motion.h1>

          <motion.h1
            className="hero-name hero-name-argade"
            initial={{
              opacity: 0,
              y: 120,
              rotateX: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 1.1,
              ease: EASE,
            }}
          >
            ARGADE<span>.</span>
          </motion.h1>
        </div>

        {/* INTERACTIVE MESSAGE */}
        <motion.div
          className="hero-message"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
            duration: 0.9,
            ease: EASE,
          }}
        >
          <span className="hero-message-label">
            CURRENT MISSION
          </span>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentMode.id}
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
              }}
            >
              {currentMode.description}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* INTERACTIVE TECH SELECTOR */}
        <motion.div
          className="hero-tech-selector"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.85,
            duration: 0.8,
            ease: EASE,
          }}
        >
          <span className="selector-label">
            SELECT MODE
          </span>

          <div className="selector-buttons">
            {MODES.map((mode, index) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => selectMode(index)}
                onMouseEnter={() => setActiveMode(index)}
                className={`selector-button ${
                  activeMode === index ? "active" : ""
                }`}
              >
                <span>{mode.tech}</span>

                {activeMode === index && (
                  <motion.span
                    layoutId="active-tech"
                    className="selector-active-line"
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
        </motion.div>
      </div>

      {/* INTERACTIVE VISUAL */}
      <motion.div
        className={`interactive-visual ${
          isVisualOpen ? "is-open" : ""
        }`}
        style={
          prefersReducedMotion
            ? undefined
            : {
                x: visualX,
                y: visualY,
              }
        }
        initial={{
          opacity: 0,
          scale: 0.7,
          rotate: -15,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          delay: 0.7,
          duration: 1.2,
          ease: EASE,
        }}
      >
        <button
          type="button"
          className="visual-button"
          onClick={nextMode}
          aria-label="Change interactive mode"
        >
          {/* Rings */}
          <motion.div
            className="visual-ring visual-ring-one"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="visual-ring visual-ring-two"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    rotate: -360,
                  }
            }
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Nodes */}
          <div className="visual-nodes">
            {Array.from({
              length: currentMode.nodes,
            }).map((_, index) => {
              const angle =
                (360 / currentMode.nodes) * index;

              return (
                <motion.span
                  key={`${currentMode.id}-${index}`}
                  className="visual-node"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-78px)`,
                  }}
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.03,
                  }}
                />
              );
            })}
          </div>

          {/* Core */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMode.id}
              className="visual-core"
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -90,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                rotate: 90,
              }}
              transition={{
                duration: 0.45,
                ease: EASE,
              }}
            >
              <span className="visual-core-tech">
                {currentMode.short}
              </span>

              <span className="visual-core-status">
                {currentMode.status}
              </span>
            </motion.div>
          </AnimatePresence>

          <span className="visual-hint">
            CLICK TO CHANGE
          </span>
        </button>

        {/* Info card */}
        <AnimatePresence>
          {isVisualOpen && (
            <motion.div
              className="visual-info-card"
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.95,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <div className="info-card-top">
                <span>{currentMode.label}</span>

                <span className="info-live-dot" />
              </div>

              <div className="info-progress">
                <div className="progress-label">
                  <span>EXPLORATION</span>

                  <span>
                    {currentMode.progress}%
                  </span>
                </div>

                <div className="progress-track">
                  <motion.div
                    className="progress-fill"
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: `${currentMode.progress}%`,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: EASE,
                    }}
                  />
                </div>
              </div>

              <div className="info-command">
                <span>$ {currentMode.command}</span>
                <strong>
                  ✓ {currentMode.output}
                </strong>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* BOTTOM */}
      <motion.div
        className="hero-bottom"
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.9,
          ease: EASE,
        }}
      >
        <div className="hero-intro">
          <span className="intro-number">
            ( ABOUT ME )
          </span>

          <p>
            I&apos;m a Software Developer and MSc Data
            Science student building at the intersection
            of <strong>web, data, and AI.</strong>
          </p>
        </div>

        <div className="hero-actions">
          <motion.button
            type="button"
            className="hero-action hero-action-primary"
            onClick={() =>
              scrollToSection("#projects")
            }
            style={primaryMagnetic.style}
            onMouseMove={
              primaryMagnetic.onMouseMove
            }
            onMouseLeave={
              primaryMagnetic.onMouseLeave
            }
            whileTap={{
              scale: 0.96,
            }}
          >
            <span>EXPLORE MY WORK</span>
            <strong>↘</strong>
          </motion.button>

          <motion.button
            type="button"
            className="hero-action hero-action-secondary"
            onClick={() =>
              scrollToSection("#contact")
            }
            style={secondaryMagnetic.style}
            onMouseMove={
              secondaryMagnetic.onMouseMove
            }
            onMouseLeave={
              secondaryMagnetic.onMouseLeave
            }
            whileTap={{
              scale: 0.96,
            }}
          >
            <span>LET&apos;S TALK</span>
            <strong>↗</strong>
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll */}
      <motion.button
        type="button"
        className="hero-scroll"
        onClick={() => scrollToSection("#about")}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.3,
          duration: 0.8,
        }}
      >
        <span>SCROLL TO EXPLORE</span>

        <motion.span
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, 7, 0],
                }
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          ↓
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;