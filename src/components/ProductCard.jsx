import IconWhatsapp from './IconWhatsapp';
import { whatsappLink } from '../data/products';

export default function ProductCard({ product, onDetail }) {
  return (
    <div className="product-card" onClick={() => onDetail(product)}>
      <div style={{ overflow: 'hidden', background: 'var(--cream-dark)' }}>
        <img src={product.image} alt={product.name} className="product-card-img" />
      </div>
      <div className="p-3">
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 15,
            fontWeight: 600,
            color: 'var(--dark-brown)',
            marginBottom: 4,
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </div>
        <div
          style={{
            fontSize: 12,
            color: 'var(--text-soft)',
            lineHeight: 1.5,
            marginBottom: 12,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.short}
        </div>
        <div className="d-flex gap-2">
          <button
            className="btn-card-detail"
            onClick={(e) => {
              e.stopPropagation();
              onDetail(product);
            }}
          >
            Ver mais
          </button>
          <a
            href={whatsappLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-pedir"
            onClick={(e) => e.stopPropagation()}
          >
            <IconWhatsapp /> Pedir
          </a>
        </div>
      </div>
    </div>
  );
}
