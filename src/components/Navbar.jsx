import React, { useEffect, useState } from 'react';
import './fileCss/Navbar.css';

const sections = [
  {id : 'none', label: 'Comte Gabriel'},
  { id: 'accueil', label: 'Accueil' },
  { id: 'competences', label: 'Compétences' },
  { id: 'stage', label: 'Stages' },
  { id: 'projets', label: 'Projets' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isOpen, setIsOpen] = useState(true); // visible par défaut desktop, cachée mobile

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = 'accueil';

      sections.forEach(section => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop < scrollPos) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 10, behavior: 'smooth' });
      // Si sur mobile, fermer la navbar après clic pour libérer l'espace
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Bouton toggle hamburger visible sur mobile */}
      <button
        className="navbar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Sidebar */}
      <nav className={`navbar ${isOpen ? 'open' : 'closed'}`}>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className={activeSection === section.id ? 'active' : ''}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </>
  );
}
