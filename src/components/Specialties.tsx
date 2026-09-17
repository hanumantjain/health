import { MaterialIcon } from './icons/MaterialIcon';
import { specialties } from '../data/content';

export function Specialties() {
  return (
    <section id="medical-specialties" className="w-full border-y border-border-subtle bg-brand-ice/50 py-14 md:py-20">
      <div className="wrap">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-2">
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan-deep">
              <span className="h-2 w-2 rounded-full bg-brand-cyan" />
              Treatment Areas &amp; Packages
            </span>
            <h2 className="text-2xl font-extrabold text-brand-navy md:text-3xl">
              Care across the medical specialties that matter most.
            </h2>
            <p className="text-sm text-text-muted">
              Every case is reviewed directly by a super-specialist surgical chair before you
              board your flight to India. Complete price transparency with zero agency markup.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="/#start-case"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy no-underline decoration-brand-cyan underline-offset-4 transition-colors hover:text-brand-cyan-deep hover:underline"
            >
              Request an unlisted specialty
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => (
            <div
              className="group flex flex-col justify-between rounded-2xl border border-border-subtle bg-white p-7 shadow-sm transition-all hover:border-brand-cyan/40 hover:shadow-lg"
              key={specialty.name}
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-ice text-brand-cyan-deep transition-colors group-hover:bg-brand-cyan group-hover:text-white">
                    <MaterialIcon name={specialty.icon} className="text-[24px]" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-brand-cyan-light px-2.5 py-0.5 text-xs font-bold text-brand-navy">
                    {specialty.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-brand-navy transition-colors group-hover:text-brand-cyan-deep">
                  {specialty.name}
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-text-muted">
                  {specialty.description}
                </p>
              </div>
              <div className="-mx-7 -mb-7 mt-2 flex items-center justify-between rounded-b-2xl border-t border-brand-cyan-light/40 bg-brand-ice px-7 py-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase text-text-muted">
                    Starting Package
                  </span>
                  <span className="text-sm font-bold text-brand-navy">{specialty.priceFrom}</span>
                </div>
                <span
                  className={
                    specialty.compareLabel.startsWith('$')
                      ? 'text-xs text-text-muted line-through'
                      : 'text-xs font-semibold text-brand-cyan-deep'
                  }
                >
                  {specialty.compareLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
