// components/Experiences.jsx
import React from 'react';

const Experiences = () => {
  const experiences = [
    // {
    //   id: 1,
    //   title: "Senior Frontend Developer",
    //   company: "Tech Company XYZ",
    //   period: "2025 - Present",
    //   description: "lorem25"
    // },
  ];

  return (
    <div className="experiences-container">
      <h2>Work Experiences</h2>
      
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-date">{exp.period}</div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;