import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Connect with me:</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/vikaskumar-dubey/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/RulerVikas" target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:vikasdubey2334@gmail.com" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="tel:+91989213787" aria-label="Phone">
          <i className="fas fa-phone"></i>
        </a>
      </div>
      <p className="mt-3">&copy; 2024 Vikaskumar Dubey. All rights reserved.</p>
    </footer>
  );
};

export default Footer;