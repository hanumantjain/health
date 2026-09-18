export const BRAND_NAME = 'HealthFlyIndia';
export const WHATSAPP_NUMBER = '919540479798';
export const WHATSAPP_NUMBER_DISPLAY = '+91 95404 79798';
export const CONTACT_EMAIL = 'care@healthflyindia.com';
export const OFFICE_ADDRESS = 'Diplomatic Enclave, Chanakyapuri, New Delhi 110021';

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/#medical-specialties', label: 'Specialties' },
  { href: '/#how-it-works', label: 'Pathway' },
  { href: '/#accredited-hospitals', label: 'Hospitals' },
  { href: '/#services-included', label: 'Inclusions' },
  { href: '/#patient-stories', label: 'Stories' },
];

export interface TrustBadge {
  icon: string;
  label: string;
}

export const heroTrustBadges: TrustBadge[] = [
  { icon: 'verified_user', label: '100% Free Patient Facilitation' },
  { icon: 'schedule', label: 'Doctor Opinion in 24-48 Hours' },
  { icon: 'lock', label: 'HIPAA-Compliant File Vault' },
];

export interface Metric {
  value: string;
  tag?: string;
  tagColor?: 'cyan' | 'cyan-deep' | 'navy';
  title: string;
  subtitle: string;
}

export const heroMetrics: Metric[] = [
  {
    value: '50+',
    tag: 'Accredited',
    tagColor: 'cyan-deep',
    title: 'NABH & JCI Hospitals',
    subtitle: 'Apollo, Max, Fortis, Medanta',
  },
  {
    value: '1,200+',
    tag: 'Doctors',
    tagColor: 'cyan',
    title: 'Specialist Surgeons',
    subtitle: 'US, UK & AIIMS trained clinicians',
  },
  {
    value: '4,500+',
    tag: 'Flown',
    tagColor: 'cyan-deep',
    title: 'Global Patients Assisted',
    subtitle: 'Across 42 countries worldwide',
  },
  {
    value: '< 48 hrs',
    title: 'Guaranteed Quote Time',
    subtitle: 'Transparent itemized hospital pricing',
  },
];

export interface Specialty {
  icon: string;
  tag: string;
  name: string;
  description: string;
  priceFrom: string;
  compareLabel: string;
}

export const specialties: Specialty[] = [
  {
    icon: 'cardiology',
    tag: 'Free Surgeon Review',
    name: 'Cardiology & Cardiac Surgery',
    description:
      'Beating-heart CABG, transcatheter aortic valve replacement (TAVR), minimally invasive mitral valve repairs, and complex pediatric congenital surgeries.',
    priceFrom: 'From $4,200 USD',
    compareLabel: '$75,000 in UK/US',
  },
  {
    icon: 'accessibility_new',
    tag: 'Free Surgeon Review',
    name: 'Orthopedics & Spine Reconstruction',
    description:
      'MAKO robotic-assisted total knee & hip replacements, endoscopic cervical/lumbar spine discectomy, scoliosis correction, and complex revision surgeries.',
    priceFrom: 'From $3,800 USD',
    compareLabel: 'Robotic Implants',
  },
  {
    icon: 'vital_signs',
    tag: 'Tumor Board Panel',
    name: 'Comprehensive Oncology',
    description:
      'Targeted proton beam therapy, CyberKnife radiosurgery, CAR-T cell immunotherapy, and da Vinci robotic tumor resections led by institutional tumor boards.',
    priceFrom: 'From $3,500 USD',
    compareLabel: 'Genomic Profiling',
  },
  {
    icon: 'psychology',
    tag: 'Free Surgeon Review',
    name: 'Neurosurgery & Neurology',
    description:
      "Stereotactic craniotomy, intraoperative MRI-guided brain tumor excisions, deep brain stimulation (DBS) for Parkinson's, and cerebral aneurysm coiling.",
    priceFrom: 'From $5,200 USD',
    compareLabel: 'Neuronavigation Hub',
  },
  {
    icon: 'healing',
    tag: 'Govt Legal Desk',
    name: 'Living Donor Organ Transplants',
    description:
      'Living-related donor liver and kidney transplants with comprehensive pre-transplant legal and ethical authorization documentation handled by our in-house team.',
    priceFrom: 'From $18,000 USD',
    compareLabel: 'Donor + Recipient ICU',
  },
  {
    icon: 'child_care',
    tag: 'High Success Rate',
    name: 'Fertility, IVF & Genomics',
    description:
      'Advanced blastocyst culture, ICSI, pre-implantation genetic aneuploidy screening (PGT-A), donor cycles, and dedicated reproductive wellness suites.',
    priceFrom: 'From $2,800 USD',
    compareLabel: 'Includes Medications',
  },
];

