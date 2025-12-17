import React, { useState } from 'react';
import '../styles/Education.css';


function Education() {
  const [showCGPAModal, setShowCGPAModal] = useState(false);

  const universityData = {
    name: "Rai Univetsity",
    branch: "Computer Science & Engineering",
    batch: "2024 - 2028",
    description: "Rai University is a private university in Ahmedabad, Gujarat, established in 2012 by the Gujarat State Legislature.",
    website: "https://www.raiuniversity.edu/",
    image: "/Rai.jpg"
  };

  const onlineData = {
    platform: "Nxt Wave",
    course: "Full Stack Web Development., DSA,Python",
    description: "NxtWave is an Indian EdTech startup that provides intensive software development training programs through its CCBP 4.0 (Continuous Career Building Programs 4.0).",
    website: "https://www.ccbp.in/",
    image: "/nxt-wave.webp"
  };

  return (
    <div className="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>

        <div className="education-cards">
          <div className="edu-card">
            <div className="card-image">
              <img
                src={universityData.image}
                alt={universityData.name}
                className="edu-img"
          
              />
            </div>
            <div className="card-content">
             
              <h3 className="edu-name">{universityData.name}</h3>
              <p className="edu-branch">{universityData.branch}</p>
              <p className="edu-batch">Batch: {universityData.batch}</p>
              <p className="edu-description">{universityData.description}</p>
              
              <div className="card-buttons">
                <a
                  href={universityData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-btn btn-visit"
                >
                  Visit University
                </a>
                <button
                  className="edu-btn btn-cgpa"
                  onClick={() => setShowCGPAModal(true)}
                >
                  Show CGPA
                </button>
              </div>
            </div>
          </div>

          <div className="edu-card">
            <div className="card-image">
              <img
                src={onlineData.image}
                alt={onlineData.platform}
                className="edu-img"
              />
            </div>
            <div className="card-content">
              <h3 className="edu-name">{onlineData.platform}</h3>
              <p className="edu-branch">{onlineData.course}</p>
              <p className="edu-description">{onlineData.description}</p>
              
              <div className="card-buttons">
                <a
                  href={onlineData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-btn btn-visit"
                >
                  Visit Platform
                </a>
              </div>
            </div>
          </div>
        </div>

        {showCGPAModal && (
          <div className="modal-overlay" onClick={() => setShowCGPAModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setShowCGPAModal(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
              <h3 className="modal-title">Academic Performance</h3>
              <div className="cgpa-container">
                <img
                  src="/result.png"
                  alt="CGPA Certificate"
                  className="cgpa-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="cgpa-placeholder"><p>CGPA: 8.5/10</p><p>Add your CGPA screenshot to /public/assets/cgpa.png</p></div>';
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Education;
