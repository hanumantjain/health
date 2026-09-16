import { useState } from 'react';
import type { FormEvent } from 'react';
import { WHATSAPP_NUMBER } from '../data/content';

interface IntakeFormState {
  fname: string;
  fcountry: string;
  fcontact: string;
  fprocedure: string;
  fmessage: string;
}

const initialFormState: IntakeFormState = {
  fname: '',
  fcountry: '',
  fcontact: '',
  fprocedure: '',
  fmessage: '',
};

const fieldClass =
  'w-full rounded-[2px] border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.06)] px-[14px] py-[12px] font-sans text-[14.5px] text-white placeholder:text-[#94A69C]';

export function ContactSection() {
  const [form, setForm] = useState<IntakeFormState>(initialFormState);

  const handleChange = (field: keyof IntakeFormState) => (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: event.currentTarget.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = form.fname.trim();
    const country = form.fcountry.trim();
    const contact = form.fcontact.trim();
    const procedure = form.fprocedure.trim();
    const message = form.fmessage.trim();
    const text = `Hello Setu Health, I'd like a medical opinion and cost estimate.%0A%0AName: ${encodeURIComponent(
      name
    )}%0ACountry: ${encodeURIComponent(country)}%0AContact: ${encodeURIComponent(
      contact
    )}%0AProcedure/condition: ${encodeURIComponent(
      procedure
    )}%0ADetails: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="bg-teal py-[78px] text-[#EFEFE8]">
      <div className="wrap">
        <div className="mb-[44px] max-w-[56ch]">
          <span className="mb-[12px] block font-mono text-[12.5px] text-gold">
            GET STARTED
          </span>
          <h2 className="text-[clamp(26px,3.4vw,36px)] text-white">
            Tell us about your case.
          </h2>
          <p className="mt-[14px] text-[16px] text-[#C7D4CC]">
            Share a few details and we'll come back with a medical opinion and cost
            estimate, usually within 48 hours.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[60px] max-[760px]:grid-cols-1">
          <div className="text-[15px]">
            <div className="mb-[22px]">
              <span className="mb-[4px] block font-mono text-[11.5px] text-gold">
                WHATSAPP
              </span>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener"
                className="border-b border-[rgba(255,255,255,0.35)] text-white no-underline"
              >
                +91 98100 00000
              </a>
            </div>
            <div className="mb-[22px]">
              <span className="mb-[4px] block font-mono text-[11.5px] text-gold">
                EMAIL
              </span>
              <a
                href="mailto:care@setuhealth.example"
                className="border-b border-[rgba(255,255,255,0.35)] text-white no-underline"
              >
                care@setuhealth.example
              </a>
            </div>
            <div className="mb-[22px]">
              <span className="mb-[4px] block font-mono text-[11.5px] text-gold">
                OFFICE
              </span>
              [Your office address], New Delhi, India
            </div>
            <div className="mb-[22px]">
              <span className="mb-[4px] block font-mono text-[11.5px] text-gold">
                RESPONSE TIME
              </span>
              Within 24 hours, every day of the week
            </div>
          </div>
          <form
            className="flex flex-col gap-[14px]"
            id="intakeForm"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-[14px] max-[760px]:grid-cols-1">
              <div>
                <label htmlFor="fname" className="mb-[4px] block text-[13px] text-[#C7D4CC]">
                  Full name
                </label>
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  placeholder="Your name"
                  required
                  className={fieldClass}
                  value={form.fname}
                  onChange={handleChange('fname')}
                />
              </div>
              <div>
                <label
                  htmlFor="fcountry"
                  className="mb-[4px] block text-[13px] text-[#C7D4CC]"
                >
                  Country
                </label>
                <input
                  id="fcountry"
                  name="fcountry"
                  type="text"
                  placeholder="Where you're writing from"
                  required
                  className={fieldClass}
                  value={form.fcountry}
                  onChange={handleChange('fcountry')}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[14px] max-[760px]:grid-cols-1">
              <div>
                <label
                  htmlFor="fcontact"
                  className="mb-[4px] block text-[13px] text-[#C7D4CC]"
                >
                  WhatsApp or phone
                </label>
                <input
                  id="fcontact"
                  name="fcontact"
                  type="text"
                  placeholder="With country code"
                  required
                  className={fieldClass}
                  value={form.fcontact}
                  onChange={handleChange('fcontact')}
                />
              </div>
              <div>
                <label
                  htmlFor="fprocedure"
                  className="mb-[4px] block text-[13px] text-[#C7D4CC]"
                >
                  Procedure / condition
                </label>
                <input
                  id="fprocedure"
                  name="fprocedure"
                  type="text"
                  placeholder="e.g. knee replacement"
                  className={fieldClass}
                  value={form.fprocedure}
                  onChange={handleChange('fprocedure')}
                />
              </div>
            </div>
            <label htmlFor="fmessage" className="mb-[4px] block text-[13px] text-[#C7D4CC]">
              Brief case details
            </label>
            <textarea
              id="fmessage"
              name="fmessage"
              placeholder="Symptoms, prior diagnosis, reports you have on hand..."
              className={`${fieldClass} min-h-[90px] resize-y`}
              value={form.fmessage}
              onChange={handleChange('fmessage')}
            />
            <button
              type="submit"
              className="mt-[6px] cursor-pointer rounded-[2px] border-0 bg-gold px-[20px] py-[14px] font-sans text-[15px] font-semibold text-teal hover:bg-[#E8B457]"
            >
              Send my case on WhatsApp
            </button>
            <p className="mt-[4px] text-[12.5px] text-[#94A69C]">
              This opens WhatsApp with your details pre-filled. Nothing is stored
              on this page. Don't send medical reports here; your case manager will
              share a secure upload link.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
