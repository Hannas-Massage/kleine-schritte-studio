export interface NavItem {
  href: string;
  label: string;
}

export interface HighlightItem {
  title: string;
  text: string;
}

export interface OfferItem {
  title: string;
  text: string;
  badge?: string;
}

export interface PricingOption {
  duration: string;
  price: string;
}

export interface PricingGroup {
  title: string;
  options: PricingOption[];
  calLink: string;
  ctaLabel?: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  owner: string;
  fullName: string;
  street: string;
  zip: string;
  city: string;
  country: string;
  phoneDisplay: string;
  phoneLink: string;
  whatsappNumber: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  googleMapsUrl: string;
  calUrl: string;
}

export interface GoogleReview {
  author: string;
  text: string;
  rating: 5;
}
