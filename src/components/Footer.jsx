import { WHATSAPP } from '../data/products';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--text-dark)', color: 'rgba(253,248,243,0.70)', padding: '48px 20px 32px', fontSize: 14 }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--white)', marginBottom: 6 }}>
          Ateliê Doce Lar
        </div>
        <div style={{ color: 'var(--caramel)', fontSize: 13, marginBottom: 20 }}>
          Feito com carinho para adoçar o seu lar. 🤍
        </div>

        <div className="row g-4 mb-4">
          <div className="col-12 col-sm-6">
            <div style={{ fontWeight: 700, color: 'var(--cream)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
              Contato
            </div>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(253,248,243,0.70)', textDecoration: 'none', display: 'block', marginBottom: 6, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--caramel)'}
              onMouseLeave={e => e.target.style.color = 'rgba(253,248,243,0.70)'}
            >
              📱 WhatsApp
            </a>
            <a href="https://www.instagram.com/atelie.doce.lar?igsh=MWltazVyOXpzdXR4aw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(253,248,243,0.70)', textDecoration: 'none', display: 'block', marginBottom: 6, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--caramel)'}
              onMouseLeave={e => e.target.style.color = 'rgba(253,248,243,0.70)'}
            >
              📸 Instagram
            </a>
          </div>
          <div className="col-12 col-sm-6">
            <div style={{ fontWeight: 700, color: 'var(--cream)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
              Localização
            </div>
            <span style={{ display: 'block', marginBottom: 6 }}>📍 Raul Soares, Minas Gerais</span>
            <span style={{ display: 'block', marginBottom: 6 }}>Encomendas sob consulta</span>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(253,248,243,0.1)', marginBottom: 20 }} />
        <div style={{ fontSize: 12, color: 'rgba(253,248,243,0.40)', textAlign: 'center' }}>
          © 2026 Ateliê Doce Lar — Confeitaria familiar, artesanal e caseira.
        </div>
      </div>
    </footer>
  );
}
