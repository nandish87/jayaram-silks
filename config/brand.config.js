/**
 * =============================================================================
 * WHITE-LABEL BRAND CONFIGURATION
 * =============================================================================
 * To re-brand this website for any saree weaver, manufacturer, or retail store:
 * 1. Edit the business information, phones, colors, and content below.
 * 2. Replace the logo, hero images, and product photos in /public/images/.
 * 3. Deploy! Nothing in the website components is hardcoded.
 * =============================================================================
 */

export const brandConfig = {
  // Brand Identity
  businessName: "Y. Jayaram Silk Sarees",
  ownerName: "Y. Jayaram & Bro's",
  tagline: "Pure Hand Loom Silk Sarees & Manufacturers",
  businessType: "Silk Saree Weavers & Wholesale Manufacturers",
  shortDescription:
    "Direct from the master weavers of Madanapalle. Authentic handloom pure silk sarees, bridal pattu collections, and wholesale bulk packs crafted with pure mulberry silk and exquisite gold zari.",
  foundedYear: "", // Update with actual founding year
  yearsOfExperience: 0, // Update with actual years of experience
  heritageStory:
    "Y. Jayaram & Bro's is a traditional handloom family business based in Madanapalle, Andhra Pradesh. We specialize in weaving pure silk sarees using authentic mulberry silk yarn, traditional dyeing techniques, and hand-operated pit-loom weaving — preserving the rich heritage of South Indian handloom craftsmanship.",

  // Auspicious motif toggle (Ganesha / Lotus motif for traditional Indian businesses)
  showAuspiciousMotif: true,
  auspiciousMotifName: "Lord Ganesha",

  // Visual Assets
  logo: "/images/logo.svg",
  logoMark: "/images/logo-mark.svg",
  favicon: "/favicon.ico",
  ogImage: "/images/sarees/wholesale-combo-set-6.jpg",

  // Contact Information
  phones: ["9640008902", "9666072696"],
  primaryPhone: "9640008902",
  whatsappNumber: "919640008902",
  whatsappDisplayNumber: "+91 96400 08902",
  email: "", // Optional, set to "" to hide

  // Physical Address
  address: {
    line1: "III-81-F4, Vivekananda School Road",
    area: "Mayabazaar, Neerugattuvaripalle",
    city: "Madanapalle",
    district: "Chittoor District",
    state: "Andhra Pradesh",
    pincode: "517 325",
    country: "India",
    full: "III-81-F4, Vivekananda School Road, Mayabazaar, Neerugattuvaripalle, Madanapalle – 517 325, Chittoor District, Andhra Pradesh, India",
  },

  // Map Integration
  mapLink: "https://share.google/sLg4ZicFABklLAXw4",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Y+Jayaram+Silk+Sarees+Weavers+and+wholesale+manufacturers+Madanapalle&output=embed",

  // Business Hours
  businessHours: {
    days: "Monday – Sunday (All 7 Days)",
    timings: "9:00 AM – 9:00 PM IST",
    note: "Open for wholesale showroom visits & bulk order consultations",
  },

  // Social Links (Leave string empty "" to hide automatically)
  socialLinks: {
    whatsapp: "https://wa.me/919640008902?text=Hello%20Y.%20Jayaram%20Silk%20Sarees%2C%20I%20would%20like%20to%20enquire%20about%20your%20pure%20handloom%20silk%20sarees.",
    instagram: "",
    facebook: "",
    youtube: "",
  },

  // Theme Styling & Palette (Visiting card palette: Gold + Royal Green + Deep Maroon on Warm Cream)
  theme: {
    colors: {
      primary: "#7B1113", // Royal Deep Maroon / Kumkum Red
      primaryDark: "#520A0C", // Darker Maroon for deep contrast
      secondary: "#0F5132", // Traditional Silk Forest Green
      secondaryLight: "#198754", // Emerald Green
      accentGold: "#C59B27", // Rich Antique Temple Gold
      accentGoldLight: "#E8C15A", // Shimmering Zari Gold
      bgCream: "#FCFBF7", // Pure Raw Silk / Ivory Cream
      bgCard: "#FFFFFF", // Crisp White for card elevation
      textDark: "#1C1917", // Rich Charcoal for high-contrast typography
      textMuted: "#665C54", // Elegant earthy muted text
      borderGold: "#E6D7B8", // Subtle Zari Border line
    },
    fonts: {
      heading: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
      body: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },
  },

  // Key Brand Stats (update with real verified numbers)
  stats: [],

  // Trust Badges
  trustBadges: [
    {
      icon: "ShieldCheck",
      title: "100% Handloom Certified",
      description: "Pure mulberry silk with Silk Mark authentic guarantee",
    },
    {
      icon: "Factory",
      title: "Direct From Weavers",
      description: "Zero middlemen margin – direct loom-to-customer pricing",
    },
    {
      icon: "PackageCheck",
      title: "Wholesale & Bulk Orders",
      description: "Custom bulk lots, matching sets & boutique supplies",
    },
    {
      icon: "Truck",
      title: "Pan-India Secure Delivery",
      description: "Insured courier shipping with full tracking across India",
    },
    {
      icon: "Sparkles",
      title: "Tested Pure Zari",
      description: "Gleaming traditional gold and silver zari craftsmanship",
    },
  ],

  // Craftsmanship Journey (Process Steps)
  craftsmanshipSteps: [
    {
      step: "01",
      title: "Silk Yarn Selection",
      description: "Graded pure natural mulberry silk yarn sourced from trusted sericulture hubs.",
    },
    {
      step: "02",
      title: "Natural & Eco Dyeing",
      description: "Master dyers infuse rich festive shades using traditional vat and pot methods.",
    },
    {
      step: "03",
      title: "Warp & Weft Preparation",
      description: "Meticulous yarn spooling and sizing on wooden handloom beams with exact tension.",
    },
    {
      step: "04",
      title: "Handloom Weaving & Zari Work",
      description: "Skilled artisan brothers hand-weave intricate pallus, peacocks, and temple borders.",
    },
    {
      step: "05",
      title: "Finishing & Quality Check",
      description: "Each saree undergoes a 5-point inspection for drape, luster, weight, and flawlessness.",
    },
  ],

  // Wholesale & Bulk Supply Information
  wholesale: {
    heading: "Direct Weaver Wholesale & Bulk Orders",
    subheading: "Supplying saree retailers, boutiques, wedding planners & reselling networks across India.",
    minimumOrderQuantity: "6 Sarees (Assorted combo packs) or 10 Sarees per design",
    highlights: [
      "Loom-direct factory wholesale rates",
      "Custom color combo pack availability",
      "Exclusive bridal trousseau bulk discounts",
      "Worldwide export and Pan-India transport dispatch",
      "Video call preview of live loom stock",
    ],
    enquiryWhatsAppText: "Hello Y. Jayaram Silk Sarees, I am looking for wholesale bulk orders. Please share your wholesale catalogue and prices.",
  },

  // Categories
  categories: [
    { id: "all", name: "All Collections", teName: "అన్ని రకాలు" },
    { id: "bridal", name: "Bridal Pattu", teName: "పెళ్లి పట్టు చీరలు" },
    { id: "pure-silk", name: "Pure Handloom Silk", teName: "స్వచ్ఛమైన చేనేత పట్టు" },
    { id: "kanjivaram-style", name: "Kanjivaram Style", teName: "కాంచీపురం శైలి" },
    { id: "temple-border", name: "Temple & Zari Border", teName: "టెంపుల్ & జరీ అంచు" },
    { id: "wholesale-packs", name: "Wholesale Bulk Sets", teName: "హోల్‌సేల్ సెట్లు" },
  ],

  // Products (Built with all 20 real cropped photos from Jayaram Silks)
  products: [
    {
      id: "jyr-001",
      name: "Wholesale Master Combo – 6 Color Loom Assortment",
      category: "wholesale-packs",
      price: "Wholesale Price on Request",
      fabric: "100% Pure Handloom Silk",
      zari: "Authentic Temple Spike Zari Border",
      description: "Wholesale bundle of 6 rich festive drapes featuring temple zari borders in magenta, wine maroon, royal purple, lilac mauve, peacock green, and violet.",
      image: "/images/sarees/wholesale-combo-set-6.jpg",
      tags: ["Wholesale", "Combo Pack", "Bestseller", "Direct Loom"],
      inStock: true,
      colors: ["Magenta", "Wine", "Purple", "Lilac", "Bottle Green", "Violet"],
      sku: "JYR-WHOLESALE-6PK",
    },
    {
      id: "jyr-002",
      name: "Rani Pink Paisley Bridal Silk Saree",
      category: "bridal",
      price: "Contact for Price",
      fabric: "Pure Mulberry Pattu Silk",
      zari: "Heavy Gold Zari Paisley Floral Pallu",
      description: "Stunning festive bridal saree in vibrant rani pink featuring micro-checks, delicate silver-gold buttis, and an opulent zari border with heritage paisley motifs.",
      image: "/images/sarees/rani-pink-paisley-bridal-silk.jpg",
      detailImage: "/images/sarees/rani-pink-paisley-bridal-silk-pallu.jpg",
      tags: ["Bridal", "Pure Pattu", "Box Pack"],
      inStock: true,
      colors: ["Rani Pink", "Antique Gold"],
      sku: "JYR-BRD-002",
    },
    {
      id: "jyr-003",
      name: "Deep Maroon & Violet Brocade Pure Silk",
      category: "pure-silk",
      price: "Contact for Price",
      fabric: "Pure Handloom Silk",
      zari: "Intricate Diamond Lattice & Mango Pallu",
      description: "Regal two-tone deep maroon body with vertical gold vines, complemented by a majestic royal purple zari border and ornate brocade pallu.",
      image: "/images/sarees/deep-maroon-purple-brocade-silk.jpg",
      detailImage: "/images/sarees/deep-maroon-purple-brocade-pallu.jpg",
      tags: ["Traditional", "Heavy Pallu", "Festive"],
      inStock: true,
      colors: ["Deep Maroon", "Royal Purple", "Gold Zari"],
      sku: "JYR-SLK-003",
    },
    {
      id: "jyr-004",
      name: "Royal Purple Zari Grid Pattu Saree",
      category: "kanjivaram-style",
      price: "Contact for Price",
      fabric: "Pure Silk Pattu",
      zari: "Fine Grid & Rudraksha Zari Weave",
      description: "Classic South Indian elegance: rich violet-purple body highlighted by delicate zari check lines, woven on traditional pit-looms in Madanapalle.",
      image: "/images/sarees/royal-purple-checked-pattu.jpg",
      detailImage: "/images/sarees/royal-purple-checked-pattu-detail.jpg",
      tags: ["Checks", "Kanjivaram Style", "Classic"],
      inStock: true,
      colors: ["Royal Purple", "Gold"],
      sku: "JYR-PAT-004",
    },
    {
      id: "jyr-005",
      name: "Haldi Yellow & Rani Pink Contrast Pattu",
      category: "bridal",
      price: "Contact for Price",
      fabric: "Pure Handloom Silk",
      zari: "Rich Contrast Floral Border & Diamond Motif",
      description: "An auspicious wedding masterwork: warm haldi yellow silk body with grand woven brocade motif and vivid rani pink gold zari contrast border.",
      image: "/images/sarees/haldi-yellow-pink-zari-pattu.jpg",
      detailImage: "/images/sarees/haldi-yellow-pink-zari-pallu.jpg",
      tags: ["Bridal", "Haldi Special", "Contrast Border"],
      inStock: true,
      colors: ["Haldi Yellow", "Rani Pink", "Gold"],
      sku: "JYR-BRD-005",
    },
    {
      id: "jyr-006",
      name: "Peacock Teal Green Handloom Silk",
      category: "pure-silk",
      price: "Contact for Price",
      fabric: "100% Pure Mulberry Silk",
      zari: "Monumental Twin Mayil (Peacock) Zari Pallu",
      description: "Magnificent dual-tone teal and mint green saree adorned with handwoven twin peacock motifs and rich zari architecture.",
      image: "/images/sarees/peacock-teal-green-handloom.jpg",
      detailImage: "/images/sarees/peacock-teal-green-handloom-motif.jpg",
      tags: ["Peacock Motif", "Bestseller", "Pure Silk"],
      inStock: true,
      colors: ["Teal Green", "Mint", "Gold"],
      sku: "JYR-SLK-006",
    },
    {
      id: "jyr-007",
      name: "Royal Blue Twin Peacock Tree Silk",
      category: "pure-silk",
      price: "Contact for Price",
      fabric: "Pure Handloom Silk",
      zari: "Grand Tree of Life & Dancing Peacocks",
      description: "Breathtaking royal sapphire blue saree with an artisan tree of life motif depicting twin peacocks amongst blossoming floral foliage.",
      image: "/images/sarees/royal-blue-twin-peacock-silk.jpg",
      detailImage: "/images/sarees/royal-blue-twin-peacock-detail.jpg",
      tags: ["Royal Blue", "Artisan Weave", "Grand Motif"],
      inStock: true,
      colors: ["Sapphire Blue", "Antique Gold"],
      sku: "JYR-SLK-007",
    },
    {
      id: "jyr-008",
      name: "Emerald Green Chakra Mandala Silk Saree",
      category: "kanjivaram-style",
      price: "Contact for Price",
      fabric: "Pure Handloom Pattu",
      zari: "Circular Mandala & Filigree Zari Medallion",
      description: "Rich emerald forest green silk highlighted with lime borders and a glorious central chakra mandala woven with pure gold zari threads.",
      image: "/images/sarees/emerald-green-chakra-mandala-silk.jpg",
      tags: ["Mandala", "Forest Green", "Temple Style"],
      inStock: true,
      colors: ["Emerald Green", "Lime Border", "Gold"],
      sku: "JYR-PAT-008",
    },
    {
      id: "jyr-009",
      name: "Magenta Gold Mandala Arch Pure Silk",
      category: "bridal",
      price: "Contact for Price",
      fabric: "Pure Silk",
      zari: "Arched Temple Mandapam & Paisley Border",
      description: "Radiant magenta body with shimmering zari buttas, featuring ornate temple arch motifs and fine parallel horizontal zari lines.",
      image: "/images/sarees/magenta-gold-mandala-border-silk.jpg",
      detailImage: "/images/sarees/magenta-gold-mandala-border-detail.jpg",
      tags: ["Bridal", "Temple Border", "Rich Pallu"],
      inStock: true,
      colors: ["Magenta", "Gold Zari"],
      sku: "JYR-BRD-009",
    },
    {
      id: "jyr-010",
      name: "Eggplant Purple Peacock Feather Silk",
      category: "pure-silk",
      price: "Contact for Price",
      fabric: "Pure Handloom Silk",
      zari: "Intricate Peacock Feather Paisley Motif",
      description: "Sophisticated deep eggplant purple pure silk with an elaborate feather-paisley zari crest that glints under festive lighting.",
      image: "/images/sarees/royal-eggplant-purple-peacock-feather.jpg",
      tags: ["Eggplant Purple", "Heritage", "Exclusive"],
      inStock: true,
      colors: ["Eggplant Purple", "Gold Zari"],
      sku: "JYR-SLK-010",
    },
    {
      id: "jyr-011",
      name: "Sapphire Blue Mandala Zari Pattu",
      category: "kanjivaram-style",
      price: "Contact for Price",
      fabric: "Pure Handloom Silk",
      zari: "Square Floral Mandala & Geometric Borders",
      description: "Dignified sapphire blue pure silk with a lime green edge and intricate square geometric floral mandala pallu.",
      image: "/images/sarees/sapphire-blue-mandala-zari-pattu.jpg",
      tags: ["Geometric Zari", "Sapphire Blue", "Handloom"],
      inStock: true,
      colors: ["Sapphire Blue", "Lime Accent", "Gold"],
      sku: "JYR-PAT-011",
    },
    {
      id: "jyr-012",
      name: "Parrot Green Double-Shade Peacock Saree",
      category: "pure-silk",
      price: "Contact for Price",
      fabric: "Pure Mulberry Silk",
      zari: "Double-Toned Twin Peacock Handloom Crest",
      description: "Luminous parrot green silk with sea green highlights, presented in a luxury gift box ready for wedding gifting or bridal trousseau.",
      image: "/images/sarees/parrot-green-double-shade-peacock.jpg",
      tags: ["Box Pack", "Double Shade", "Wedding Gift"],
      inStock: true,
      colors: ["Parrot Green", "Sea Green", "Gold"],
      sku: "JYR-SLK-012",
    },
    {
      id: "jyr-013",
      name: "Magenta & Royal Blue Draped Bridal Silk",
      category: "bridal",
      price: "Contact for Price",
      fabric: "Pure Pattu Silk",
      zari: "Grand Royal Blue Striped & Peacock Pallu",
      description: "Full-drape showcase of magenta pink body speckled with flower buttas paired with a heavy royal blue zari border and traditional temple striping.",
      image: "/images/sarees/magenta-royal-blue-draped-bridal.jpg",
      tags: ["Bridal Masterpiece", "Full Drape", "Royal Blue Pallu"],
      inStock: true,
      colors: ["Magenta Pink", "Royal Blue", "Gold Zari"],
      sku: "JYR-BRD-013",
    },
    {
      id: "jyr-014",
      name: "Olive Gold & Royal Blue Draped Silk",
      category: "temple-border",
      price: "Contact for Price",
      fabric: "Pure Handloom Silk",
      zari: "Fine Striped Brocade & Mayil Border",
      description: "Unconventional and royal: warm olive-gold body highlighted with gold buttis, draped against a contrasting midnight blue zari border.",
      image: "/images/sarees/olive-gold-royal-blue-draped.jpg",
      tags: ["Olive Gold", "Contrast Pallu", "Traditional"],
      inStock: true,
      colors: ["Olive Green", "Royal Blue", "Gold"],
      sku: "JYR-TMP-014",
    },
    {
      id: "jyr-015",
      name: "Rust Copper & Purple Silver Draped Saree",
      category: "temple-border",
      price: "Contact for Price",
      fabric: "Pure Handloom Silk",
      zari: "Dual Gold & Silver Zari Handloom Stripes",
      description: "Earthy rust copper pure silk adorned with dual silver and gold zari stripe detailing and a majestic purple pallu with floral buttis.",
      image: "/images/sarees/rust-copper-purple-silver-draped.jpg",
      tags: ["Rust Copper", "Silver Zari", "Modern Heritage"],
      inStock: true,
      colors: ["Rust Copper", "Purple", "Silver & Gold"],
      sku: "JYR-TMP-015",
    },
    {
      id: "jyr-016",
      name: "Coral Pink Heavy Zari Bridal Box Saree",
      category: "bridal",
      price: "Contact for Price",
      fabric: "Pure Mulberry Pattu",
      zari: "Rich Floral Vine & Dense Zari Weave",
      description: "Exquisite coral pink bridal drape featuring vertical zari stripes, traditional floral medallions, and a lustrous gold pallu.",
      image: "/images/sarees/coral-pink-heavy-zari-bridal-box.jpg",
      tags: ["Coral Pink", "Bridal Box", "Dense Zari"],
      inStock: true,
      colors: ["Coral Pink", "Pure Gold Zari"],
      sku: "JYR-BRD-016",
    },
    {
      id: "jyr-017",
      name: "Sapphire Blue Checked Temple Zari Saree",
      category: "temple-border",
      price: "Contact for Price",
      fabric: "Pure Handloom Silk",
      zari: "Temple Spikes & Floral Zari Border",
      description: "Vibrant sapphire blue body covered in subtle golden zari grid lines, paired with traditional temple triangles and floral creepers.",
      image: "/images/sarees/sapphire-blue-checked-temple-zari.jpg",
      tags: ["Checks", "Temple Zari", "Sapphire Blue"],
      inStock: true,
      colors: ["Sapphire Blue", "Gold Zari"],
      sku: "JYR-TMP-017",
    },
    {
      id: "jyr-018",
      name: "Cerise Magenta Rich Pallu Pure Silk",
      category: "bridal",
      price: "Contact for Price",
      fabric: "Pure Pattu Silk",
      zari: "Dense Peacock & Temple Motif Zari Work",
      description: "Traditional cerise magenta drape woven with auspicious paisley-mango buttas and dense gold zari borders for grand occasions.",
      image: "/images/sarees/cerise-magenta-rich-pallu-silk.jpg",
      tags: ["Cerise Pink", "Grand Occasion", "Pure Pattu"],
      inStock: true,
      colors: ["Cerise Magenta", "Antique Gold"],
      sku: "JYR-BRD-018",
    },
  ],

  // Gallery Photos (for Masonry Showcase & Lightbox)
  gallery: [
    { src: "/images/sarees/wholesale-combo-set-6.jpg", title: "6-Color Wholesale Combo Pack", category: "Wholesale" },
    { src: "/images/sarees/rani-pink-paisley-bridal-silk.jpg", title: "Rani Pink Paisley Bridal Silk", category: "Bridal" },
    { src: "/images/sarees/deep-maroon-purple-brocade-silk.jpg", title: "Deep Maroon & Violet Brocade", category: "Traditional" },
    { src: "/images/sarees/peacock-teal-green-handloom.jpg", title: "Twin Peacock Teal Green Handloom", category: "Handloom" },
    { src: "/images/sarees/haldi-yellow-pink-zari-pattu.jpg", title: "Haldi Yellow & Rani Pink Contrast", category: "Bridal" },
    { src: "/images/sarees/royal-blue-twin-peacock-silk.jpg", title: "Royal Blue Tree of Life Peacock Motif", category: "Weavers Special" },
    { src: "/images/sarees/emerald-green-chakra-mandala-silk.jpg", title: "Emerald Green Chakra Mandala", category: "Temple Style" },
    { src: "/images/sarees/magenta-royal-blue-draped-bridal.jpg", title: "Magenta & Royal Blue Draped Bridal Silk", category: "Bridal" },
    { src: "/images/sarees/rust-copper-purple-silver-draped.jpg", title: "Rust Copper & Purple Silver Zari", category: "Exclusive" },
    { src: "/images/sarees/coral-pink-heavy-zari-bridal-box.jpg", title: "Coral Pink Heavy Zari Bridal Drape", category: "Bridal" },
    { src: "/images/sarees/sapphire-blue-checked-temple-zari.jpg", title: "Sapphire Blue Checked Temple Border", category: "Traditional" },
    { src: "/images/sarees/olive-gold-royal-blue-draped.jpg", title: "Olive Gold & Midnight Blue Draped Saree", category: "Exclusive" },
  ],

  // Testimonials (add real customer testimonials here)
  testimonials: [],

  // Frequently Asked Questions
  faqs: [
    {
      question: "Are these sarees 100% pure silk?",
      answer:
        "Yes, all our sarees are woven from 100% pure natural mulberry silk yarn certified under handloom standards. We do not deal in synthetic blends or powerloom imitations.",
    },
    {
      question: "How do I place a wholesale bulk order?",
      answer:
        "You can directly message us on WhatsApp (+91 96400 08902) or submit the wholesale enquiry form below. We provide catalog assortments, video call loom inspections, and customized combo packs.",
    },
    {
      question: "Do you ship across India?",
      answer:
        "Yes, we provide insured express courier delivery across all Indian states and union territories. Tracking details are shared on WhatsApp as soon as your parcel is dispatched.",
    },
    {
      question: "Can I visit your weaving unit and showroom in Madanapalle?",
      answer:
        "You are most welcome! We are located at III-81-F4, Vivekananda School Road, Mayabazaar, Neerugattuvaripalle, Madanapalle. We are open all 7 days from 9:00 AM to 9:00 PM.",
    },
  ],

  // SEO & OpenGraph Configuration
  seo: {
    title: "Y. Jayaram Silk Sarees | Pure Hand Loom Silk Sarees & Wholesale Manufacturers Madanapalle",
    description:
      "Direct from the weavers of Madanapalle. Buy pure handloom silk sarees, bridal pattu, Kanjivaram-style drapes, and wholesale bulk packs directly from Y. Jayaram & Bro's. Best wholesale prices across Andhra Pradesh & India.",
    keywords: [
      "silk sarees Madanapalle",
      "handloom silk saree manufacturers",
      "wholesale silk sarees Andhra Pradesh",
      "pure silk sarees Chittoor",
      "Y Jayaram silk sarees",
      "pattu sarees wholesale manufacturers",
      "bridal silk sarees Madanapalle",
      "direct weavers silk sarees",
      "Madanapalle handloom pure silk",
      "Kanjivaram style pattu sarees wholesale",
    ],
    siteUrl: "https://jayaramsilks.com",
    locale: "en_IN",
  },

  // Developer / White-Label Credits (can be edited or hidden)
  credits: {
    show: true,
    text: "Handcrafted with pride in Madanapalle, Andhra Pradesh",
    whiteLabelNotice: "White-label ready: Re-brand in 5 minutes via /config/brand.config.js",
  },
};

export default brandConfig;

