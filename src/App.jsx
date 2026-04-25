import { useState, useCallback } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CatalogSection from './components/CatalogSection';
import DifferentialsSection from './components/DifferentialsSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetail = useCallback((product) => setSelectedProduct(product), []);
  const handleClose = useCallback(() => setSelectedProduct(null), []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutSection />
        <CatalogSection onDetail={handleDetail} />
        <DifferentialsSection />
        <FinalCTA />
      </main>
      <Footer />
      <ProductDetail product={selectedProduct} onClose={handleClose} />
    </>
  );
}
