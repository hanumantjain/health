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
      <path
        d="M4 26C4 26 12 14 20 14C28 14 36 26 36 26"
        stroke="#12332E"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="4" cy="26" r="3" fill="#D9A23B" />
      <circle cx="36" cy="26" r="3" fill="#12332E" />
    </svg>
  );
}
