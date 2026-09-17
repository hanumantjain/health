import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../data/content';

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-xs font-bold text-white no-underline shadow-2xl"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp Desk
        </a>
      </div>
    </>
  );
}
