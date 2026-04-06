export type LeadFormData = {
  currentStatus: string;
  needs: string[];
  timeline: string;
  name: string;
  businessName: string;
  businessDesc: string;
  location: string;
  email: string;
  phone: string;
  website: string;
};

export const initialFormData: LeadFormData = {
  currentStatus: "",
  needs: [],
  timeline: "",
  name: "",
  businessName: "",
  businessDesc: "",
  email: "",
  location: "",
  phone: "",
  website: "",
};

export const statusOptions = [
  { value: "zero", label: "Starting from zero. No website, no marketing yet." },
  { value: "have_website", label: "Have a website, but it's not bringing in customers." },
  { value: "running_some", label: "Running some marketing, but it could be better." },
  { value: "ready_upgrade", label: "Ready to upgrade everything." },
] as const;

export const needsOptions = [
  { value: "website", label: "A website that actually converts" },
  { value: "email", label: "Email and SMS that keep customers coming back" },
  { value: "ads", label: "Paid ads that bring in new customers" },
  { value: "seo", label: "SEO so people can find you on Google" },
] as const;

export const timelineOptions = [
  { value: "this_month", label: "This month" },
  { value: "exploring", label: "Just exploring for now" },
] as const;

export const contactFields = [
  { key: "name" as const, label: "Your name", placeholder: "Your name", type: "text", required: true },
  { key: "businessName" as const, label: "Business name", placeholder: "Business name", type: "text", required: true },
  { key: "businessDesc" as const, label: "What does your business do?", placeholder: "What does your business do?", type: "text", required: true },
  { key: "location" as const, label: "Location", placeholder: "Where is your business based? (city/state)", type: "text", required: false },
  { key: "email" as const, label: "Email", placeholder: "Email", type: "email", required: true },
  { key: "phone" as const, label: "Phone", placeholder: "Phone (optional, but fastest way to reach you)", type: "tel", required: false },
] as const;

export const statusLabels: Record<string, string> = {
  zero: "Starting from zero",
  have_website: "Has a website, not converting",
  running_some: "Running some marketing",
  ready_upgrade: "Ready to upgrade everything",
};

export const needsLabels: Record<string, string> = {
  website: "Website",
  email: "Email/SMS",
  ads: "Paid Ads",
  seo: "SEO",
  all: "The Full System",
};

export const timelineLabels: Record<string, string> = {
  yesterday: "Yesterday (URGENT)",
  this_month: "This month",
  exploring: "Just exploring",
};
