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
  },
  {
  titre: 'Portfolio',
  description: `Site personnel réalisé avec React pour présenter mes compétences, projets, expériences et informations de contact. 
    Navigation fluide avec ancrage aux sections, mise en page responsive et design soigné. Code structuré et composants réutilisables.`,
  lien: 'https://github.com/Baloo54/portfolio',
  technos: ['React']
},
{
  titre: 'mbash & Serveur de paquets Debian',
  description: `Projet réalisé dans le cadre de la SAÉ Réseau et Application Serveur. 
    Développement de *mbash*, une version simplifiée du shell Bash permettant d’exécuter des commandes Linux de manière interactive. 
    Mise en place d’un serveur de paquets Debian complet, avec création et gestion de paquets personnalisés.`,
  lien: 'https://github.com/remi-choffat/S3-03',
  technos: ['C', 'Bash', 'Linux', 'Shell Scripting', 'Debian', 'Réseau']
},
{
  titre: 'Serveur Web configurable',
  description: `Développement d’un serveur HTTP en Java capable de servir des fichiers statiques. 
    Configuration possible via un fichier externe : port, répertoire racine, types MIME, pages d’erreur personnalisées. 
    Intégration d’un système de blocage d’adresses IP, et journalisation des requêtes.`,
  lien: 'https://github.com/Baloo54/ServerWeb',
  technos: ['Java', 'HTTP', 'Fichier de configuration']
},
{
  titre: 'Zeldiablo',
  description: `Création d’un jeu vidéo 2D en Java en fin de BUT1. 
    Conception d’un moteur de jeu avec génération de labyrinthe, gestion des collisions, intelligence artificielle basique des ennemis, 
    interface graphique avec mouvements du joueur, attaque, et ramassage d’objets.`,
  lien: 'https://github.com/Baloo54/2024_Zeldiablo_Comte_Fuchs_Andre_Mathieu',
  technos: ['Java', 'POO', 'Interface graphique', 'Jeu 2D']
},
{
  titre: 'Exploration algorithmique et plus court chemin',
  description: `Étude et implémentation en Java d’un nouvel algorithme de recherche du plus court chemin appliqué aux graphes. 
    Travail en équipe sur l’écriture de tests unitaires, la gestion des exceptions (notamment NullPointerException), 
    la documentation complète (Javadoc), et la manipulation de structures de données pour gérer graphes et labyrinthes. 
    Expérimentation des algorithmes dans différents cas concrets pour mieux comprendre leur fonctionnement.`,
  lien: 'https://github.com/Baloo54/SAE-Exploration-Algorithmique',
  technos: ['Java', 'Algorithmes', 'Graphes', 'Tests unitaires', 'Javadoc', 'Debugging']
},
{
  titre: 'Simulation Cesim Firm – Stratégie d’entreprise pharmaceutique',
  description: `Gestion d’une entreprise pharmaceutique finlandaise dans un jeu d’entreprise stratégique sur 7 tours. 
    Élaboration d’une stratégie industrielle et financière axée sur la croissance durable, 
    optimisation des capacités de production, gestion prudente de la dette, et montée en puissance des critères ESG (environnementaux, sociaux et de gouvernance). 
    Adaptation aux dynamiques de marchés internationaux avec un focus sur la Finlande, la France et les États-Unis.`,
  technos: ['Stratégie d’entreprise', 'Gestion financière', 'ESG', 'Simulation business']
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
