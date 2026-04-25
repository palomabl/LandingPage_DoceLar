import ColorBends from './ColorBends';

export default function AboutSection() {
  return (
    <section className="about-section">
      {/* WebGL animated background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >

        <ColorBends
          colors={["#5E3023", "#3A1F12"]}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent
          autoRotate={0}
          color="#A855F7"
        />
      </div>

      {/* Dark overlay para garantir legibilidade do texto */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(58, 31, 18, 0.52)',
          zIndex: 1,
        }}
      />

      <div
        className="text-center position-relative"
        style={{ maxWidth: 760, margin: '0 auto', zIndex: 2 }}
      >
        <div
          style={{
            color: 'var(--caramel)',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Nossa história
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: 700,
            lineHeight: 1.25,
            marginBottom: 20,
            color: 'var(--white)',
          }}
        >
          Um ateliê feito de afeto,<br />sabor e tradição
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: 'rgba(253,248,243,0.85)',
            maxWidth: 600,
            margin: '0 auto 32px',
          }}
        >
          O Ateliê Doce Lar nasceu em Raul Soares, Minas Gerais, a partir do carinho de uma família apaixonada por bolos caseiros, mini bolos e doces artesanais. Cada receita é preparada com cuidado, ingredientes selecionados e aquele toque especial de quem faz tudo com amor.
        </p>
        <a
          href="#cardapio"
          className="btn-doce btn-doce-primary"
          style={{ background: 'var(--caramel)', boxShadow: '0 4px 20px rgba(192,133,82,0.40)' }}
        >
          Conhecer nossos bolos
        </a>
      </div>
    </section>
  );
}
