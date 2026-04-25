import IconWhatsapp from './IconWhatsapp';
import { whatsappLink } from '../data/products';

export default function Nav() {
  return (
    <nav
      className="sticky-top"
      style={{
        background: 'rgba(243,233,220,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(192,133,82,0.18)',
        height: 64,
        zIndex: 100,
      }}
    >
      <div
        className="d-flex align-items-center justify-content-between h-100"
        style={{ maxWidth: 1140, margin: '0 auto', padding: '0 20px' }}
      >
        <a
          href="#"
          className="d-flex align-items-center gap-2"
          style={{ textDecoration: 'none' }}
        >
          <img
            src="/logo/logo.png"
            alt="Logo Ateliê Doce Lar"
            style={{
              width: 36,
              height: 36,
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
          <div>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 18,
              fontWeight: 700,
              color: 'var(--dark-brown)',
              display: 'block',
              lineHeight: 1.2,
            }}
          >
            Ateliê Doce Lar
          </span>
          <span
            style={{
              display: 'block',
              fontSize: 11,
              fontWeight: 400,
              color: 'var(--text-soft)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-body)',
            }}
          >
            Confeitaria Artesanal
          </span>
          </div>
        </a>

        <div className="d-flex align-items-center gap-2">
          <a
            href="#cardapio"
            className="btn-doce btn-doce-outline d-none d-sm-inline-flex"
            style={{ padding: '8px 18px', minHeight: 40, fontSize: 14 }}
          >
            Cardápio
          </a>
          <a
            href={whatsappLink('bolos caseiros')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-doce btn-doce-whatsapp"
            style={{ padding: '10px 18px', minHeight: 40, fontSize: 14 }}
          >
            <IconWhatsapp />
            <span className="d-none d-sm-inline">Pedir</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
