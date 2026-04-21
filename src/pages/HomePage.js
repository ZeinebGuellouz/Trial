import { Link } from 'react-router-dom';
import { destinations, offers, testimonials } from '../data/offers';

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-content fade-in">
            <p className="eyebrow">Agence de voyage tunisienne</p>
            <h1>Explorez la Tunisie autrement</h1>
            <p>Des séjours sur mesure, des expériences authentiques et un accompagnement humain.</p>
            <Link to="/offres" className="btn-primary">
              Découvrir nos offres
            </Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>Destinations à la une</h2>
        <div className="card-grid">
          {destinations.map((destination) => (
            <article className="card" key={destination.id}>
              <img src={destination.image} alt={destination.title} />
              <div className="card-body">
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section why-us">
        <div className="container">
          <h2>Pourquoi nous choisir</h2>
          <div className="why-grid">
            <div>
              <h3>Expertise locale</h3>
              <p>Une équipe basée en Tunisie qui connaît chaque destination en détail.</p>
            </div>
            <div>
              <h3>Offres flexibles</h3>
              <p>Des formules adaptées à vos envies: plage, aventure, culture et bien-être.</p>
            </div>
            <div>
              <h3>Support rapide</h3>
              <p>Réponse en quelques minutes via WhatsApp pour vous conseiller simplement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>Avis clients</h2>
        <div className="card-grid testimonials">
          {testimonials.map((testimonial) => (
            <article className="card" key={testimonial.name}>
              <div className="card-body">
                <p>“{testimonial.quote}”</p>
                <strong>{testimonial.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section compact-gallery">
        <h2>Galerie d'inspiration</h2>
        <div className="gallery-grid">
          {offers.flatMap((offer) => offer.gallery).slice(0, 4).map((image) => (
            <img src={image} alt="Inspiration voyage Tunisie" key={image} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
