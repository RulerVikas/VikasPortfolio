import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 'Advanced', icon: 'fas fa-code' },
    { name: 'HTML', level: 'Expert', icon: 'fab fa-html5' },
    { name: 'CSS', level: 'Expert', icon: 'fab fa-css3-alt' },
    { name: 'React', level: 'Intermediate', icon: 'fab fa-react' },
    { name: 'Node.js', level: 'Intermediate', icon: 'fab fa-node-js' },
    { name: 'Database', level: 'Intermediate', icon: 'fas fa-database' },
    { name: 'UI/UX Design', level: 'Intermediate', icon: 'fas fa-pencil-ruler' },
    { name: 'Workflow Automation', level: 'Intermediate', icon: 'fas fa-cogs' },
    { name: 'Generative AI', level: 'Intermediate', icon: 'fas fa-robot' },
    { name: 'Tailwind CSS', level: 'Intermediate', icon: 'fas fa-wind' },
    { name: 'API', level: 'Intermediate', icon: 'fas fa-plug' }
  ];

  return (
    <div className="page-container">
      <section className="container page-section">
        <h2 className="page-title">Skills <i className="fas fa-cogs"></i></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">{skill.level}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;