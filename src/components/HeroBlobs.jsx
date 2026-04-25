export default function HeroBlobs({ color }) {
  return (
    <svg
      className="hero-blobs"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.7,
        transform: 'translateZ(0)',
      }}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="blur-soft-a" x="-35%" y="-35%" width="170%" height="170%">
          <feGaussianBlur stdDeviation="52" edgeMode="duplicate" />
        </filter>
        <filter id="blur-soft-b" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="58" edgeMode="duplicate" />
        </filter>
      </defs>
      <ellipse
        cx="150"
        cy="135"
        rx="230"
        ry="170"
        fill={color}
        opacity="0.62"
        filter="url(#blur-soft-a)"
        style={{ transition: 'fill 0.9s ease, opacity 0.9s ease' }}
      />
      <ellipse
        cx="690"
        cy="90"
        rx="220"
        ry="160"
        fill={color}
        opacity="0.56"
        filter="url(#blur-soft-b)"
        style={{ transition: 'fill 0.9s ease, opacity 0.9s ease' }}
      />
      <ellipse
        cx="665"
        cy="490"
        rx="255"
        ry="185"
        fill={color}
        opacity="0.46"
        filter="url(#blur-soft-b)"
        style={{ transition: 'fill 0.9s ease, opacity 0.9s ease' }}
      />
      <ellipse
        cx="90"
        cy="510"
        rx="190"
        ry="140"
        fill={color}
        opacity="0.5"
        filter="url(#blur-soft-a)"
        style={{ transition: 'fill 0.9s ease, opacity 0.9s ease' }}
      />
      <ellipse
        cx="400"
        cy="590"
        rx="300"
        ry="105"
        fill={color}
        opacity="0.36"
        filter="url(#blur-soft-b)"
        style={{ transition: 'fill 0.9s ease, opacity 0.9s ease' }}
      />
    </svg>
  );
}
