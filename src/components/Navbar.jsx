import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll("section");

      let current = "about";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180 && rect.bottom >= 180) {
          current = section.id;
        }
      });

      if (current !== "hero") {
        setActive(current);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`site-navbar ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <div className="nav-container">
        {/* Logo */}

        <motion.button
          className="nav-logo"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          MAYUR<span>.</span>
        </motion.button>

        {/* Desktop navigation */}

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${
                active === item.id
                  ? "nav-link-active"
                  : ""
              }`}
              whileHover={{ y: -1 }}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="nav-active-pill"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">
                {item.label}
              </span>
            </motion.button>
          ))}

          <motion.a
            href="#contact"
            className="nav-talk"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            Let&apos;s talk
            <span>↗</span>
          </motion.a>
        </div>

        {/* Mobile menu */}

        <motion.button
          className="nav-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </motion.button>
      </div>

      {/* Mobile menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
          >
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                onClick={() =>
                  handleNavClick(item.id)
                }
              >
                <span>0{index + 1}</span>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;