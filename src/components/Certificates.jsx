// components/Certificates.jsx
import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: "Foundations Course",
      issuer: "The Odin Project",
      date: "2024",
      url: "https://www.theodinproject.com/paths/foundations/courses/foundations",
      image: "/res/theodin_foundations_course.png"
    },
  ];

  return (
    <div className="certificates-container">
      <h2>Certificates & Courses</h2>

      <div className="certificates-grid">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
          >
            <div className="certificate-image">
              <div className="placeholder-certificate">
                <img src={cert.image} alt={cert.name} />
              </div>
            </div>
            <div className="certificate-info">
              <h3>{cert.name}</h3>
              <div className="certificate-meta">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
              <div className="view-certificate">
                View Course <span>→</span>
              </div>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default Certificates;