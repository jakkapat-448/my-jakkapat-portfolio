// components/Contact.jsx
import React from 'react';

const Contact = () => {
  const officialContacts = [
    {
      id: 1,
      type: "Email",
      value: "boss.jakkapat05@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      link: "mailto:boss.jakkapat05@gmail.com"
    },
    {
      id: 2,
      type: "Phone",
      value: "095-872-0124",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      link: "tel:+66958720124"
    }
  ];

  const socialContacts = [
    {
      id: 1,
      type: "Instagram",
      value: "@extra.bss",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      link: "https://instagram.com/extra.bss"
    },
    {
      id: 2,
      type: "Discord",
      value: "0b1000_",
      icon: (
        <img src="\res\discord-white-icon.svg" alt="" width="26" height="26" />
      ),
      link: "https://discord.gg/cpx9J7EzxM"
    },
  ];

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <div className="contact-sections">
        <div className="contact-section">
          <div className="contact-cards">
            {officialContacts.map((contact) => (
              <a
                key={contact.id}
                href={contact.link}
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon">
                  {contact.icon}
                </div>
                <div className="contact-info">
                  <h4>{contact.type}</h4>
                  <p>{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <div className="contact-cards">
            {socialContacts.map((contact) => (
              <a
                key={contact.id}
                href={contact.link}
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon">
                  {contact.icon}
                </div>
                <div className="contact-info">
                  <h4>{contact.type}</h4>
                  <p>{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;