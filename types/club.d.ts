export type Club = {
  slug: string;
  name: string;
  contactEmail?: string;
  contactNote?: string;
  socialLinks?: {
    website?: string;
    instagram?: string;
    facebook?: string;
    other?: string;
  };
  meetingTime?: string;
  meetingPlace?: string;
  firstTimeVisitorInfo?: string;
  description?: string;
};
