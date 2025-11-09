import React from 'react';

const Experience = () => {
  return (
    <div className="page-container">
      <section className="container page-section">
        <h2 className="page-title">Professional Experience <i className="fas fa-briefcase"></i></h2>
        <div className="experience-item">
          <h3><strong>Project Manager Intern</strong></h3>
          <h4>Rethink Lab Co., Ltd.</h4>
          <p className="experience-date">2025 June – 2025 August</p>
          <ul>
            <li>Managed and monitored project timelines within the Product & Strategy Department.</li>
            <li>Assisted in planning, executing, and documenting project deliverables.</li>
            <li>Supported sprint ceremonies and team coordination using Agile principles.</li>
            <li>Leveraged AI tools to automate workflows and increase operational efficiency.</li>
            <li>Recognized for professionalism, punctuality, and proactive problem-solving.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3><strong>Product Manager and Sales</strong></h3>
          <h4>SIAM CUBIC LTD.</h4>
          <p className="experience-date">2024 June – 2024 July</p>
          <ul>
            <li>Communicated effectively with team members to deliver updates on project milestones and deadlines.</li>
            <li>Developed product documentation to communicate upcoming features and products to internal teams.</li>
            <li>Collaborated with sales teams to develop effective training materials that drove increased product knowledge among staff members, resulting in higher close rates.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Experience;