import React, { useState, useEffect, useRef } from 'react';
import '../styles/Skills.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillsData = {
    Frontend: [
      { name: 'React', level: 75 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 99 },
      { name: 'next', level: 52 },
      
    ],
    Backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 82 },
      { name: 'Python', level: 10 },
      { name: 'REST APIs', level: 70 }
    ],
    Database: [
      { name: 'MongoDB', level: 90 },
     
     
      { name: 'MySQL', level: 70 }
    ],
    Tools: [
      { name: 'Git', level: 100 },
      { name: 'VS Code', level: 100 },
      { name: 'Figma', level: 99 },
     { name: 'Postman', level: 85 }

    ]
  };

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

  const getBarColor = (level) => {
    if (level >= 70) return 'var(--neon-green)';
    if (level >= 35) return 'var(--neon-yellow)';
    return 'var(--neon-pink)';
  };

  return (
    <div className="skills" ref={sectionRef}>
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div
              key={category}
              className={`skill-category ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div
                        className={`skill-bar ${isVisible ? 'animate' : ''}`}
                        style={{
                          '--skill-level': `${skill.level}%`,
                          '--bar-color': getBarColor(skill.level)
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
