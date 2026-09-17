interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="19" fill="#0A3871" />
      <path
        d="M20 10L20 30M11 20L29 20"
        stroke="white"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="30" cy="10" r="5.5" fill="#00AEEF" stroke="#0A3871" strokeWidth="1.5" />
    </svg>
  );
}
