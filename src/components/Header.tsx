import { useEffect, useRef, useState } from 'react';
import { LogoMark } from './icons/LogoMark';
import { navLinks } from '../data/content';

const MOBILE_NAV_QUERY = '(max-width: 820px)';

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
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(242,245,240,0.92)] backdrop-blur-[6px]">
      <div className="wrap flex items-center justify-between py-[18px]">
        <a
          href="/#top"
          className="flex items-center gap-[10px] font-serif text-[21px] font-semibold text-teal no-underline"
        >
          <LogoMark className="h-[30px] w-[30px] shrink-0" />
          Setu Health
        </a>
        <nav
          ref={navRef}
          id="navlinks"
          inert={isCollapsed}
          className={`flex items-center gap-[30px] text-[14.5px] transition-[max-height,opacity] duration-200 ease-out max-[820px]:fixed max-[820px]:inset-x-0 max-[820px]:top-[64px] max-[820px]:flex-col max-[820px]:items-start max-[820px]:gap-[18px] max-[820px]:overflow-hidden max-[820px]:border-b max-[820px]:border-line max-[820px]:bg-bg max-[820px]:px-[28px] ${
            isOpen
              ? 'max-[820px]:max-h-[420px] max-[820px]:pt-[20px] max-[820px]:pb-[26px] max-[820px]:opacity-100'
              : 'max-[820px]:max-h-0 max-[820px]:pt-0 max-[820px]:pb-0 max-[820px]:opacity-0'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.isCta
                  ? 'rounded-[2px] bg-teal px-[18px] py-[10px] font-medium text-white no-underline hover:bg-teal-light'
                  : 'text-ink no-underline hover:text-teal-light'
              }
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          ref={toggleRef}
          className="hidden cursor-pointer rounded-[2px] border border-teal bg-transparent px-[12px] py-[8px] font-sans text-[13px] text-teal max-[820px]:block"
          id="menuToggle"
          aria-expanded={isOpen}
          aria-controls="navlinks"
          onClick={() => setIsOpen((open) => !open)}
        >
          Menu
        </button>
      </div>
    </header>
  );
}
