import React from 'react';

const Contact = () => {
  return (
    <div className="page-container">
      <section className="container page-section">
        <h2 className="page-title">Contact <i className="fas fa-envelope"></i></h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <a href="mailto:vikasdubey2334@gmail.com">vikasdubey2334@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <div>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/vikaskumar-dubey/" target="_blank" rel="noreferrer">
                  linkedin.com/in/vikaskumar-dubey
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/RulerVikas" target="_blank" rel="noreferrer">
                  github.com/RulerVikas
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <a href="tel:+91989213787">0989213787</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;