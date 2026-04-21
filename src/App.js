import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import WhatsAppButton from './components/WhatsAppButton';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import OfferDetailPage from './pages/OfferDetailPage';
import OffersPage from './pages/OffersPage';
import './App.css';

const pageTitles = {
  '/': 'Tunisie Évasion | Agence de voyage',
  '/a-propos': 'À propos | Tunisie Évasion',
  '/offres': 'Offres voyages | Tunisie Évasion',
  '/contact': 'Contact | Tunisie Évasion'
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'Détail offre | Tunisie Évasion';
    document.title = title;
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/offres" element={<OffersPage />} />
        <Route path="/offres/:offerId" element={<OfferDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WhatsAppButton />
    </Layout>
  );
};

export default App;
