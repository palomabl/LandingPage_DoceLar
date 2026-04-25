import { useEffect, useState } from 'react';
import IconWhatsapp from './IconWhatsapp';
import { whatsappLink } from '../data/products';

export default function ProductDetail({ product, onClose }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    function check() { setIsDesktop(window.innerWidth >= 768); }
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = product ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [product]);

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const isOpen = !!product;

  const Content = () =>
    product ? (
      <div style={{ position: 'relative' }}>
        {!isDesktop && <div className="detail-handle" />}
        <button className="detail-close" onClick={onClose} aria-label="Fechar">✕</button>
        <img
          src={product.image}
          alt={product.name}
          className="detail-img"
          style={{ marginTop: isDesktop ? 0 : 12 }}
        />
        <div className="p-3 pb-2">
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 24,
              fontWeight: 700,
              color: 'var(--dark-brown)',
              marginBottom: 10,
            }}
          >
            {product.name}
          </div>
          <div
            style={{
              fontSize: 15,
              color: 'var(--text-soft)',
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            {product.desc}
          </div>
          <div className="d-flex gap-2 flex-wrap mb-2">
            <span
              style={{
                background: 'var(--cream)',
                borderRadius: 50,
                padding: '4px 14px',
                fontSize: 12,
                color: 'var(--text-mid)',
                fontWeight: 600,
              }}
            >
              {product.category}
            </span>
            <span
              style={{
                background: 'var(--cream)',
                borderRadius: 50,
                padding: '4px 14px',
                fontSize: 12,
                color: 'var(--text-mid)',
                fontWeight: 600,
              }}
            >
              Artesanal
            </span>
          </div>
          <div
            style={{
              fontSize: 13,
              color: 'var(--text-soft)',
              fontStyle: 'italic',
              marginBottom: 20,
            }}
          >
            💬 {product.price} — entre em contato para encomendas
          </div>
        </div>
        <div className="detail-actions">
          <a
            href={whatsappLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-doce btn-doce-whatsapp"
            style={{ justifyContent: 'center' }}
          >
            <IconWhatsapp /> Pedir agora pelo WhatsApp
          </a>
          <button
            className="btn-doce btn-doce-outline"
            onClick={onClose}
            style={{ justifyContent: 'center' }}
          >
            Voltar ao cardápio
          </button>
        </div>
      </div>
    ) : null;

  return (
    <>
      <div
        className={`doce-overlay${isOpen ? ' active' : ''}`}
        onClick={onClose}
      />
      {isDesktop ? (
        <aside className={`side-panel${isOpen ? ' open' : ''}`}>
          <Content />
        </aside>
      ) : (
        <div
          className={`bottom-sheet${isOpen ? ' open' : ''}`}
          role="dialog"
          aria-modal="true"
        >
          <Content />
        </div>
      )}
    </>
  );
}
