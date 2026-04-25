import { useState } from 'react';
import HeroBlobs from './HeroBlobs';
import IconWhatsapp from './IconWhatsapp';
import { FEATURED_CAKES, whatsappLink } from '../data/products';

export default function Hero() {
  const [selected, setSelected] = useState(0);
  const [visible, setVisible] = useState(true);
  const [imgKey, setImgKey] = useState(0);
  const cake = FEATURED_CAKES[selected];

  function selectCake(i) {
    if (i === selected) return;
    setVisible(false);
    setTimeout(() => {
      setSelected(i);
      setImgKey((k) => k + 1);
      setVisible(true);
    }, 220);
  }

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'linear-gradient(115deg, rgba(243,233,220,0.98) 0%, rgba(253,248,243,0.72) 48%, rgba(243,233,220,0.94) 100%)',
        padding: '32px 0 0',
      }}
    >
      <HeroBlobs color={cake.color} />

      <div
        className="container-xl position-relative"
        style={{ zIndex: 1, maxWidth: 1140 }}
      >
        <div className="row align-items-center g-4 hero-grid">
          {/* Text column */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <div className="section-tag mb-2">🏠 Ateliê Doce Lar — Raul Soares, MG</div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 7vw, 60px)',
                fontWeight: 700,
                color: 'var(--dark-brown)',
                lineHeight: 1.15,
                marginBottom: 16,
                letterSpacing: '-0.01em',
              }}
            >
              Bolos caseiros feitos<br />
              <em style={{ fontStyle: 'italic', color: 'var(--caramel)' }}>
                com carinho de família
              </em>
            </h1>
            <p
              className="mx-auto mx-lg-0"
              style={{
                fontSize: 'clamp(15px, 2.5vw, 18px)',
                color: 'var(--text-soft)',
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: 32,
              }}
            >
              Mini bolos e doces artesanais preparados em Raul Soares, MG,
              com receitas caseiras e sabor de lar.
            </p>
          </div>

          {/* Image + selector column */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center gap-3">
            {/* Cake image */}
            <div
              style={{
                position: 'relative',
                width: 'min(320px, 80vw)',
                height: 'min(320px, 80vw)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(253,248,243,0.95) 60%, rgba(243,233,220,0.6) 100%)',
                  boxShadow: `0 20px 60px rgba(94,48,35,0.18), 0 4px 24px ${cake.colorLight}`,
                  transition: 'box-shadow 0.7s ease',
                }}
              />
              <img
                key={imgKey}
                src={cake.image}
                alt={cake.name}
                style={{
                  position: 'absolute',
                  inset: 0,
                  margin: 'auto',
                  width: '88%',
                  height: '88%',
                  objectFit: 'contain',
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? 'translateY(0) scale(1)'
                    : 'translateY(20px) scale(0.95)',
                  transition: 'opacity 0.35s ease, transform 0.35s ease',
                  filter: 'drop-shadow(0 12px 24px rgba(94,48,35,0.22))',
                  zIndex: 2,
                }}
              />
            </div>

            {/* Cake name */}
            <div
              className="text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.3s ease 0.15s, transform 0.3s ease 0.15s',
                minHeight: 70,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'var(--dark-brown)',
                  marginBottom: 4,
                }}
              >
                {cake.name}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: 'var(--text-soft)',
                  maxWidth: 300,
                  lineHeight: 1.5,
                }}
              >
                {cake.short}
              </div>
            </div>

            {/* Thumbnails */}
            <div
              className="d-flex gap-2"
              style={{
                overflowX: 'auto',
                padding: '4px 4px 8px',
                scrollbarWidth: 'none',
                WebkitOverflowScrolling: 'touch',
                maxWidth: '100%',
              }}
            >
              {FEATURED_CAKES.map((c, i) => (
                <button
                  key={c.id}
                  className={`hero-thumb-btn${selected === i ? ' active' : ''}`}
                  onClick={() => selectCake(i)}
                  title={c.name}
                  style={selected === i ? { borderColor: c.color } : {}}
                >
                  <img src={c.image} alt={c.name} />
                </button>
              ))}
            </div>

            {/* CTAs */}
            <div className="d-flex gap-3 flex-wrap justify-content-center mb-4">
              <a href="#cardapio" className="btn-doce btn-doce-primary">
                Ver cardápio
              </a>
              <a
                href={whatsappLink('bolos caseiros')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-doce btn-doce-whatsapp"
              >
                <IconWhatsapp /> Pedir pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <svg
        style={{ display: 'block', marginTop: -2 }}
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0 0 C360 60 1080 60 1440 0 L1440 60 L0 60 Z" fill="var(--cream)" />
      </svg>
    </section>
  );
}