export interface JourneyStep {
  stepNo: string;
  tag: string;
  title: string;
  description: string;
  footnote: string;
}

export const journeySteps: JourneyStep[] = [
  {
    stepNo: '01',
    tag: 'No Obligation',
    title: 'Share Your Case',
    description:
      'Upload recent MRI/CT scans, discharge summaries, or blood panels via WhatsApp or our secure portal. 100% confidential and encrypted.',
    footnote: 'Zero fee to review',
  },
  {
    stepNo: '02',
    tag: 'Within 48h',
    title: 'Specialist Opinion & Quote',
    description:
      'Head surgeons from premier hospitals evaluate your reports and prescribe a tailored care pathway with a guaranteed itemized cost estimate.',
    footnote: '2-3 hospital options',
  },
  {
    stepNo: '03',
    tag: 'White-Glove',
    title: 'Visa, Flight & Admission',
    description:
      'We expedite government medical visa invitation letters, welcome you at Delhi airport with a private chauffeur, set up your SIM, and facilitate admission.',
    footnote: 'Chauffeur & SIM provided',
  },
  {
    stepNo: '04',
    tag: 'Lifelong Care',
    title: 'Recovery & Safe Flight Home',
    description:
      'We monitor recovery in comfortable serviced guest suites, coordinate post-op pathology checks, and organize ongoing tele-consults once back home.',
    footnote: 'Surgeon tele-follow-ups',
  },
];

export interface HospitalPartner {
  icon: string;
  location: string;
  name: string;
  description: string;
  beds: string;
  desk: string;
}

export const hospitalPartners: HospitalPartner[] = [
  {
    icon: 'cardiology',
    location: 'New Delhi (South)',
    name: 'Max Super Speciality',
    description:
      'Centers of Excellence in Oncology, Bone Marrow, Robotic Joint Replacement, and complex neuro-interventions.',
    beds: '850+ Beds',
    desk: 'Arabic & Russian Desk',
  },
  {
    icon: 'emergency',
    location: 'Gurugram (Delhi NCR)',
    name: 'Medanta – The Medicity',
    description:
      'Founded by a renowned heart surgery team. Recognized for organ transplants and cardiovascular care.',
    beds: '1,250+ Beds',
    desk: 'Intl. ICU Wing',
  },
  {
    icon: 'local_hospital',
    location: 'New Delhi (Central)',
    name: 'Apollo Hospitals',
    description:
      'Pioneers in pediatric liver transplants, robotic cardiology, proton beam cancer therapy, and genetic screening.',
    beds: '710+ Beds',
    desk: 'Halal Food Certified',
  },
  {
    icon: 'biotech',
    location: 'Gurugram (Delhi NCR)',
    name: 'Fortis Memorial (FMRI)',
    description:
      "Asia's leading pediatric bone marrow transplant wing, CyberKnife robotics, and advanced IVF fertility lab.",
    beds: '400+ Beds',
    desk: 'French & Swahili Desk',
  },
];

export interface ServiceItem {
  name: string;
  tagVariant: 'included' | 'markup';
}

export const serviceColumns: ServiceItem[][] = [
  [
    { name: 'Specialist Doctor Second Opinion', tagVariant: 'included' },
    { name: 'Official Medical Visa Invitation Letters', tagVariant: 'included' },
    { name: 'Private Airport Chauffeur Pickup & Drop', tagVariant: 'included' },
    { name: 'Indian SIM Card Activated on Arrival', tagVariant: 'included' },
  ],
  [
    { name: 'Dedicated Multilingual Case Officer', tagVariant: 'included' },
    { name: 'In-Hospital Medical Interpreter', tagVariant: 'included' },
    { name: 'Vetted Serviced Apartment & Hotel Rates', tagVariant: 'markup' },
    { name: 'Post-Discharge Doctor Tele-Consults', tagVariant: 'included' },
  ],
];

