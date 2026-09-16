export const WHATSAPP_NUMBER = '919810000000';

export interface NavLink {
  href: string;
  label: string;
  isCta?: boolean;
}

export const navLinks: NavLink[] = [
  { href: '/#specialties', label: 'Treatments' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#hospitals', label: 'Hospitals' },
  { href: '/#services', label: "What's included" },
  { href: '/#contact', label: 'Start your case', isCta: true },
];

export interface TrustStat {
  value: string;
  label: string;
}

export const trustStats: TrustStat[] = [
  { value: '[ ]', label: 'Partner hospitals' },
  { value: '[ ]', label: 'Specialist doctors' },
  { value: '[ ]', label: 'Patients assisted' },
  { value: '48 hrs', label: 'Typical time to first cost estimate' },
];

export interface Specialty {
  name: string;
  description: string;
  priceFrom: string;
}

export const specialties: Specialty[] = [
  {
    name: 'Cardiology & Cardiac Surgery',
    description:
      'Bypass surgery, valve replacement, angioplasty and pediatric cardiac care.',
    priceFrom: 'From [$ ]',
  },
  {
    name: 'Orthopedics',
    description:
      'Knee and hip replacement, spine surgery, sports injury repair.',
    priceFrom: 'From [$ ]',
  },
  {
    name: 'Oncology',
    description:
      'Surgical, medical and radiation oncology across cancer types.',
    priceFrom: 'From [$ ]',
  },
  {
    name: 'Neurosurgery',
    description:
      'Brain tumor surgery, spine neurosurgery, minimally invasive procedures.',
    priceFrom: 'From [$ ]',
  },
  {
    name: 'Organ Transplant',
    description:
      'Liver, kidney and bone marrow transplant, including live-donor cases.',
    priceFrom: 'From [$ ]',
  },
  {
    name: 'Fertility & IVF',
    description: 'Fertility assessment, IVF/ICSI cycles, and reproductive surgery.',
    priceFrom: 'From [$ ]',
  },
];

export interface JourneyStep {
  stepNo: string;
  title: string;
  description: string;
}

export const journeySteps: JourneyStep[] = [
  {
    stepNo: '01',
    title: 'Share your case',
    description:
      'Send your reports and history over WhatsApp or the form below. No cost, no obligation.',
  },
  {
    stepNo: '02',
    title: 'Get your medical opinion',
    description:
      'A specialist reviews your case and you receive a treatment plan and cost estimate, typically within 48 hours.',
  },
  {
    stepNo: '03',
    title: 'Travel & treatment',
    description:
      'We arrange your visa invitation, airport pickup and stay. You focus on your treatment.',
  },
  {
    stepNo: '04',
    title: 'Recovery & follow-up',
    description:
      "We stay in touch after you're home: reports, medicine delivery, and follow-up consultations.",
  },
];

export interface HospitalPartner {
  name: string;
  meta: string;
}

export const hospitalPartners: HospitalPartner[] = [
  { name: '[Hospital Partner Name]', meta: '[City] · [NABH / JCI accreditation] · [Specialty focus]' },
  { name: '[Hospital Partner Name]', meta: '[City] · [NABH / JCI accreditation] · [Specialty focus]' },
  { name: '[Hospital Partner Name]', meta: '[City] · [NABH / JCI accreditation] · [Specialty focus]' },
];

export interface ServiceItem {
  name: string;
  fee: string;
}

export const serviceItems: ServiceItem[] = [
  { name: 'Medical opinion & cost estimate', fee: 'No charge' },
  { name: 'Visa invitation letter support', fee: 'No charge' },
  { name: 'Airport pickup & drop-off', fee: 'No charge' },
  { name: 'Accommodation recommendations', fee: 'No charge' },
  { name: 'Interpreter arrangement', fee: 'May vary by language' },
  { name: 'Dedicated case manager', fee: 'No charge' },
  { name: 'Local SIM card on arrival', fee: 'No charge' },
  { name: 'Post-treatment follow-up', fee: 'No charge' },
];

export interface Testimonial {
  quote: string;
  who: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: '[Placeholder: insert a real, consented patient quote here.]',
    who: '[Patient name/initials], [Country] · [Procedure]',
  },
  {
    quote: '[Placeholder: insert a real, consented patient quote here.]',
    who: '[Patient name/initials], [Country] · [Procedure]',
  },
  {
    quote: '[Placeholder: insert a real, consented patient quote here.]',
    who: '[Patient name/initials], [Country] · [Procedure]',
  },
];

export interface FooterLink {
  href: string;
  label: string;
}

