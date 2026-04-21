import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container nav-content">
          <NavLink to="/" className="brand">
            Tunisie Évasion
          </NavLink>
          <nav className="menu">
            <NavLink to="/" end>
              Accueil
            </NavLink>
            <NavLink to="/a-propos">À propos</NavLink>
            <NavLink to="/offres">Offres</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h4>Tunisie Évasion</h4>
            <p>Votre agence de voyage locale pour des séjours mémorables en Tunisie.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Avenue Habib Bourguiba, Tunis</p>
            <p>+216 71 000 000</p>
            <p>contact@tunisie-evasion.tn</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
