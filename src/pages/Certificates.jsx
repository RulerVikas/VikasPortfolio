import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      name: 'Meta: Introduction to Front-End Development',
      date: 'November 2024',
      logo: 'https://i.pinimg.com/originals/dc/ff/1e/dcff1e321e7fc8387ccb4d1007906cdf.png',
      alt: 'Meta Logo'
    },
    {
      name: 'Google Cloud: Introduction to Large Language Models',
      date: 'December 2024',
      logo: 'https://storage.googleapis.com/gd-prod/images/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.60c498c559810aa0.webp',
      alt: 'Google Logo'
    },
    {
      name: 'University of California, Irvine: Essentials of Entrepreneurship',
      date: 'November 2024',
      logo: 'https://banner2.cleanpng.com/20180524/pru/avqbzp75i.webp',
      alt: 'UC Irvine Logo'
    }
  ];

  return (
    <div className="page-container">
      <section className="container page-section">
        <h2 className="page-title">Certificates <i className="fas fa-certificate"></i></h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <img src={cert.logo} alt={cert.alt} className="certificate-logo" />
              <div className="certificate-name">{cert.name}</div>
              <div className="certificate-date">{cert.date}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certificates;