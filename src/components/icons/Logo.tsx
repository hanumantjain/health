import { BRAND_NAME } from '../../data/content';

interface LogoProps {
  className?: string;
  // Show only the cross-and-plane mark below the `sm` breakpoint, where the full logo is too wide.
  compactOnMobile?: boolean;
}

export function Logo({ className = 'h-10', compactOnMobile = false }: LogoProps) {
  if (!compactOnMobile) {
    return (
      <img
        src="/logo.webp"
        alt={BRAND_NAME}
        width={600}
        height={112}
        className={`w-auto ${className}`}
      />
    );
  }
  return (
    <>
      <img
        src="/logo-mark.webp"
        alt={BRAND_NAME}
        width={147}
        height={80}
        className={`w-auto sm:hidden ${className}`}
      />
      <img
        src="/logo.webp"
        alt={BRAND_NAME}
        width={600}
        height={112}
        className={`hidden w-auto sm:block ${className}`}
      />
    </>
  );
}
