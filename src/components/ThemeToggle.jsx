import { motion } from 'motion/react';
import '../styles/themeToggle.css';

const ThemeToggle = ({ toggleTheme, dark }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
    >
      <motion.span
        key={dark ? 'moon' : 'sun'}
        initial={{ rotate: -90, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 15,
        }}
      >
        {dark ? '☾' : '☀'}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;