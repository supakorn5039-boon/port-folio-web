import type { Metadata, Viewport } from "next";
import { profile } from "@/data/profile";
import { siteUrl } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Supakorn Udomsintuwat — Full Stack Software Engineer",
  description: "Full Stack Software Engineer building high-volume data platforms and production web applications with React, TypeScript, Go, Laravel, and PostgreSQL.",
  keywords: ["Supakorn Udomsintuwat", "Full Stack Engineer", "React", "TypeScript", "Go", "Laravel", "PostgreSQL", "Thailand"],
  authors: [{ name: "Supakorn Udomsintuwat" }],
  creator: "Supakorn Udomsintuwat",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Supakorn Udomsintuwat — Full Stack Software Engineer",
    description: "Architecture to production. Reliable software, measurable outcomes.",
    type: "website",
    url: "/",
    siteName: "Supakorn Udomsintuwat — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supakorn Udomsintuwat — Full Stack Software Engineer",
    description: "Architecture to production. Reliable software, measurable outcomes.",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chiang Mai",
    addressCountry: "TH",
  },
  sameAs: [profile.socials.github],
  knowsAbout: profile.skillGroups.flatMap((group) => group.items.split(", ")),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f0e8",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
