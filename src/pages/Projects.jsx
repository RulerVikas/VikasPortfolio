import React from 'react';
import MagicBento from '../components/MagicBento';
import ShinyText from '../components/ShinyText';
import './Projects.css';

const Projects = () => {
  const individualProjects = [
    {
      title: 'Spotify Clone Web App',
      description: 'Music streaming UI with playlists and player controls (links coming soon).',
      technologies: 'React, Tailwind CSS, API',
      link: 'https://freebeat-explorer.vercel.app/'
    },
    
    {
      title: 'Blog Website',
      description: 'Modern blog with posts listing, detail pages, and comments (links coming soon).',
      technologies: 'React, CSS',
      link: '#'
    },
    {
      title: 'Bakery Website',
      description: 'Modern bakery website with responsive design and interactive elements.',
      technologies: 'HTML, CSS, JavaScript',
      link: 'https://rulervikas.github.io/Bakery-Website/'
    },
    {
      title: 'PhoneZone Website',
      description: 'E-commerce platform for mobile devices with optimized user experience.',
      technologies: 'HTML, CSS, JavaScript',
      link: 'https://rulervikas.github.io/PhoneZone-website/index.html'
    },
    {
      title: 'Restaurant Website',
      description: 'Responsive restaurant platform with modern UI/UX design.',
      technologies: 'React, Tailwind CSS',
      link: 'https://rulervikas.github.io/Restaurant-Website/'
    },
    {
      title: 'Coffee Shop',
      description: 'Interactive coffee shop interface with dynamic content loading.',
      technologies: 'HTML, CSS, JavaScript',
      link: 'https://rulervikas.github.io/Coffee-Shop/'
    }
  ];

  const teamProjects = [
    {
      title: 'PeakSmartTH',
      description: 'Team project — real-time peak hour tracking notifier (GitHub repo).',
      technologies: 'Flutter, Node.js, MongoDB',
      link: 'https://github.com/EatSleepCodeRunTimeErrorRepeat/Integrated_Proj_2'
    },
    {
      title: 'AI-Parking Violation Detection',
      description: 'Team project — AI-based parking violation detection (GitHub repo).',
      technologies: 'Python, Computer Vision',
      link: 'https://github.com/LilEurey/AI-Parking-Violation-Detection'
    },
    {
      title: 'CampusLink Platform',
      description: 'A collaborative platform built by our team to connect university students. It adapts new technologies to enhance communication, streamline services, and foster teamwork.',
      technologies: 'MERN Stack, GraphQL, AWS',
      link: 'https://github.com/KMUTT-CampusLink/campus-client'
    }
  ];

  const ProjectCard = ({ project }) => (
    <MagicBento className="project-card" spotlight={true} stars={true} borderGlow={true} tilt={true}>
      <div className="project-title">{project.title}</div>
      <div className="project-description">{project.description}</div>
      <div className="project-technologies">Technologies: {project.technologies}</div>
      <button 
        className="project-preview-button" 
        onClick={() => window.open(project.link, '_blank')}
      >
        <ShinyText 
          text={project.title === 'CampusLink Platform' ? 'View Code' : 'Preview'}
          speed={3}
        />
      </button>
    </MagicBento>
  );

  return (
    <div className="page-container">
      <section className="container page-section">
        <h2 className="page-title">Projects <i className="fas fa-project-diagram"></i></h2>
        
        <h3 className="text-center mb-4" style={{ color: '#8a2be2' }}>Individual Projects</h3>
        <div className="projects-grid">
          {individualProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <h3 className="text-center mb-4 mt-5" style={{ color: '#8a2be2' }}>Team Projects</h3>
        <div className="projects-grid">
          {teamProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        

      </section>
    </div>
  );
};

export default Projects;