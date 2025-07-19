// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
export default App;