import './fileCss/Stage.css';

export default function Stage() {
  return (
    <section id='stage' className="stages-section">
      <h2 className="stages-title">Mes Stages</h2>
      <div className="stage-card">
        <h3 className="stage-entreprise">6thèmesInfo - Été 2025</h3>
        <ul className="stage-liste">
          <li>Mise en place de solutions de chiffrement et de stockage sécurisé</li>
          <li>Virtualisation (Proxmox, Windows Server)</li>
          <li>Étude de Vault, Active Directory et segmentation réseau</li>
        </ul>
      </div>
    </section>
  );
}
