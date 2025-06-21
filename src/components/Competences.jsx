import './fileCss/Competences.css';

function SkillRow({ name, rating, justification, repo }) {
  return (
    <div className="skill-row">
      <span className="skill-name">{name}</span>
      <span className="skill-stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={n <= rating ? 'star-active' : 'star-inactive'}>★</span>
        ))}
      </span>
      <span className="skill-justification">{justification}</span>
      {repo && (
        <a href={repo} target="_blank" rel="noopener noreferrer" className="skill-link">
          Voir Projet
        </a>
      )}
    </div>
  );
}

export default function Competences() {
  const skills = [
    {
      name: 'Développement Web & Frontend',
      rating: 5,
      justification: 'Création d’applications React SPA avec composants réutilisables, gestion d’état, hooks et déploiement NGINX.',
      repo: 'https://github.com/Baloo54/Audio_Collection', // Audio Collection + Portfolio
    },
    {
      name: 'Backend & API',
      rating: 4,
      justification: 'APIs Node.js avec gestion des sessions, intégration PostgreSQL, déploiement Docker Swarm et sécurisation via Docker Secrets.',
      repo: 'https://github.com/Baloo54/Audio_Collection',
    },
    {
      name: 'Algorithmique & Programmation Java',
      rating: 5,
      justification: 'Implémentation d’algorithmes avancés (plus court chemin), génération automatique de diagrammes UML, jeux 2D en POO.',
      repo: 'https://github.com/Baloo54/SAE-Exploration-Algorithmique',
    },
    {
      name: 'Administration système & réseau',
      rating: 4,
      justification: 'Scripts Bash, gestion de paquets Debian, virtualisation, configuration de serveurs HTTP et reverse proxy NGINX.',
      repo: 'https://github.com/remi-choffat/S3-03',
    },
    {
      name: 'Sécurité & bonnes pratiques',
      rating: 4,
      justification: 'Gestion des accès, VPN, chiffrement SSL, journalisation, protection contre les intrusions, gestion sécurisée des secrets.',
      repo: 'https://github.com/Baloo54/Audio_Collection',
    },
    {
      name: 'Gestion de projet & communication',
      rating: 4,
      justification: 'Méthodes agiles, rédaction technique, simulation de gestion d’entreprise avec prise en compte des critères ESG.',
      repo: '', // pas forcément lié à un repo spécifique
    },
  ];

  return (
    <section id="competences" className="competences-section">
      <h2 className="competences-title">Mes compétences</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <SkillRow
            key={skill.name}
            {...skill}
          />
        ))}
      </div>
    </section>
  );
}
