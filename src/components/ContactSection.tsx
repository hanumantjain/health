import { useState } from 'react';
import type { FormEvent } from 'react';
import { MaterialIcon } from './icons/MaterialIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  OFFICE_ADDRESS,
  WHATSAPP_NUMBER,
  WHATSAPP_NUMBER_DISPLAY,
} from '../data/content';

interface IntakeFormState {
  name: string;
  country: string;
  phone: string;
  specialty: string;
}

const initialFormState: IntakeFormState = {
  name: '',
  country: '',
  phone: '',
  specialty: '',
};

const countries = [
  'Kenya',
  'Oman',
  'United Arab Emirates',
  'Saudi Arabia',
  'Uzbekistan',
  'Nigeria',
  'Tanzania',
  'United Kingdom',
  'United States',
  'Other',
];

const specialtyOptions = [
  'Cardiology & Cardiac Surgery',
  'Orthopedics & Spine',
  'Oncology (Cancer Care)',
  'Neurosurgery & Brain',
  'Organ Transplant (Liver / Kidney)',
  'Fertility & IVF',
  'Other Specialty',
];

const fieldClass =
  'w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan';
const selectClass =
  'w-full rounded-lg border border-white/20 bg-[#07264E] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan';

export function ContactSection() {
  const [form, setForm] = useState<IntakeFormState>(initialFormState);

  const handleChange =
    (field: keyof IntakeFormState) =>
    (event: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { value } = event.currentTarget;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = encodeURIComponent(
      `Hello ${BRAND_NAME},\n\n*New Patient Case Inquiry:*\n- *Name:* ${form.name}\n- *Country:* ${form.country}\n- *Phone:* ${form.phone}\n- *Specialty:* ${form.specialty}\n\nPlease let me know the process for doctor review, hospital estimate, and flight medical visa.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section
      id="start-case"
      className="relative w-full overflow-hidden bg-gradient-to-br from-brand-navy-dark via-brand-navy to-[#092D5A] py-14 text-white md:py-[5.5rem]"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-cyan/10 blur-3xl" />
      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-white/10 px-3 py-1 text-xs font-bold text-brand-cyan">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" />
                24/7 Rapid Clinical &amp; Flight Triage
              </div>
              <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white lg:text-4xl">
                Tell us about your case.
              </h2>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-300">
                Share a few details along with your recent medical history. Our medical
                officers will coordinate with senior Indian surgical chairs and revert with an
                itemized clinical opinion within 24 to 48 hours.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-cyan/30 bg-white/10 text-brand-cyan">
                    <MaterialIcon name="chat" className="text-[20px]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                      Direct WhatsApp Flight Desk
                    </span>
                    <p className="text-sm font-bold text-white">{WHATSAPP_NUMBER_DISPLAY}</p>
                    <span className="text-xs text-slate-400">
                      Available in English, Arabic, Russian
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-cyan/30 bg-white/10 text-brand-cyan">
                    <MaterialIcon name="mail" className="text-[20px]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                      Clinical File Transfer
                    </span>
                    <p className="text-sm font-bold text-white">{CONTACT_EMAIL}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-cyan/30 bg-white/10 text-brand-cyan">
                    <MaterialIcon name="domain" className="text-[20px]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                      Diplomatic Liaison Office
                    </span>
                    <p className="text-xs text-slate-300">{OFFICE_ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MaterialIcon name="lock" className="text-[16px] text-brand-cyan" />
                <span>
                  All medical reports are processed under strict international
                  doctor-patient confidentiality.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:p-8">
              <h3 className="mb-1 text-xl font-bold text-white">
                Request Surgeon Evaluation &amp; Flight Plan
              </h3>
              <p className="mb-6 text-xs text-slate-300">
                Zero cost · Direct hospital rates · No middleman markups
              </p>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="patientName" className="text-xs font-semibold text-white">
                      Patient Full Name
                    </label>
                    <input
                      id="patientName"
                      type="text"
                      placeholder="Your full name"
                      required
                      className={fieldClass}
                      value={form.name}
                      onChange={handleChange('name')}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="patientCountry" className="text-xs font-semibold text-white">
                      Country of Residence
                    </label>
                    <select
                      id="patientCountry"
                      required
                      className={selectClass}
                      value={form.country}
                      onChange={handleChange('country')}
                    >
                      <option disabled value="">
                        Select country
                      </option>
                      {countries.map((country) => (
                        <option value={country} key={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="patientPhone" className="text-xs font-semibold text-white">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      id="patientPhone"
                      type="tel"
                      placeholder="With country code"
                      required
                      className={fieldClass}
                      value={form.phone}
                      onChange={handleChange('phone')}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="specialtySelect" className="text-xs font-semibold text-white">
                      Medical Specialty
                    </label>
                    <select
                      id="specialtySelect"
                      required
                      className={selectClass}
                      value={form.specialty}
                      onChange={handleChange('specialty')}
                    >
                      <option disabled value="">
                        Select department
                      </option>
                      {specialtyOptions.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan via-brand-cyan-deep to-brand-navy py-4 text-sm font-extrabold text-white shadow-xl shadow-brand-cyan/20 transition-all hover:scale-[1.01] hover:brightness-110"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Send Case &amp; Open WhatsApp Desk
                </button>
                <p className="text-center text-[11px] text-slate-300">
                  This opens WhatsApp with your details pre-filled. Nothing is stored on this
                  page. By submitting, you consent to our medical officers coordinating your
                  case with Indian partner hospital surgical teams.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
