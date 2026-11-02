import brandConfigRaw from "./brand.config.js";

export interface BrandConfig {
  businessName: string;
  ownerName: string;
  tagline: string;
  businessType: string;
  shortDescription: string;
  foundedYear: string;
  yearsOfExperience: number;
  heritageStory: string;
  showAuspiciousMotif: boolean;
  auspiciousMotifName: string;
  logo: string;
  logoMark: string;
  favicon: string;
  ogImage: string;
  phones: string[];
  primaryPhone: string;
  whatsappNumber: string;
  whatsappDisplayNumber: string;
  email?: string;
  address: {
    line1: string;
    area: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  mapLink: string;
  mapEmbedUrl: string;
  businessHours: {
    days: string;
    timings: string;
    note: string;
  };
  socialLinks: {
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  theme: {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      secondaryLight: string;
      accentGold: string;
      accentGoldLight: string;
      bgCream: string;
      bgCard: string;
      textDark: string;
      textMuted: string;
      borderGold: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
  };
  stats: Array<{ value: string; label: string; teLabel?: string }>;
  trustBadges: Array<{ icon: string; title: string; description: string }>;
  craftsmanshipSteps: Array<{ step: string; title: string; description: string }>;
  wholesale: {
    heading: string;
    subheading: string;
    minimumOrderQuantity: string;
    highlights: string[];
    enquiryWhatsAppText: string;
  };
  categories: Array<{ id: string; name: string; teName?: string }>;
  products: Array<{
    id: string;
    name: string;
    category: string;
    price: string;
    fabric: string;
    zari: string;
    description: string;
    image: string;
    detailImage?: string;
    tags: string[];
    inStock: boolean;
    colors: string[];
    sku: string;
  }>;
  gallery: Array<{ src: string; title: string; category: string }>;
  testimonials: Array<{
    id: number;
    name: string;
    city: string;
    rating: number;
    comment: string;
    occasion: string;
  }>;
  faqs: Array<{ question: string; answer: string }>;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    siteUrl: string;
    locale: string;
  };
  credits: {
    show: boolean;
    text: string;
    whiteLabelNotice: string;
  };
}

export const brandConfig = brandConfigRaw as unknown as BrandConfig;
export default brandConfig;

