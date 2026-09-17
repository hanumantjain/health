import { MaterialIcon } from './icons/MaterialIcon';
import { hospitalPartners } from '../data/content';

export function Hospitals() {
  return (
    <section
      id="accredited-hospitals"
      className="w-full border-t border-border-subtle bg-brand-ice/40 py-14 md:py-[5.5rem]"
    >
      <div className="wrap">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-2">
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan-deep">
              <span className="h-2 w-2 rounded-full bg-brand-cyan" />
              Institutional Excellence
            </span>
            <h2 className="text-2xl font-extrabold text-brand-navy md:text-3xl">
              Accredited hospitals, world-class surgical chairs.
            </h2>
            <p className="text-sm text-text-muted">
              We operate exclusively with quaternary medical institutes meeting rigorous
              international JCI (Joint Commission International) standards and NABH gold
              benchmarks.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan-light px-3 py-1.5 text-xs font-bold text-brand-navy">
              <MaterialIcon name="verified" className="text-[16px] text-brand-cyan-deep" />
              100% JCI / NABH Inspected
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {hospitalPartners.map((hospital) => (
            <div
              className="flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-sm transition-all hover:border-brand-cyan/40 hover:shadow-lg"
              key={hospital.name}
            >
              <div className="relative flex h-44 w-full items-center justify-center bg-gradient-to-br from-brand-navy to-brand-cyan-deep">
                <MaterialIcon name={hospital.icon} className="text-[52px] text-white/25" />
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-brand-cyan-light bg-white/95 px-2.5 py-0.5 text-xs font-bold text-brand-navy shadow-sm backdrop-blur-md">
                  <MaterialIcon name="shield" className="text-[13px] text-brand-cyan-deep" />
                  JCI &bull; NABH
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan-deep">
                    {hospital.location}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-brand-navy">{hospital.name}</h3>
                  <p className="mt-2 text-xs text-text-muted">{hospital.description}</p>
                </div>
                <div className="-mx-6 -mb-6 mt-4 flex items-center justify-between border-t border-brand-cyan-light/40 bg-brand-ice px-6 py-3 pt-3 text-xs text-text-muted">
                  <span className="font-medium">{hospital.beds}</span>
                  <span className="font-medium text-brand-cyan-deep">{hospital.desk}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
