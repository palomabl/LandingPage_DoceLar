import IconWhatsapp from './IconWhatsapp';
import { whatsappLink } from '../data/products';

export default function FinalCTA() {
  return (
    <section className="cta-section">
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 5vw, 46px)',
            fontWeight: 700,
            color: 'var(--white)',
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Deu vontade de<br />um bolo caseiro?
        </h2>
        <p
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.88)',
            maxWidth: 480,
            margin: '0 auto 32px',
            lineHeight: 1.7,
          }}
        >
          Escolha seu sabor favorito e fale com a gente pelo WhatsApp. Vamos preparar tudo com muito carinho para você. 🍰
        </p>
        <a
          href={whatsappLink('bolos caseiros')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-doce btn-doce-whatsapp"
          style={{ fontSize: 17, padding: '16px 36px' }}
        >
          <IconWhatsapp /> Pedir agora pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
