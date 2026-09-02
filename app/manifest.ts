import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Supakorn Udomsintuwat — Portfolio",
    short_name: "Supakorn",
    description: "Full Stack Software Engineer building reliable, high-volume production systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2f0e8",
    theme_color: "#f2f0e8",
  };
}
