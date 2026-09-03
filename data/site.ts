const fallbackUrl = "https://port-folio-web-amber.vercel.app";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : fallbackUrl)
).replace(/\/$/, "");
