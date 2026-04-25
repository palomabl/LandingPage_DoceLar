import { useState } from 'react';
import ProductCard from './ProductCard';
import { ALL_PRODUCTS, CATEGORIES } from '../data/products';

export default function CatalogSection({ onDetail }) {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered =
    activeCategory === 'Todos'
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="cardapio" style={{ background: 'var(--white)', padding: '72px 0' }}>
      <div className="container-xl" style={{ maxWidth: 1140 }}>
        <div className="section-tag">Cardápio</div>
        <h2 className="section-title">Escolha seu doce favorito</h2>
        <p className="section-subtitle">
          Bolos caseiros, mini bolos e sabores especiais preparados artesanalmente com muito carinho.
        </p>

        <div className="category-tabs mt-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cat-tab${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-3 g-lg-4 mt-1"
        >
          {filtered.map((p) => (
            <div key={p.id} className="col">
              <ProductCard product={p} onDetail={onDetail} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
