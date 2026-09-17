interface RouteGraphicProps {
  className?: string;
}

export function RouteGraphic({ className }: RouteGraphicProps) {
  return (
    <svg className={className} viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M 40 90 Q 200 10 360 90" fill="none" stroke="#CBD5E1" strokeDasharray="6 6" strokeWidth="2" />
      <path d="M 40 90 Q 200 10 260 42" fill="none" stroke="#00AEEF" strokeWidth="3" />
      <g transform="translate(254, 38) rotate(22)">
        <circle cx="0" cy="0" r="15" fill="#0A3871" />
        <path
          d="M-5 -2 L4 -2 L6 -6 L8 -6 L6 -2 L10 -2 L11 -4 L13 -4 L12 0 L13 4 L11 4 L10 2 L6 2 L8 6 L6 6 L4 2 L-5 2 Z"
          fill="#00AEEF"
          transform="scale(0.85) translate(-4, 0)"
        />
      </g>
      <circle cx="40" cy="90" r="7" fill="#0A3871" />
      <circle cx="40" cy="90" r="13" stroke="#00AEEF" strokeOpacity="0.4" strokeWidth="2.5" />
      <circle cx="360" cy="90" r="7" fill="#00AEEF" />
      <circle cx="360" cy="90" r="13" stroke="#0A3871" strokeOpacity="0.3" strokeWidth="2.5" />
    </svg>
  );
}
