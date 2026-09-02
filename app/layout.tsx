import type { Metadata, Viewport } from "next";
import "./globals.css";

const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? productionUrl),
  title: "Supakorn Udomsintuwat — Full Stack Software Engineer",
  description: "Full Stack Software Engineer building high-volume data platforms and production web applications with React, TypeScript, Go, Laravel, and PostgreSQL.",
  keywords: ["Supakorn Udomsintuwat", "Full Stack Engineer", "React", "TypeScript", "Go", "Laravel", "PostgreSQL", "Thailand"],
  authors: [{ name: "Supakorn Udomsintuwat" }],
  creator: "Supakorn Udomsintuwat",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Supakorn Udomsintuwat — Full Stack Software Engineer",
    description: "Architecture to production. Reliable software, measurable outcomes.",
    type: "website",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f0e8",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
