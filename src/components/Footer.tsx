import { Link } from 'react-router-dom';
import { LogoMark } from './icons/LogoMark';
import { MaterialIcon } from './icons/MaterialIcon';
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  OFFICE_ADDRESS,
  WHATSAPP_NUMBER_DISPLAY,
  footerConciergeLinks,
  footerLegalLinks,
  footerSpecialtyLinks,
} from '../data/content';

export function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle bg-white text-text-body shadow-sm">
      <div className="wrap pt-14 pb-8 md:pt-[3.5rem]">
        <div className="grid grid-cols-1 gap-8 pb-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-3 lg:col-span-4">
            <a href="/#top" className="flex items-center gap-2 no-underline">
              <LogoMark className="h-10 w-10" />
              <span className="text-base font-extrabold text-brand-navy">{BRAND_NAME}</span>
            </a>
            <p className="text-xs leading-relaxed text-text-muted">
              Fly to India for world-class healthcare. Facilitating dignified international
              patient care connecting individuals across the GCC, Central Asia, and Africa
              with India's foremost JCI and NABH accredited quaternary medical centers.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan-light bg-brand-ice px-2.5 py-1 text-xs font-bold text-brand-navy">
                <MaterialIcon name="verified" className="text-[14px] text-brand-cyan-deep" />
                JCI Partner Network
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-cyan-light px-2.5 py-1 text-xs font-bold text-brand-navy">
                <MaterialIcon name="shield" className="text-[14px] text-brand-cyan-deep" />
                NABH Excellence
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:col-span-3">
            <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-navy">
              Clinical Specialties
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-text-muted">
              {footerSpecialtyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand-navy">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2 lg:col-span-2">
            <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-navy">
              Concierge Conduit
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-text-muted">
              {footerConciergeLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand-navy">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2 lg:col-span-3">
            <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-navy">
              24/7 International Desk
            </h4>
            <p className="text-xs text-text-muted">
              Dedicated medical officers on call. Guaranteed response time within 4 hours for
              clinical files.
            </p>
            <div className="flex flex-col gap-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-brand-navy">
                <MaterialIcon name="call" className="text-[16px] text-brand-cyan-deep" />
                {WHATSAPP_NUMBER_DISPLAY} (Direct / WhatsApp)
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <MaterialIcon name="mail" className="text-[16px] text-brand-cyan-deep" />
                {CONTACT_EMAIL}
              </div>
              <div className="flex items-start gap-2 text-text-muted">
                <MaterialIcon name="location_on" className="mt-0.5 text-[16px] text-brand-cyan-deep" />
                {OFFICE_ADDRESS}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-6 text-xs text-text-muted md:flex-row">
          <p className="max-w-2xl text-[11px] leading-relaxed">
            <strong>Clinical Disclaimer:</strong> {BRAND_NAME} is an accredited medical
            concierge and patient navigation organization. Medical advice and surgical
            procedures are rendered exclusively by credentialed partner hospitals and
            attending surgeons. Accreditation claims refer to institutional hospital statuses
            (JCI, NABH, ISO).
          </p>
          <div className="flex shrink-0 items-center gap-6 text-[11px]">
            {footerLegalLinks.map((link) => (
              <Link key={link.href} to={link.href} className="transition-colors hover:text-brand-navy">
                {link.label}
              </Link>
            ))}
            <span>© 2026 {BRAND_NAME}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
