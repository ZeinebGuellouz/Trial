import { Link, useParams } from 'react-router-dom';
import { offers } from '../data/offers';

const OfferDetailPage = () => {
  const { offerId } = useParams();
  const offer = offers.find((item) => item.id === offerId);

  if (!offer) {
    return (
      <div className="container section page-intro">
        <h1>Offre introuvable</h1>
        <p>Cette offre n\'existe plus ou a été déplacée.</p>
        <Link to="/offres" className="btn-primary">
          Retour aux offres
        </Link>
      </div>
    );
  }

  return (
    <div className="container section page-intro offer-detail">
      <h1>{offer.title}</h1>
      <p>{offer.description}</p>

      <img className="detail-cover" src={offer.image} alt={offer.title} />

      <div className="about-grid">
        <article className="card">
          <div className="card-body">
            <h2>Services inclus</h2>
            <ul>
              {offer.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>

        <article className="card">
          <div className="card-body">
            <h2>Tarif indicatif</h2>
            <p>{offer.price}</p>
            <p>Fourchette: {offer.priceRange}</p>
            <a
              className="btn-primary"
              href={`https://wa.me/21671000000?text=Bonjour%2C%20je%20veux%20plus%20de%20d%C3%A9tails%20sur%20${encodeURIComponent(
                offer.title
              )}.`}
              target="_blank"
              rel="noreferrer"
            >
              Contacter sur WhatsApp
            </a>
          </div>
        </article>
      </div>

      <section className="compact-gallery">
        <h2>Galerie</h2>
        <div className="gallery-grid">
          {offer.gallery.map((image) => (
            <img src={image} alt={`Aperçu ${offer.destination}`} key={image} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OfferDetailPage;
