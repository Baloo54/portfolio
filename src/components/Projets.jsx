import './fileCss/Projets.css';

const projets = [
  {
    titre: 'Audio Collection',
    description: `Application web de collecte d’enregistrements vocaux anonymes, avec contrôle complet des sessions : 
      saisie âge/genre avec consentement, lecture de phrases à enregistrer, réenregistrement possible, 
      sauvegarde fiable même en sortie anticipée, et paramétrage du nombre de phrases à lire.`,
    lien: 'https://github.com/Baloo54/Audio_Collection',
    technos: ['Node.js', 'PostgreSQL', 'React', 'NGINX', 'Docker Swarm', 'Docker Secrets', 'OpenSSL']
  },
  {
    titre: 'Morpion',
    description: 'Jeu de morpion en React avec API Node.js, compteur global stocké dans Redis. Déploiement via NGINX en reverse proxy. Passage d’une appli classique à une architecture moderne avec API dédiée.',
    lien: 'https://github.com/Packingdustry/morpion',
    technos: ['React', 'Node.js', 'Redis', 'NGINX']
  },
  {
  titre: 'Développement d’une application',
  description: 'Projet de génération automatique de diagrammes de classes Java à partir de fichiers .class avec interface graphique, export PlantUML et modification des diagrammes.',
  lien: 'https://github.com/Baloo54/SAE_Diagramme2Classe',
  technos: ['Java', 'PlantUML', 'MVC', 'Design Patterns', 'Swing (interface graphique)']
  }
];



export default function Projets() {
  return (
    <section id='projets' className="projets-section">
      <h2 className="projets-title">Mes Projets</h2>
      <div className="projets-grid">
        {projets.map((p) => (
          <div key={p.titre} className="projet-card">
            <h3 className="projet-titre">{p.titre}</h3>
            <p className="projet-description">{p.description}</p>
            {p.technos && (
              <p className="projet-technos">
                <strong>Techs :</strong> {p.technos.join(', ')}
              </p>
            )}
            <a
              href={p.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="projet-lien"
            >
              Voir le repo GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
