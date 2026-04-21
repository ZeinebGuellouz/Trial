import { useState } from 'react';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    event.target.reset();
  };

  return (
    <div className="container section page-intro">
      <h1>Contact</h1>
      <p>Parlez-nous de votre projet de voyage, nous vous répondrons rapidement.</p>

      <div className="contact-grid">
        <form className="card contact-form" onSubmit={handleSubmit}>
          <div className="card-body">
            <label htmlFor="name">Nom</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="phone">Téléphone</label>
            <input id="phone" name="phone" type="tel" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />

            <button type="submit" className="btn-primary">
              Envoyer
            </button>

            {isSubmitted && (
              <p className="success-msg">Merci ! Votre message a été envoyé (simulation).</p>
            )}
          </div>
        </form>

        <div className="card">
          <div className="card-body">
            <h2>Coordonnées</h2>
            <p>Avenue Habib Bourguiba, Tunis, Tunisie</p>
            <p>+216 71 000 000</p>
            <p>contact@tunisie-evasion.tn</p>

            <div className="map-wrapper">
              <iframe
                title="Carte agence"
                src="https://maps.google.com/maps?q=tunis&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
