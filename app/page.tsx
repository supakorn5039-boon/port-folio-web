import { IconArrowDown, IconArrowUpRight, IconBrandGithub, IconDownload } from "@tabler/icons-react";
import { Nav } from "@/components/nav";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <main id="top">
      <Nav />
      <section id="content" className="hero shell">
        <div className="eyebrow"><span className="status-dot" /> {profile.availability}</div>
        <h1><span>Software built</span><br />to perform <em>under</em><br /><span className="indent"><em>real pressure.</em></span></h1>
        <div className="hero-bottom">
          <div className="hero-intro"><p>{profile.intro}</p><div className="hero-actions"><a href="#work">See my work <IconArrowDown size={17} /></a><a href={profile.resume} download><IconDownload size={17} /> Download CV</a></div></div>
          <a href="#work" className="scroll-cue"><span>Scroll to explore</span><i><IconArrowDown size={18} /></i></a>
        </div>
        <div className="hero-orbit" aria-hidden="true"><span>{profile.initials}</span></div>
      </section>

      <section className="proof-strip shell" aria-label="Career highlights">
        {profile.highlights.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </section>

      <section id="work" className="section shell">
        <Reveal>
          <div className="section-heading"><div><span className="kicker">01 / Selected work</span><h2>Proof, not<br /><em>just promises.</em></h2></div><p>Production systems where I owned meaningful technical decisions and delivered measurable outcomes.</p></div>
        </Reveal>
        <div className="project-grid">
          {profile.projects.map((project, index) => <Reveal key={project.number} className={index === 1 ? "project-offset" : ""}><ProjectCard project={project} /></Reveal>)}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="shell about-grid">
          <Reveal><span className="kicker">02 / A little about me</span></Reveal>
          <Reveal className="about-copy"><h2>Building with <em>intention.</em><br />Sweating the right details.</h2><p>{profile.about}</p></Reveal>
          <Reveal className="skill-list">{profile.skillGroups.map((group) => <div key={group.title}><span>{group.number}</span><strong>{group.title}<small>{group.items}</small></strong></div>)}</Reveal>
          <Reveal className="profile-tile"><div className="portrait-placeholder"><span>{profile.initials}</span><div className="portrait-ring" /></div><div><strong>{profile.name}</strong><small>{profile.role}<br />{profile.location}</small></div></Reveal>
        </div>
      </section>

      <section id="experience" className="section shell experience">
        <Reveal><span className="kicker">03 / Experience</span><h2>The path<br /><em>so far.</em></h2></Reveal>
        <div className="timeline">
          {profile.experience.map((item, i) => <Reveal key={i} className="timeline-row"><span className="period">{item.period}</span><div><h3>{item.role}</h3><strong>{item.company}</strong></div><p>{item.summary}</p></Reveal>)}
        </div>
      </section>

      <section className="credentials shell">
        <Reveal className="credential-card"><span className="kicker">Education</span><h3>{profile.education.degree}</h3><p>{profile.education.field}<br />{profile.education.school}</p><small>{profile.education.score}</small></Reveal>
        <Reveal className="credential-card"><span className="kicker">Credentials</span>{profile.certifications.map((item) => <h4 key={item}>{item}</h4>)}</Reveal>
        <Reveal className="credential-card"><span className="kicker">Languages</span>{profile.languages.map((item) => <h4 key={item}>{item}</h4>)}</Reveal>
      </section>

      <footer id="contact">
        <div className="shell footer-inner">
          <Reveal><span className="kicker light">Looking for an engineer who takes ownership?</span><h2>Let&apos;s build<br /><em>what matters.</em></h2><div className="footer-actions"><a className="email-button" href={`mailto:${profile.email}`}>{profile.email}<IconArrowUpRight size={22} /></a><a className="download-button" href={profile.resume} download><IconDownload size={19} /> Download CV</a><a className="download-button" href={profile.socials.github} target="_blank" rel="noreferrer"><IconBrandGithub size={19} /> GitHub</a></div></Reveal>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
      </main>
    </>
  );
}