export const footerExploreLinks: FooterLink[] = [
  { href: '/#specialties', label: 'Treatments' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#hospitals', label: 'Hospital network' },
  { href: '/#contact', label: 'Contact' },
];

export const footerLegalLinks: FooterLink[] = [
  { href: '/privacy-policy', label: 'Privacy policy' },
  { href: '/terms-of-use', label: 'Terms of use' },
  { href: '/data-handling-notice', label: 'Data handling notice' },
];

export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalPageContent {
  title: string;
  intro: string;
  sections: LegalSection[];
}

export const LEGAL_PLACEHOLDER_NOTICE =
  'This page is a structural placeholder, not a binding legal document. Replace every bracketed item with counsel-reviewed text before this site goes live, and before any patient data is collected.';

export const privacyPolicyContent: LegalPageContent = {
  title: 'Privacy Policy',
  intro:
    'How Setu Health collects, uses, and shares information from patients, family members, and hospital partners.',
  sections: [
    {
      heading: 'Information we collect',
      body: '[List categories of personal and medical data collected via the intake form, WhatsApp, and email, e.g. contact details, procedure/condition, uploaded reports.]',
    },
    {
      heading: 'How we use it',
      body: '[Describe use: matching patients to hospital partners, preparing cost estimates, visa invitation support, case management.]',
    },
    {
      heading: 'Sharing with hospital partners',
      body: "[Name the categories of partner hospitals and doctors data is shared with, and under what safeguards.]",
    },
    {
      heading: 'Cross-border data transfer',
      body: "[Disclose whether patient data crosses borders when shared with hospitals or systems located outside the patient's home country.]",
    },
    {
      heading: 'Retention',
      body: '[State how long case data, medical reports, and contact details are retained, and how deletion requests are handled.]',
    },
    {
      heading: 'Your rights under the DPDP Act',
      body: '[Detail rights to access, correction, and erasure, and how to exercise them.]',
    },
    {
      heading: 'Grievance officer',
      body: '[Name and contact details of the Grievance Officer required under the DPDP Act.]',
    },
  ],
};

export const termsOfUseContent: LegalPageContent = {
  title: 'Terms of Use',
  intro: 'The terms that govern your use of the Setu Health website and case-intake service.',
  sections: [
    {
      heading: 'Who we are',
      body: 'Setu Health is a medical travel facilitation service. Setu Health is not a hospital and does not provide medical treatment, diagnosis, or advice directly.',
    },
    {
      heading: 'Acceptance of terms',
      body: '[State how using the site or submitting the intake form constitutes acceptance.]',
    },
    {
      heading: 'No medical advice',
      body: '[Clarify that cost estimates and treatment plans come from partner hospital specialists, not from Setu Health staff.]',
    },
    {
      heading: 'Facilitation role and liability',
      body: "[Define the limits of Setu Health's liability for treatment outcomes, travel arrangements, and third-party hospital conduct.]",
    },
    {
      heading: 'User responsibilities',
      body: '[State expectations for accurate case information and lawful use of the WhatsApp and form intake channels.]',
    },
    {
      heading: 'Governing law',
      body: '[Specify the governing law and jurisdiction for disputes.]',
    },
  ],
};

export const dataHandlingNoticeContent: LegalPageContent = {
  title: 'Data Handling Notice',
  intro:
    "Specific disclosures required under India's Digital Personal Data Protection (DPDP) Act for how Setu Health handles sensitive personal and medical data.",
  sections: [
    {
      heading: 'Data fiduciary',
      body: '[Name the registered business entity acting as Data Fiduciary under the DPDP Act.]',
    },
    {
      heading: 'Purpose of processing',
      body: '[State the specific, itemised purposes for which consent is sought: case review, hospital matching, visa support, follow-up care.]',
    },
    {
      heading: 'Consent mechanism',
      body: '[Describe how and when consent is captured, e.g. at intake-form submission, and how it can be withdrawn.]',
    },
    {
      heading: 'Data processors',
      body: "[List any third parties (e.g. WhatsApp Business, email provider, hospital partners) who process data on Setu Health's behalf.]",
    },
    {
      heading: 'Security safeguards',
      body: '[Summarise technical and organisational measures protecting medical and personal data in transit and at rest.]',
    },
    {
      heading: 'Breach notification',
      body: '[State the process for notifying the Data Protection Board and affected patients in the event of a breach.]',
    },
    {
      heading: 'Data Protection Officer / contact',
      body: '[Name and contact details of the Data Protection Officer or equivalent contact point.]',
    },
  ],
};
