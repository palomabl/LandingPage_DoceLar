const ITEMS = [
  { icon: '🏡', title: 'Receitas caseiras', text: 'Sabores preparados com aquele cuidado que lembra casa.' },
  { icon: '🤲', title: 'Produção artesanal', text: 'Cada bolo é feito com atenção aos detalhes e toque manual.' },
  { icon: '👨‍👩‍👧', title: 'Feito por família', text: 'Uma confeitaria criada com amor, dedicação e carinho familiar.' },
  { icon: '✨', title: 'Bolos fresquinhos', text: 'Delícias preparadas para chegar até você com sabor e qualidade.' },
];

export default function DifferentialsSection() {
  return (
    <section style={{ background: 'var(--cream)', padding: '72px 0' }}>
      <div className="container-xl" style={{ maxWidth: 1140 }}>
        <div className="section-tag">Por que escolher o Ateliê</div>
        <h2 className="section-title">
          Feito diferente,<br />feito com amor
        </h2>
        <div className="row row-cols-2 row-cols-md-4 g-3 g-md-4 mt-2">
          {ITEMS.map((item, i) => (
            <div key={i} className="col">
              <div className="diff-card fade-up h-100" style={{ animationDelay: `${i * 0.1}s` }}>
                <span style={{ fontSize: 28, marginBottom: 12, display: 'block' }}>{item.icon}</span>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'var(--dark-brown)',
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.6 }}>
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
