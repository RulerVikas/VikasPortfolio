import React from 'react';
import { Link } from 'react-router-dom';
import Aurora from '../components/Aurora';
import ShinyText from '../components/ShinyText';

const Home = () => {
  const name = "Vikaskumar  Dubey";
  
  return (
    <section className="home-section">
      {/* Aurora with purple theme matching your portfolio */}
      <Aurora 
        colorStops={['#8a2be2', '#6a5acd', '#9d7dd8']}
        amplitude={1.2}
        blend={0.5}
        speed={0.8}
      />
      
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">
            {name.split('').map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h1>
          <p className="home-subtitle">
            Turning imagination into experiences that inspire and connect people.
          </p>
          
          <div className="home-buttons">
            <Link to="/about" className="btn-primary">
              <ShinyText text="Learn More" speed={4} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              <ShinyText text="Get In Touch" speed={4} />
            </Link>
          </div>
          
          <div className="home-social">
            <a href="https://www.linkedin.com/in/vikaskumar-dubey/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/RulerVikas" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:vikasdubey2334@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <Link to="/about">
          <i className="fas fa-chevron-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default Home;