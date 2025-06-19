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
      <a href={repo} target="_blank" rel="noopener noreferrer" className="skill-link">
        Voir Projet
      </a>
    </div>
  );
}

export default function Competences() {
  const skills = [
    {
      name: 'React',
      rating: 4,
      justification: 'SPA avec hooks et composants personnalisés.',
      repo: 'https://github.com/tonrepo/react', 
    },
    {
      name: 'Node.js',
      rating: 3,
      justification: 'loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      repo: 'https://github.com/tonrepo/node',
    },
    // Ajoute plus de compétences ici
  ];

  return (
    <section id='competences' className="competences-section">
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
