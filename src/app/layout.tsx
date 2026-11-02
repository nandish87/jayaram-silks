import type { Metadata } from "next";
import "./globals.css";
import brandConfig from "@config/brand.config";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL(brandConfig.seo.siteUrl),
  title: brandConfig.seo.title,
  description: brandConfig.seo.description,
  keywords: brandConfig.seo.keywords,
  openGraph: {
    title: brandConfig.seo.title,
    description: brandConfig.seo.description,
    url: brandConfig.seo.siteUrl,
    siteName: brandConfig.businessName,
    images: [
      {
        url: brandConfig.ogImage,
        width: 1200,
        height: 630,
        alt: brandConfig.businessName,
      },
    ],
    locale: brandConfig.seo.locale,
    type: "website",
  },
  icons: {
    icon: brandConfig.favicon,
    apple: brandConfig.logoMark,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Dynamic CSS variables from brand.config.js for complete white-label color control
  const themeStyles = `
    :root {
      --brand-primary: ${brandConfig.theme.colors.primary};
      --brand-primary-dark: ${brandConfig.theme.colors.primaryDark};
      --brand-secondary: ${brandConfig.theme.colors.secondary};
      --brand-secondary-light: ${brandConfig.theme.colors.secondaryLight};
      --brand-accent-gold: ${brandConfig.theme.colors.accentGold};
      --brand-accent-gold-light: ${brandConfig.theme.colors.accentGoldLight};
      --brand-bg-cream: ${brandConfig.theme.colors.bgCream};
      --brand-bg-card: ${brandConfig.theme.colors.bgCard};
      --brand-text-dark: ${brandConfig.theme.colors.textDark};
      --brand-text-muted: ${brandConfig.theme.colors.textMuted};
      --brand-border-gold: ${brandConfig.theme.colors.borderGold};
      --font-serif: ${brandConfig.theme.fonts.heading};
      --font-sans: ${brandConfig.theme.fonts.body};
    }
  `;

  // LocalBusiness & Store JSON-LD Schema for rich Google search ranking
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store"],
    "@id": brandConfig.seo.siteUrl,
    name: brandConfig.businessName,
    alternateName: brandConfig.ownerName,
    description: brandConfig.shortDescription,
    url: brandConfig.seo.siteUrl,
    telephone: brandConfig.phones[0],
    image: `${brandConfig.seo.siteUrl}${brandConfig.ogImage}`,
    logo: `${brandConfig.seo.siteUrl}${brandConfig.logo}`,
    priceRange: "₹₹ - ₹₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer, Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${brandConfig.address.line1}, ${brandConfig.address.area}`,
      addressLocality: brandConfig.address.city,
      addressRegion: brandConfig.address.state,
      postalCode: brandConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.5562,
      longitude: 78.4912,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: Object.values(brandConfig.socialLinks).filter(Boolean),
  };

  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col silk-texture-bg text-brand-textDark antialiased selection:bg-brand-accentGold selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
