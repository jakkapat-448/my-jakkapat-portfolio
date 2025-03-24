// components/Projects.jsx
import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Exoraton Discord Bot",
      description: "บอท Discord ที่ใช้ API ของ exaroton เพื่อดูข้อมูลและจัดการเซิร์ฟเวอร์ Minecraft ผ่าน Discord",
      image: "/res/exarotonBot-example.gif",
      category: "personal",
      technologies: ["Python", "Exaroton API",],
      image: `${process.env.PUBLIC_URL}/res/exarotonBot-example.gif`,
      demo: null
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-container">
      <h2>My Projects</h2>

      <div className="project-filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button
          className={filter === 'personal' ? 'active' : ''}
          onClick={() => setFilter('personal')}
        >
          Personal Projects
        </button>
        <button
          className={filter === 'professional' ? 'active' : ''}
          onClick={() => setFilter('professional')}
        >
          Professional Projects
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className="placeholder-project">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-category">
                {project.category === 'personal' ? 'Personal Project' : 'Professional Project'}
              </div>
            </div>

            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;