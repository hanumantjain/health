import { useEffect, useRef, useState } from 'react';
import { Logo } from './icons/Logo';
import { MaterialIcon } from './icons/MaterialIcon';
import { navLinks } from '../data/content';

const MOBILE_NAV_QUERY = '(max-width: 1023px)';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_NAV_QUERY);
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches);
      if (!event.matches) setIsOpen(false);
    };
    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isOpen || !isMobile) return;

    const nav = navRef.current;
    const focusable = nav?.querySelectorAll<HTMLElement>('a, button');
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab' || !focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isMobile]);

  const closeMenu = () => setIsOpen(false);
  const isCollapsed = isMobile && !isOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-white/95 shadow-[0_2px_12px_rgba(10,56,113,0.06)] backdrop-blur-xl">
      <div className="flex h-20 w-full items-center justify-between gap-6 px-5 md:px-10 lg:px-12">
        <a href="/#top" className="group flex shrink-0 items-center gap-3 no-underline">
          <Logo
            compactOnMobile
            className="h-10 shrink-0 transition-transform group-hover:scale-[1.03]"
          />
          <span className="hidden flex-col border-l border-border-subtle pl-3 xl:flex">
            <span className="text-xs font-bold leading-tight tracking-tight text-brand-navy">
              Fly to India for
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-cyan-deep">
              World-Class Healthcare
            </span>
          </span>
        </a>

        <nav
          ref={navRef}
          id="navlinks"
          inert={isCollapsed}
          className={`items-center gap-1 rounded-full border border-brand-cyan-light bg-brand-ice/80 p-1 text-xs transition-[max-height,opacity] duration-200 ease-out max-[1023px]:fixed max-[1023px]:inset-x-0 max-[1023px]:top-[80px] max-[1023px]:flex-col max-[1023px]:items-stretch max-[1023px]:gap-2 max-[1023px]:overflow-hidden max-[1023px]:rounded-none max-[1023px]:border-x-0 max-[1023px]:border-t-0 max-[1023px]:bg-white max-[1023px]:px-5 lg:flex ${
            isOpen
              ? 'flex max-[1023px]:max-h-[320px] max-[1023px]:border-b max-[1023px]:border-border-subtle max-[1023px]:py-[18px] max-[1023px]:opacity-100'
              : 'hidden max-[1023px]:max-h-0 max-[1023px]:py-0 max-[1023px]:opacity-0 lg:flex'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-text-muted no-underline transition-all hover:bg-white/60 hover:text-brand-navy max-[1023px]:px-4 max-[1023px]:py-2.5 max-[1023px]:text-sm"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="/#start-case"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-navy to-brand-cyan-deep px-5 py-2.5 text-xs font-bold text-white no-underline shadow-md shadow-brand-navy/15 transition-all hover:scale-[1.02] hover:brightness-110"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            Start Your Case
            <MaterialIcon name="flight_takeoff" className="text-[16px]" />
          </a>
          <button
            ref={toggleRef}
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-brand-cyan-light bg-brand-ice text-brand-navy lg:hidden"
            id="menuToggle"
            aria-expanded={isOpen}
            aria-controls="navlinks"
            onClick={() => setIsOpen((open) => !open)}
          >
            <MaterialIcon name={isOpen ? 'close' : 'menu'} className="text-[18px]" />
          </button>
        </div>
      </div>
    </header>
  );
}
