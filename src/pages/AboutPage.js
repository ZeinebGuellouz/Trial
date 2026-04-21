const AboutPage = () => {
  return (
    <div className="container section page-intro">
      <h1>À propos de Tunisie Évasion</h1>
      <p>
        Depuis 2014, notre agence accompagne les voyageurs tunisiens et internationaux pour découvrir la Tunisie
        avec authenticité, confort et sécurité.
      </p>

      <div className="about-grid">
        <article className="card">
          <div className="card-body">
            <h2>Notre mission</h2>
            <p>
              Créer des voyages inspirants qui mettent en valeur le patrimoine, la nature et l\'hospitalité tunisienne.
            </p>
          </div>
        </article>

        <article className="card">
          <div className="card-body">
            <h2>Nos valeurs</h2>
            <ul>
              <li>Transparence sur les prix et les services</li>
              <li>Qualité de sélection des hôtels et partenaires</li>
              <li>Accompagnement personnalisé avant et pendant le voyage</li>
            </ul>
          </div>
        </article>
      </div>

      <section className="section team-block">
        <h2>Notre équipe</h2>
        <div className="team-grid">
          <article className="card">
            <div className="card-body">
              <h3>Amine - Directeur</h3>
              <p>Spécialiste des circuits culturels et premium.</p>
            </div>
          </article>
          <article className="card">
            <div className="card-body">
              <h3>Meriem - Conseillère voyages</h3>
              <p>Experte séjours balnéaires et family-friendly.</p>
            </div>
          </article>
          <article className="card">
            <div className="card-body">
              <h3>Walid - Logistique</h3>
              <p>Coordination transport, hôtels et assistance terrain.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
