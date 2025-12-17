"use client";

import React, { useState, useEffect } from 'react';
import "./styles/App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

export default function Home() {
  

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Load theme from localStorage, default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    // Ensure localStorage has the default theme if not set
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
