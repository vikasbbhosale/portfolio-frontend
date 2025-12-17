import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

function Hero() {
    const [displayedText, setDisplayedText] = useState('');
    const fullName = "Software Engineer";

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullName.length) {
                setDisplayedText(fullName.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 150);

        return () => clearInterval(typingInterval);
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollDown = () => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-content">

                    <div className="hero-text">
                        <h1 >Hi, I'm <span className='hero-vikas'> Vikas</span> </h1>
                        <h5 className="hero-name">
                            <span className="typewriter">{displayedText}</span>
                            <span className="cursor">|</span>
                        </h5>
                        <h3>

                        </h3>
                        <p className="hero-subtitle">
                            I build responsive full-stack web applications. using Next, React, Node.js, and MongoDB.
                            <span className="scanline"></span>
                        </p>
                        <p className="hero-description">
                            I am a Freelancer. For inquiries, click 'Get Touch Me'.
                        </p>

                        <div className="hero-buttons">
                            <a
                                href="/vikas-resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                aria-label="View Resume"
                            >
                                <span className="btn-text">Resume</span>
                                <span className="btn-glow"></span>
                            </a>
                            <button
                                className="btn btn-secondary"
                                onClick={scrollToContact}
                                aria-label="Contact Me"
                            >
                                <span className="btn-text">Get Touch Me</span>
                                <span className="btn-glow"></span>
                            </button>
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="image-wrapper">
                            <img src="/vikas.jpg" alt="Profile" className="profile-img" />
                            <div className="image-glow"></div>
                        </div>
                    </div>
                </div>

                <button
                    className="scroll-indicator"
                    onClick={scrollDown}
                    aria-label="Scroll to next section"
                >
                    <div className="arrow-down"></div>
                </button>
            </div>
        </div>
    );
}

export default Hero;
