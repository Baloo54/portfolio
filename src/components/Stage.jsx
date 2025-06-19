import './fileCss/Stage.css';
import logo6themes from '../images/logo.webp';

export default function Stage() {
  return (
    <section id='stage' className="stages-section">
      <h2 className="stages-title">Mes Stages</h2>
      <div className="stage-card">
        <h3 className="stage-entreprise">6thèmesInfo : février-avril 2025</h3>
        <div className="stage-content">
          <div className="stage-text">
            <h4 className="stage-role">Rôle : Stagiaire en administration système et sécurité</h4>
            <h4 className="stage-missions-title">Missions :</h4>
            <ul className="stage-liste">
              <li>Analyse et restructuration du stockage des données sensibles de l’entreprise</li>
              <li>Mise en place de solutions de chiffrement pour sécuriser les données critiques</li>
              <li>Virtualisation et gestion des serveurs avec Proxmox et Windows Server</li>
              <li>Étude et expérimentation de Vault pour la gestion sécurisée des secrets et clés</li>
              <li>Segmentation réseau pour isoler les zones sensibles et limiter les risques</li>
              <li>Auto-formation sur des outils et technologies indispensables à la sécurisation des infrastructures</li>
            </ul>
          </div>
          <div className="stage-logo">
            <img src={logo6themes} alt="Logo 6thèmesInfo" />
          </div>
        </div>
      </div>
    </section>
  );
}
