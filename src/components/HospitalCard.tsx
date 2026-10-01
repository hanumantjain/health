import { MaterialIcon } from './icons/MaterialIcon';
import type { Hospital } from '../data/hospitals';

const specialtyIcons: Record<string, string> = {
  Cardiology: 'cardiology',
  Oncology: 'oncology',
  Orthopedics: 'orthopedics',
  Neurology: 'neurology',
  Neurosurgery: 'neurology',
  Nephrology: 'nephrology',
  Gastroenterology: 'gastroenterology',
  Gynecology: 'female',
  'IVF & Fertility': 'pregnant_woman',
  Ophthalmology: 'ophthalmology',
  Dermatology: 'dermatology',
  Dentistry: 'dentistry',
  'Ear, Nose and Throat (ENT)': 'hearing',
  Urology: 'urology',
};

function hospitalIcon(hospital: Hospital) {
  for (const specialty of hospital.specialties) {
    if (specialtyIcons[specialty]) return specialtyIcons[specialty];
  }
  return 'local_hospital';
}

function specialtySummary(specialties: string[]) {
  const shown = specialties.slice(0, 4).join(', ');
  const remaining = specialties.length - 4;
  return remaining > 0 ? `${shown} +${remaining} more` : shown;
}

export function HospitalCard({ hospital }: { hospital: Hospital }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-sm transition-all hover:border-brand-cyan/40 hover:shadow-lg">
      <div className="relative flex h-44 w-full items-center justify-center bg-gradient-to-br from-brand-navy to-brand-cyan-deep">
        {hospital.image ? (
          <img
            src={hospital.image}
            alt={hospital.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <MaterialIcon name={hospitalIcon(hospital)} className="text-[52px] text-white/25" />
        )}
        {hospital.established && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-brand-cyan-light bg-white/95 px-2.5 py-0.5 text-xs font-bold text-brand-navy shadow-sm backdrop-blur-md">
            <MaterialIcon name="shield" className="text-[13px] text-brand-cyan-deep" />
            Est. {hospital.established}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan-deep">
            {hospital.city}
          </span>
          <h3 className="mt-1 text-base font-bold text-brand-navy">{hospital.name}</h3>
          <p className="mt-2 text-xs text-text-muted">{specialtySummary(hospital.specialties)}</p>
        </div>
        <div className="-mx-6 -mb-6 mt-4 flex items-center justify-between border-t border-brand-cyan-light/40 bg-brand-ice px-6 py-3 pt-3 text-xs text-text-muted">
          <span className="font-medium">
            {hospital.multiSpecialty ? 'Multi-Specialty' : 'Single Specialty'}
          </span>
          <span className="font-medium text-brand-cyan-deep">
            {hospital.treatmentCount
              ? `${hospital.treatmentCount} Treatments`
              : `${hospital.specialties.length} Specialties`}
          </span>
        </div>
      </div>
    </div>
  );
}
