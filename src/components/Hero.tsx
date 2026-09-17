import { RouteGraphic } from './icons/RouteGraphic';
import { MaterialIcon } from './icons/MaterialIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { BRAND_NAME, WHATSAPP_NUMBER, heroTrustBadges } from '../data/content';

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[360px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-cyan/15 via-brand-cyan-light/30 to-transparent blur-3xl" />
      <section className="wrap relative pt-8 pb-14 md:pt-14 md:pb-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col items-start gap-5 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-cyan-light bg-brand-ice px-3.5 py-1.5 text-brand-navy shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan-deep">
                Medical Travel Facilitation · Global to India
              </span>
            </div>

            <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-brand-navy sm:text-4xl lg:text-[50px]">
              Fly to India for <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-navy via-brand-cyan-deep to-brand-cyan bg-clip-text text-transparent">
                World-Class Healthcare
              </span>
              .
            </h1>

            <p className="max-w-xl text-base font-normal leading-relaxed text-text-body md:text-lg">
              <strong>{BRAND_NAME}</strong> connects international patients with premier
              JCI-accredited medical towers and surgical chairs across India. We coordinate
              your medical visa, direct flight concierge, airport private transfer, hospital
              admission, and post-flight recovery.
            </p>

            <div className="flex w-full flex-wrap items-center gap-3.5 pt-2 sm:w-auto">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20${encodeURIComponent(
                  BRAND_NAME
                )},%20I%20would%20like%20a%20free%20medical%20opinion%20and%20flight%20care%20plan.`}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white no-underline shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] hover:bg-[#20ba59]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </a>
              <a
                href="/#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-6 py-3.5 text-sm font-bold text-brand-navy no-underline shadow-sm transition-all hover:border-brand-cyan hover:bg-brand-ice"
              >
                4-Step Flight & Care Pathway
                <MaterialIcon name="flight_takeoff" className="text-[18px] text-brand-cyan-deep" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 text-text-muted">
              {heroTrustBadges.map((badge, index) => (
                <div className="flex items-center gap-4" key={badge.label}>
                  {index > 0 && <span className="text-border-strong">•</span>}
                  <div className="flex items-center gap-1.5">
                    <MaterialIcon name={badge.icon} className="text-[18px] text-brand-cyan-deep" />
                    <span className="text-xs font-semibold text-text-body">{badge.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-brand-cyan-light bg-white p-6 shadow-lg shadow-brand-navy/5 md:p-7">
              <div className="flex items-center justify-between pb-4">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-navy">
                  <MaterialIcon name="connecting_airports" className="text-[16px] text-brand-cyan" />
                  Flight Care Conduit
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-brand-cyan-light bg-brand-ice px-2.5 py-0.5 text-xs font-bold text-brand-cyan-deep">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" />
                  Active Route
                </span>
              </div>

              <div className="relative my-2 py-4">
                <RouteGraphic className="h-auto w-full" />
                <div className="mt-1 flex items-start justify-between px-2">
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-brand-navy md:text-sm">
                      Your Home Country
                    </span>
                    <span className="text-xs text-text-muted">Direct medical review</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-xs font-bold text-brand-cyan-deep md:text-sm">
                      New Delhi / NCR, India
                    </span>
                    <span className="text-xs text-text-muted">Admission &amp; Treatment</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-brand-cyan-light/70 bg-brand-ice p-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-cyan-light bg-white text-brand-cyan-deep shadow-sm">
                  <MaterialIcon name="airline_seat_recline_extra" className="text-[20px]" />
                </div>
                <p className="text-xs text-text-body">
                  <strong>Personal Flight Case Manager:</strong> Welcomes you at the Delhi
                  airport terminal gate with private ambulance or chauffeur straight to
                  hospital suite.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl border border-brand-cyan-light/60 bg-gradient-to-r from-brand-ice to-white p-5 shadow-sm">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-extrabold text-white shadow-sm ring-2 ring-brand-cyan-light">
                  SC
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-navy">Chaired Surgical Review</span>
                  <span className="text-xs text-text-muted">1,200+ super-specialist heads</span>
                </div>
              </div>
              <div className="rounded-full border border-brand-cyan/20 bg-brand-cyan-light px-3 py-1 text-xs font-bold text-brand-navy">
                JCI &amp; NABH Verified
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
