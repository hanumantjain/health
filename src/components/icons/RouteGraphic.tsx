import type { CSSProperties } from 'react';

const waypointLabelStyle: CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '12px',
  fill: 'var(--color-teal)',
};

const subLabelStyle: CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '11px',
  fill: 'var(--color-muted)',
};

interface RouteGraphicProps {
  className?: string;
}

export function RouteGraphic({ className }: RouteGraphicProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M30 170 C 140 40, 340 40, 450 170"
        fill="none"
        stroke="#C6D0C2"
        strokeWidth="2"
        strokeDasharray="6 7"
      />
      <circle cx="30" cy="170" r="5" fill="#12332E" />
      <text x="10" y="196" style={waypointLabelStyle}>
        YOUR CITY
      </text>
      <text x="14" y="212" style={subLabelStyle}>
        Case shared online
      </text>
      <circle cx="450" cy="170" r="5" fill="#D9A23B" />
      <text x="372" y="196" style={waypointLabelStyle}>
        NEW DELHI
      </text>
      <text x="378" y="212" style={subLabelStyle}>
        Treated &amp; discharged
      </text>
      <g transform="translate(232,45) rotate(20)">
        <path d="M0 8 L20 0 L0 -8 L4 0 Z" fill="#B85C3E" />
      </g>
    </svg>
  );
}
