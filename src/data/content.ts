import {
  FaqItem,
  GoogleReview,
  HighlightItem,
  NavItem,
  OfferItem,
  PricingGroup,
  ProcessStepItem,
  SiteConfig,
} from '../types';

export const siteConfig: SiteConfig = {
  name: 'Kleine Schritte',
  tagline: 'Entspannung & Förderung',
  owner: 'Hanna',
  fullName: 'Hanna Dederer',
  street: 'Magnus-Niedermair-Straße 3',
  zip: '89407',
  city: 'Dillingen an der Donau',
  country: 'Deutschland',
  phoneDisplay: '+49 1577 3602362',
  phoneLink: '+4915773602362',
  whatsappNumber: '4915773602362',
  email: 'info@kleine-schritte-studio.de',
  instagramHandle: '@massage_dillingen_donau',
  instagramUrl: 'https://www.instagram.com/massage_dillingen_donau?g=5',
  googleMapsUrl:
    'https://www.google.com/maps/place/Kleine+Schritte+-+Entspannung+%26+F%C3%B6rderung/@48.5769373,10.4813173,17z/data=!4m6!3m5!1s0x479935d2b5a1a67b:0xcac689950c342842!8m2!3d48.5769373!4d10.4813173!16s%2Fg%2F11z1xvjj3h',
  calUrl: 'https://cal.com/hannas-massage',
};

export const googleRating = {
  value: '5,0',
  count: 4,
  asOf: 'September 2026',
} as const;

export const googleReviews: GoogleReview[] = [
  {
    author: 'Stephanie S.',
    rating: 5,
    text: 'Die Wellnessmassage war für mich sehr entspannend. Auf der warmen Liege begleitet durch einfühlsame Massagegriffe fühlte ich mich sehr wohl und konnte super abschalten. Die Zeit verging wie im Flug. Danke liebe Hanna für die schöne Auszeit vom Alltag!',
  },
  {
    author: 'Karola H.',
    rating: 5,
    text: 'Ich durfte heute eine Ganzkörpermassage genießen und diese war gekonnt durchgefüht. Die Masseurin, eine sehr sympathische junge Frau mit Können, ist sehr auf meine Bedürfnisse eingegangen. … Hierhin komme ich sicher wieder, denn ich war rundum zufrieden.',
  },
  {
    author: 'Mahdi M.',
    rating: 5,
    text: 'Sie ist sehr freunlich und ich fühle mich nach der Massage sehr gut.',
  },
  {
    author: 'Vyacheslav L.',
    rating: 5,
    text: 'Tolle Massage und super Service! Ich komme gerne wieder.',
  },
];

