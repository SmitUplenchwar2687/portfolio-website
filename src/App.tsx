import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}