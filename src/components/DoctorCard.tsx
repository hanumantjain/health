import { MaterialIcon } from './icons/MaterialIcon';
import type { Doctor } from '../data/doctors';
import { hospitals } from '../data/hospitals';

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const hospital = hospitals.find((entry) => entry.slug === doctor.hospitalSlug);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-sm transition-all hover:border-brand-cyan/40 hover:shadow-lg">
      <div className="relative flex h-56 w-full items-center justify-center bg-gradient-to-br from-brand-navy to-brand-cyan-deep">
        {doctor.image ? (
          <img
            src={doctor.image}
            alt={doctor.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : (
          <MaterialIcon name="stethoscope" className="text-[52px] text-white/25" />
        )}
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-brand-cyan-light bg-white/95 px-2.5 py-0.5 text-xs font-bold text-brand-navy shadow-sm backdrop-blur-md">
          <MaterialIcon name="workspace_premium" className="text-[13px] text-brand-cyan-deep" />
          {doctor.experienceYears}+ yrs
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan-deep">
            {doctor.specialty}
          </span>
          <h3 className="mt-1 text-base font-bold text-brand-navy">{doctor.name}</h3>
          <p className="mt-1 text-xs font-medium text-text-body">{doctor.designation}</p>
          <p className="mt-2 text-xs text-text-muted">{doctor.qualifications}</p>
        </div>
        <div className="-mx-6 -mb-6 mt-4 flex items-center gap-1.5 border-t border-brand-cyan-light/40 bg-brand-ice px-6 py-3 text-xs font-medium text-text-muted">
          <MaterialIcon name="local_hospital" className="text-[14px] text-brand-cyan-deep" />
          {hospital ? `${hospital.name}, ${hospital.city}` : 'Partner hospital'}
        </div>
      </div>
    </div>
  );
}
