import './fileCss/Projets.css';

const projets = [
  {
    titre: 'Mon API audio',
    description: 'API Node.js permettant l’upload et la gestion de fichiers audio ZIP.',
    lien: 'https://github.com/tonrepo/audio-api'
  },
  {
    titre: 'Gestionnaire de mots de passe',
    description: 'App locale avec chiffrement basé sur Vault.',
    lien: 'https://github.com/tonrepo/password-manager'
  }
];

export default function Projets() {
  return (
    <section id='projets' className="projets-section">
      <h2 className="projets-title">Mes Projets</h2>
      <div className="projets-grid">
        {projets.map((p) => (
          <a
            key={p.titre}
            href={p.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="projet-card"
          >
            <h3 className="projet-titre">{p.titre}</h3>
            <p className="projet-description">{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
