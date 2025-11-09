import React, { useState } from 'react';
import ModelViewer from '../components/ModelViewer';

const About = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <div className="page-container">
      <section className="container page-section">
        <h2 className="page-title">About Me</h2>
        <div className="about-two-col">
          <div className="about-left">
            <div className="about-content">
              <p className="about-text">
                I’m a passionate Computer Science student at KMUTT with a love for creating clean, user-friendly web experiences. 
                I enjoy turning ideas into interactive designs through front-end development, combining creativity with strong technical skills in API integration and AI & Automation. 
                I’m always eager to learn, collaborate, and contribute to exciting projects that make a real impact in the tech world.
              </p>
              
              <div className="about-highlights">
                <div className="highlight-card">
                  <i className="fas fa-graduation-cap"></i>
                  <h3>Education</h3>
                  <p>
                    <strong>Bachelor of Computer Science</strong><br/>
                    King Mongkut’s University of Technology Thonburi (KMUTT)<br/>
                    <span style={{ color: '#b0b0b0' }}>Bangkok, Thailand — August 2027</span>
                  </p>
                  <p style={{ marginTop: '0.75rem' }}>
                    <strong>Imperial Public School</strong><br/>
                    <span style={{ color: '#b0b0b0' }}>India — August 2022</span>
                  </p>
                </div>
                <div className="highlight-card">
                  <i className="fas fa-code"></i>
                  <h3>Specialization</h3>
                  <p>
                    Creating beautiful and easy-to-use websites with a focus on front-end design and user experience. 
                    I enjoy bringing ideas to life with creativity and clean design.
                  </p>
                </div>
                <div className="highlight-card">
                  <i className="fas fa-lightbulb"></i>
                  <h3>Passion</h3>
                  <p>
                    I love solving problems, learning new things, and turning ideas into something real.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="model-box" style={{ minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {showModel ? (
                <ModelViewer src="/ROBOT 3.glb" alt="Robot 3D Model" />
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <button className="btn-primary" onClick={() => setShowModel(true)}>
                    Load 3D Model
                  </button>
                  <p style={{ marginTop: '0.75rem', color: '#b0b0b0' }}>
                    Loads on click to keep the page fast.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;