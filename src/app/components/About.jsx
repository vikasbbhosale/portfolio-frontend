import React, { useState, useEffect, useRef } from 'react';
import '../styles/About.css';
import about from "../../../public/about.jpg"

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const achievements = [
    "Certified Web Developer",
    "Full-Stack Internship Experience",
    "Industry Company Visits"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="about" ref={sectionRef}>
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className={`about-image ${isVisible ? 'visible' : ''}`}>
            <div className="image-container">
              <img
                src="/about.jpg"
                alt="Profile"
                className="about-img"
              />
              <div className="color-overlay overlay-cyan"></div>
              <div className="color-overlay overlay-pink"></div>
              <div className="color-overlay overlay-purple"></div>
            </div>
          </div>

          <div className={`about-text ${isVisible ? 'visible' : ''}`}>
            <p className="about-paragraph">
             I am a results-driven software developer specializing in modern web technologies such as React,
              Node.js, and MongoDB. I focus on building scalable, efficient, and user-oriented applications
               while maintaining clean code practices.
            </p>
            
            <p className="about-paragraph">
             I believe in continuous learning, problem-solving, and writing code that not only works but also makes a difference.
              My goal is to keep improving my skills, build innovative digital experiences,
               and contribute to meaningful projects that challenge me to grow every day.
            </p>

            <div className="achievements">
              <h3 className="achievements-title">Key Achievements</h3>
              <div className="achievements-list">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`achievement-chip ${isVisible ? 'visible' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="chip-icon">✦</span>
                    <span className="chip-text">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
