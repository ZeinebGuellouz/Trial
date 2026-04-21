import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { offers } from '../data/offers';

const OffersPage = () => {
  const [filter, setFilter] = useState('Tous');
  const options = ['Tous', ...new Set(offers.flatMap((offer) => [offer.destination, offer.type]))];

  const filteredOffers = useMemo(() => {
    if (filter === 'Tous') {
      return offers;
    }

    return offers.filter((offer) => offer.destination === filter || offer.type === filter);
  }, [filter]);

  return (
    <div className="container section page-intro">
      <h1>Nos offres & voyages</h1>
      <p>Choisissez votre prochaine expérience selon la destination ou le type de séjour.</p>

      <div className="filter-row">
        <label htmlFor="filter">Filtrer</label>
        <select id="filter" value={filter} onChange={(event) => setFilter(event.target.value)}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="card-grid">
        {filteredOffers.map((offer) => (
          <article className="card" key={offer.id}>
            <img src={offer.image} alt={offer.title} />
            <div className="card-body">
              <h2>{offer.title}</h2>
              <p>{offer.shortDescription}</p>
              <p>
                <strong>{offer.price}</strong>
              </p>
              <Link className="text-link" to={`/offres/${offer.id}`}>
                Voir le détail
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;
