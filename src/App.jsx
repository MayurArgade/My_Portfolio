import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Projects from './components/Project';
import Sidebar from './components/Sidebar';

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
  }, [dark]);

  return (
    <>
      <ThemeToggle toggleTheme={toggleTheme} dark={dark} />
      <Sidebar/>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
