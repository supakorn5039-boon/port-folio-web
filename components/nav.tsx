"use client";

import { useEffect, useState } from "react";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconDownload,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { profile } from "@/data/profile";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("menu-is-open", menuOpen);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("menu-is-open");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav shell ${menuOpen ? "menu-open" : ""}`}>
      <a className="monogram" href="#top" aria-label="Back to top">{profile.initials}<span>.</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
      </nav>
      <div className="nav-actions">
        <a className="resume-link" href={profile.resume} download><IconDownload size={16} /> Resume</a>
        <a className="contact-link" href={`mailto:${profile.email}`}>Let&apos;s talk <IconArrowUpRight size={17} stroke={1.8} /></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <a href="#work" onClick={closeMenu}><span>01</span> Work</a>
          <a href="#about" onClick={closeMenu}><span>02</span> About</a>
          <a href="#experience" onClick={closeMenu}><span>03</span> Experience</a>
        </nav>
        <div className="mobile-menu-footer">
          <a href={`mailto:${profile.email}`} onClick={closeMenu}>{profile.email}<IconArrowUpRight size={18} /></a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer"><IconBrandGithub size={18} /> GitHub</a>
        </div>
      </div>
    </header>
  );
}