export const createWhatsAppUrl = (text: string): string =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const navItems: NavItem[] = [
  { href: '#angebot', label: 'Angebot' },
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#ueber-mich', label: 'Über mich' },
  { href: '#preise', label: 'Preise' },
  { href: '#gutscheine', label: 'Gutscheine' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const highlights: HighlightItem[] = [
  {
    title: '30 bis 120 Minuten',
    text: 'Für jede Behandlung die passende Dauer, ganz ohne Zeitdruck.',
  },
  {
    title: 'Individuell für dich',
    text: 'Massage ganz auf deine Wünsche und Bedürfnisse abgestimmt.',
  },
  {
    title: 'Achtsame Atmosphäre',
    text: 'Ruhe und wohltuende Stille für deine Auszeit.',
  },
];

export const offers: OfferItem[] = [
  {
    title: 'Entspannungs-Massage',
    text: 'Sanfte, ruhige Berührungen für junge Erwachsene, Eltern und ältere Menschen. Mit gleichmäßigen, achtsamen Bewegungen und viel Zeit für dich hilft sie, Anspannung loszulassen, den Kopf frei zu bekommen und neue Energie zu schöpfen. Eine kleine Auszeit vom Alltag, ganz für dich allein.',
  },
  {
    title: 'Rücken & Beine',
    text: 'Gezielte, sanfte Entspannung für Rücken und Beine – ideal, wenn du wenig Zeit hast oder einen klaren Schwerpunkt möchtest. Verspannungen werden gelöst, die Durchblutung angeregt und schwere Beine spürbar entlastet.',
  },
  {
    title: 'Lomi Lomi Nui',
    text: 'Die fließende hawaiianische Massage mit warmem Öl und weichen, rhythmischen Bewegungen. Lange, harmonische Streichungen lösen Verspannungen im ganzen Körper und schenken ein tiefes Gefühl von Wärme, Ruhe und Getragensein.',
  },
  {
    title: 'Fußreflexzonenmassage',
    text: 'Gezielte Massage der Reflexzonen an den Füßen – für tiefe Entspannung und neue Energie im ganzen Körper. Durch sanften Druck auf bestimmte Punkte kann sich die Wirkung weit über die Füße hinaus spüren lassen und zu innerer Ruhe verhelfen.',
  },
  {
    title: 'Sportmassage',
    text: 'Kräftige, gezielte Massage zur Regeneration und Lockerung der Muskulatur – ideal nach dem Sport oder bei Verspannungen. Sie unterstützt die Durchblutung, löst hartnäckige Verspannungen und hilft dem Körper, sich schneller zu erholen.',
  },
  {
    title: 'Schwangerschaftsmassage',
    text: 'Eine besonders sanfte Massage, ganz auf die Bedürfnisse werdender Mütter abgestimmt. In sicherer, bequemer Lagerung löse ich Verspannungen im Rücken- und Nackenbereich, fördere die Durchblutung und schenke dir einen Moment tiefer Entspannung – nur für dich und dein Baby.',
    badge: 'Ab 5. Oktober 2026',
  },
];

export const pricingGroups: PricingGroup[] = [
  {
    title: 'Entspannungs-Massage',
    calLink: 'https://cal.com/hannas-massage/entspannungs-massage',
    options: [
      { duration: '60 Min.', price: '60 €' },
      { duration: '90 Min.', price: '90 €' },
      { duration: '120 Min.', price: '125 €' },
    ],
  },
  {
    title: 'Rücken & Beine',
    calLink: 'https://cal.com/hannas-massage/rucken-beinmassage',
    options: [
      { duration: '30 Min.', price: '35 €' },
      { duration: '45 Min.', price: '50 €' },
    ],
  },
  {
    title: 'Lomi Lomi Nui',
    calLink: 'https://cal.com/hannas-massage/lomi-lomi-nui-massage',
    options: [
      { duration: '60 Min.', price: '80 €' },
      { duration: '90 Min.', price: '120 €' },
      { duration: '120 Min.', price: '150 €' },
    ],
  },
  {
    title: 'Fußreflexzonenmassage',
    calLink: 'https://cal.com/hannas-massage',
    ctaLabel: 'Termin anfragen',
    options: [{ duration: '45 Min.', price: '50 €' }],
  },
  {
    title: 'Sportmassage',
    calLink: 'https://cal.com/hannas-massage',
    ctaLabel: 'Termin anfragen',
    options: [
      { duration: '60 Min.', price: '70 €' },
      { duration: '90 Min.', price: '100 €' },
    ],
  },
];

export const processSteps: ProcessStepItem[] = [
  {
    number: '1',
    title: 'Absprache',
    description: 'Wunschzeit und Schwerpunkt einfach per WhatsApp oder Anruf klären.',
  },
  {
    number: '2',
    title: 'Vorbereitung',
    description: 'Hochwertige Öle, ruhige Musik und volle Aufmerksamkeit – alles ist ganz auf dich und deine Massage abgestimmt.',
  },
  {
    number: '3',
    title: 'Nachspüren',
    description: 'Nimm dir im Anschluss noch einen Moment Zeit, um ganz in Ruhe bei dir anzukommen.',
  },
];

export const servedLocations: string[] = [
  'Dillingen an der Donau',
  'Lauingen',
  'Gundelfingen',
  'Höchstädt',
  'Wittislingen',
  'Holzheim',
];

export const formatServedLocations = (locations: string[] = servedLocations): string => {
  if (locations.length === 0) return '';
  if (locations.length === 1) return locations[0];
  return `${locations.slice(0, -1).join(', ')} und ${locations[locations.length - 1]}`;
};

export const faqs: FaqItem[] = [
  {
    question: 'Wo findet die Massage statt?',
    answer: `Bei mir in ${siteConfig.city}, ${siteConfig.street}. Kundinnen kommen unter anderem aus ${formatServedLocations(servedLocations.filter((location) => location !== siteConfig.city))}.`,
  },
  {
    question: 'Wie läuft die Massage ab?',
    answer:
      'Jede Massage wird ganz individuell auf dich abgestimmt – vom Ablauf bis zur Dauer. Ich nehme mir die Zeit, vorab kurz mit dir zu besprechen, was du dir wünschst, damit du dich rundum wohlfühlst. Bei Fragen dazu sprich mich gerne vorab an.',
  },
  {
    question: 'Was muss ich vorbereiten?',
    answer:
      'Nichts Besonderes – alles Nötige ist vor Ort. Am wohlsten fühlst du dich meist in bequemer Kleidung, und wenn du kurz vorher nicht allzu schwer gegessen hast. Alles Weitere bespreche ich gerne vorab mit dir.',
  },
  {
    question: 'Gibt es Gründe, die gegen eine Massage sprechen?',
    answer: 'Bei akutem Fieber, frischen Verletzungen oder akuten Entzündungen sollte keine Massage stattfinden. Im Zweifel bitte vorher kurz Rücksprache halten.',
  },
  {
    question: 'Welche Öle werden verwendet?',
    answer:
      'Ich verwende hochwertige, natürliche Öle, ganz auf dich abgestimmt. Falls du Allergien oder Unverträglichkeiten hast, sag mir das gerne vorab kurz Bescheid.',
  },
];
