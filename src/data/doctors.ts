export interface Doctor {
  slug: string;
  name: string;
  designation: string;
  specialty: string;
  // Slug of the doctor's hospital in `hospitals.ts`.
  hospitalSlug: string;
  experienceYears: number;
  qualifications: string;
  image?: string;
}

// Add verified doctor profiles here; the Doctors page shows a "coming soon" panel while empty.
export const doctors: Doctor[] = [];
