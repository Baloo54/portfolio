import './fileCss/Accueil.css';

export default function Accueil() {
  return (
    <section id="accueil" className="accueil-section">
      <h1 className="accueil-title">Bienvenue sur mon Portfolio</h1>
      <p className="accueil-description">
        Je suis étudiant en deuxième année de BUT DACS, et passionné pour la cybersécurité.  
        Ce portfolio est un espace où je partage mes projets, mes compétences et mes découvertes dans le domaine informatique.
      </p>
      <p className="accueil-description">
        Je cherche à approfondir mes connaissances et à relever des défis techniques, notamment autour de la sécurité des systèmes et des réseaux.  
        N’hésitez pas à explorer les différentes sections pour en savoir plus sur mon travail.
      </p>
       <h1 className="accueil-title">Le portfolio est en cours et sera finis le 20 juin</h1>
      <p className="accueil-invitation">
        Bonne visite et merci de votre intérêt !
      </p>
    </section>
  );
}
