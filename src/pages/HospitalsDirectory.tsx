import { useEffect, useMemo, useState } from 'react';
import { HospitalCard } from '../components/HospitalCard';
import { MaterialIcon } from '../components/icons/MaterialIcon';
import { BRAND_NAME } from '../data/content';
import { hospitals } from '../data/hospitals';

const fieldClass =
  'w-full rounded-lg border border-border-subtle bg-white px-4 py-3 text-sm text-text-body placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-cyan';

const byLabel = (a: string, b: string) => a.localeCompare(b);
const cities = [...new Set(hospitals.map((hospital) => hospital.city))].sort(byLabel);
const specialties = [...new Set(hospitals.flatMap((hospital) => hospital.specialties))].sort(
  byLabel
);

export function HospitalsDirectory() {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('');
  const [specialty, setSpecialty] = useState('');

  useEffect(() => {
    document.title = `Partner Hospitals in India · ${BRAND_NAME}`;
  }, []);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return hospitals.filter(
      (hospital) =>
        (!city || hospital.city === city) &&
        (!specialty || hospital.specialties.includes(specialty)) &&
        (!term ||
          hospital.name.toLowerCase().includes(term) ||
          hospital.city.toLowerCase().includes(term) ||
          hospital.address.toLowerCase().includes(term))
    );
  }, [query, city, specialty]);

  const hasFilters = Boolean(query || city || specialty);

  const resetFilters = () => {
    setQuery('');
    setCity('');
    setSpecialty('');
  };

  return (
    <main className="w-full bg-brand-ice/40 py-14 md:py-[5.5rem]">
      <div className="wrap">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-2">
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan-deep">
              <span className="h-2 w-2 rounded-full bg-brand-cyan" />
              Hospital Directory
            </span>
            <h1 className="text-2xl font-extrabold text-brand-navy md:text-3xl">
              Partner hospitals across India.
            </h1>
            <p className="text-sm text-text-muted">
              Browse {hospitals.length} hospitals in {cities.length} cities. Filter by city or
              specialty to find the right centre for your treatment.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan-light px-3 py-1.5 text-xs font-bold text-brand-navy">
              <MaterialIcon name="local_hospital" className="text-[16px] text-brand-cyan-deep" />
              {results.length} of {hospitals.length} shown
            </span>
          </div>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 rounded-2xl border border-border-subtle bg-white p-5 shadow-sm md:grid-cols-[2fr_1fr_1fr_auto] md:items-end">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="hospitalSearch" className="text-xs font-semibold text-brand-navy">
              Search
            </label>
            <input
              id="hospitalSearch"
              type="search"
              placeholder="Hospital name, city or area"
              className={fieldClass}
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="hospitalCity" className="text-xs font-semibold text-brand-navy">
              City
            </label>
            <select
              id="hospitalCity"
              className={fieldClass}
              value={city}
              onChange={(event) => setCity(event.currentTarget.value)}
            >
              <option value="">All cities</option>
              {cities.map((name) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="hospitalSpecialty" className="text-xs font-semibold text-brand-navy">
              Specialty
            </label>
            <select
              id="hospitalSpecialty"
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
            {results.map((hospital) => (
              <HospitalCard hospital={hospital} key={hospital.slug} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border-subtle bg-white px-6 py-14 text-center shadow-sm">
            <MaterialIcon name="search_off" className="text-[40px] text-brand-cyan-deep" />
            <p className="text-sm text-text-muted">No hospitals match these filters.</p>
            <button
              type="button"
              className="cursor-pointer text-xs font-bold text-brand-cyan-deep underline"
              onClick={resetFilters}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
