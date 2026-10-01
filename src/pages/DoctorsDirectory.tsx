import { useEffect, useMemo, useState } from 'react';
import { DoctorCard } from '../components/DoctorCard';
import { MaterialIcon } from '../components/icons/MaterialIcon';
import { BRAND_NAME, WHATSAPP_NUMBER } from '../data/content';
import { doctors } from '../data/doctors';
import { hospitals } from '../data/hospitals';

const fieldClass =
  'w-full rounded-lg border border-border-subtle bg-white px-4 py-3 text-sm text-text-body placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-cyan';

const byLabel = (a: string, b: string) => a.localeCompare(b);
const specialties = [...new Set(doctors.map((doctor) => doctor.specialty))].sort(byLabel);
const doctorHospitals = hospitals.filter((hospital) =>
  doctors.some((doctor) => doctor.hospitalSlug === hospital.slug),
);

export function DoctorsDirectory() {
  const [query, setQuery] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [hospitalSlug, setHospitalSlug] = useState('');

  useEffect(() => {
    document.title = `Doctors in India · ${BRAND_NAME}`;
  }, []);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return doctors.filter(
      (doctor) =>
        (!specialty || doctor.specialty === specialty) &&
        (!hospitalSlug || doctor.hospitalSlug === hospitalSlug) &&
        (!term ||
          doctor.name.toLowerCase().includes(term) ||
          doctor.specialty.toLowerCase().includes(term)),
    );
  }, [query, specialty, hospitalSlug]);

  const hasFilters = Boolean(query || specialty || hospitalSlug);

  const resetFilters = () => {
    setQuery('');
    setSpecialty('');
    setHospitalSlug('');
  };

  return (
    <main className="w-full bg-brand-ice/40 py-14 md:py-[5.5rem]">
      <div className="wrap">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-2">
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan-deep">
              <span className="h-2 w-2 rounded-full bg-brand-cyan" />
              Doctor Directory
            </span>
            <h1 className="text-2xl font-extrabold text-brand-navy md:text-3xl">
              Senior specialists at India's leading hospitals.
            </h1>
            <p className="text-sm text-text-muted">
              Find a specialist by name, treatment area or hospital. Our care team can arrange a
              remote opinion before you travel.
            </p>
          </div>
          {doctors.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan-light px-3 py-1.5 text-xs font-bold text-brand-navy">
                <MaterialIcon name="stethoscope" className="text-[16px] text-brand-cyan-deep" />
                {results.length} of {doctors.length} shown
              </span>
            </div>
          )}
        </div>

        {doctors.length === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border-subtle bg-white px-6 py-14 text-center shadow-sm">
            <MaterialIcon name="stethoscope" className="text-[40px] text-brand-cyan-deep" />
            <p className="text-base font-bold text-brand-navy">Doctor profiles are coming soon.</p>
            <p className="max-w-md text-sm text-text-muted">
              Tell us your condition and we'll match you with the right specialist at one of our
              partner hospitals.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20${encodeURIComponent(
                BRAND_NAME,
              )},%20I%20would%20like%20help%20finding%20the%20right%20doctor.`}
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-navy to-brand-cyan-deep px-6 py-3 text-sm font-bold text-white no-underline shadow-md shadow-brand-navy/15 transition-all hover:scale-[1.02] hover:brightness-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find me a doctor on WhatsApp
              <MaterialIcon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
        ) : (
          <>
            <div className="mb-10 grid grid-cols-1 gap-4 rounded-2xl border border-border-subtle bg-white p-5 shadow-sm md:grid-cols-[2fr_1fr_1fr_auto] md:items-end">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="doctorSearch" className="text-xs font-semibold text-brand-navy">
                  Search
                </label>
                <input
                  id="doctorSearch"
                  type="search"
                  placeholder="Doctor name or specialty"
                  className={fieldClass}
                  value={query}
                  onChange={(event) => setQuery(event.currentTarget.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="doctorSpecialty" className="text-xs font-semibold text-brand-navy">
                  Specialty
                </label>
                <select
                  id="doctorSpecialty"
                  className={fieldClass}
                  value={specialty}
                  onChange={(event) => setSpecialty(event.currentTarget.value)}
                >
                  <option value="">All specialties</option>
                  {specialties.map((name) => (
                    <option value={name} key={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="doctorHospital" className="text-xs font-semibold text-brand-navy">
                  Hospital
                </label>
                <select
                  id="doctorHospital"
                  className={fieldClass}
                  value={hospitalSlug}
                  onChange={(event) => setHospitalSlug(event.currentTarget.value)}
                >
                  <option value="">All hospitals</option>
                  {doctorHospitals.map((hospital) => (
                    <option value={hospital.slug} key={hospital.slug}>
                      {hospital.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full border border-brand-cyan-light bg-brand-ice px-4 py-3 text-xs font-semibold text-brand-navy transition-all hover:bg-brand-cyan-light/40 disabled:cursor-default disabled:opacity-50"
                onClick={resetFilters}
                disabled={!hasFilters}
              >
                <MaterialIcon name="restart_alt" className="text-[16px]" />
                Reset
              </button>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {results.map((doctor) => (
                  <DoctorCard doctor={doctor} key={doctor.slug} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border-subtle bg-white px-6 py-14 text-center shadow-sm">
                <MaterialIcon name="search_off" className="text-[40px] text-brand-cyan-deep" />
                <p className="text-sm text-text-muted">No doctors match these filters.</p>
                <button
                  type="button"
                  className="cursor-pointer text-xs font-bold text-brand-cyan-deep underline"
                  onClick={resetFilters}
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
