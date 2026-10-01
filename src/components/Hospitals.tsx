import { MaterialIcon } from './icons/MaterialIcon';
import { Link } from 'react-router-dom';
import { HospitalCard } from './HospitalCard';
import { hospitals } from '../data/hospitals';

const FEATURED_COUNT = 8;

// Largest multi-specialty centres first, so the homepage leads with the broadest options.
const featuredHospitals = [...hospitals]
  .filter((hospital) => hospital.multiSpecialty)
  .sort((a, b) => (b.treatmentCount ?? 0) - (a.treatmentCount ?? 0))
  .slice(0, FEATURED_COUNT);

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
          {featuredHospitals.map((hospital) => (
            <HospitalCard hospital={hospital} key={hospital.slug} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/hospitals"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-navy to-brand-cyan-deep px-6 py-3 text-sm font-bold text-white no-underline shadow-md shadow-brand-navy/15 transition-all hover:scale-[1.02] hover:brightness-110"
          >
            View all {hospitals.length} hospitals
            <MaterialIcon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