export interface Testimonial {
  flag: string;
  location: string;
  quote: string;
  name: string;
  procedure: string;
  hospitalTag: string;
}

export const testimonials: Testimonial[] = [
  {
    flag: '🇰🇪',
    location: 'Nairobi, Kenya',
    quote:
      'HealthFlyIndia answered my WhatsApp query in 10 minutes. Within 4 days, I was in Delhi receiving spinal decompression surgery at Max Saket. I saved a substantial amount compared to private quotes in London, and my flight case manager was by my side throughout.',
    name: 'David K.',
    procedure: 'Spinal Fusion Reconstruction',
    hospitalTag: 'Max Saket',
  },
  {
    flag: '🇴🇲',
    location: 'Muscat, Oman',
    quote:
      'The medical visa assistance and airport reception were flawless. My mother needed an urgent living-donor liver evaluation. Our HealthFlyIndia coordinator spoke fluent Arabic, handled all documentation, and checked on us every single evening.',
    name: 'Fatima Al-H.',
    procedure: 'Living-Donor Liver Care',
    hospitalTag: 'Medanta',
  },
  {
    flag: '🇺🇿',
    location: 'Tashkent, Uzbekistan',
    quote:
      "Complete price honesty. The initial estimate from Apollo was accurate. The surgeon's second opinion arrived within a day. The post-discharge medicine delivery back to Tashkent gave my family immense peace of mind.",
    name: 'Rustam B.',
    procedure: 'Complex Angioplasty & Stenting',
    hospitalTag: 'Apollo Hospital',
  },
];

export interface FooterLink {
  href: string;
  label: string;
}

export const footerSpecialtyLinks: FooterLink[] = [
  { href: '/#medical-specialties', label: 'Advanced Oncology & Proton Therapy' },
  { href: '/#medical-specialties', label: 'Robotic Cardiac & TAVR Interventions' },
  { href: '/#medical-specialties', label: 'Living Donor Organ Transplants' },
  { href: '/#medical-specialties', label: 'Complex Orthopedics & Spine Reconstruction' },
  { href: '/#medical-specialties', label: 'Reproductive Medicine & Genomics' },
];

export const footerConciergeLinks: FooterLink[] = [
  { href: '/#how-it-works', label: '4-Step Patient Pathway' },
  { href: '/#accredited-hospitals', label: 'Hospital Verification' },
  { href: '/#services-included', label: 'Transparent Inclusions' },
  { href: '/#patient-stories', label: 'Verified Case Outcomes' },
  { href: '/#start-case', label: 'Upload Case Reports' },
];

export const footerLegalLinks: FooterLink[] = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-use', label: 'Terms of Use' },
  { href: '/data-handling-notice', label: 'Data Handling Notice' },
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
  'This page is a structural placeholder, not a binding legal document. Replace every bracketed item with counsel-reviewed text before this site goes live, and before any patient data is collected. Hospital names, accreditation claims, pricing, and patient testimonials shown across this site are illustrative design content and must be verified against signed partnership agreements and consented patient quotes before publishing.';

export const privacyPolicyContent: LegalPageContent = {
  title: 'Privacy Policy',
  intro:
    `How ${BRAND_NAME} collects, uses, and shares information from patients, family members, and hospital partners.`,
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
  intro: `The terms that govern your use of the ${BRAND_NAME} website and case-intake service.`,
  sections: [
    {
      heading: 'Who we are',
      body: `${BRAND_NAME} is a medical travel facilitation service. ${BRAND_NAME} is not a hospital and does not provide medical treatment, diagnosis, or advice directly.`,
    },
    {
      heading: 'Acceptance of terms',
      body: '[State how using the site or submitting the intake form constitutes acceptance.]',
    },
    {
      heading: 'No medical advice',
      body: `[Clarify that cost estimates and treatment plans come from partner hospital specialists, not from ${BRAND_NAME} staff.]`,
    },
    {
      heading: 'Facilitation role and liability',
      body: `[Define the limits of ${BRAND_NAME}'s liability for treatment outcomes, travel arrangements, and third-party hospital conduct.]`,
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
    `Specific disclosures required under India's Digital Personal Data Protection (DPDP) Act for how ${BRAND_NAME} handles sensitive personal and medical data.`,
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
      body: `[List any third parties (e.g. WhatsApp Business, email provider, hospital partners) who process data on ${BRAND_NAME}'s behalf.]`,
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
