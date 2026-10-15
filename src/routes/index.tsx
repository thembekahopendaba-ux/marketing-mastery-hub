import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowRight, ArrowDown, Download, Menu, X, Linkedin, Github, Mail, MapPin, GraduationCap, Code2, Database, Wrench, Users, Asterisk, Check, Send, ArrowUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { profile, projects, skills } from '@/lib/portfolio';
import heroArt from '@/assets/hero-art.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Alex Morgan — Marketing & Digital Strategy' },
    { name: 'description', content: 'Alex Morgan’s portfolio: strategic thinking, creative storytelling, and digital experiences. Explore projects, qualifications, and marketing expertise.' },
    { property: 'og:title', content: 'Alex Morgan — Marketing & Digital Strategy' },
    { property: 'og:description', content: 'Strategy meets creativity. Explore Alex Morgan’s marketing and digital portfolio.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});

const navigation = ['About', 'Skills', 'Projects', 'Certifications', 'Contact'];
const certifications = [
  { brand: 'Google', mark: 'G', name: 'Digital Marketing & E-commerce', org: 'Google Career Certificates', date: 'June 2026', url: 'https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce' },
  { brand: 'HubSpot', mark: 'H', name: 'Inbound Marketing Certification', org: 'HubSpot Academy', date: 'April 2026', url: 'https://academy.hubspot.com/courses/inbound-marketing' },
  { brand: 'Meta', mark: '∞', name: 'Social Media Marketing', org: 'Meta Professional Certificates', date: 'February 2026', url: 'https://www.coursera.org/professional-certificates/facebook-social-media-marketing' },
];
function Socials() {
  return <div className="socials"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16}/></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16}/></a><a href={`mailto:${profile.email}`} aria-label="Email Alex"><Mail size={17}/></a></div>;
}
function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [filter, setFilter] = useState('All work');
  const [selected, setSelected] = useState<number | null>(null);
  const [draftReady, setDraftReady] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-20% 0px -55% 0px' });
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get('subject') || 'Let’s work together');
    const body = `${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftReady(true);
  };
  const project = selected === null ? null : projects[selected];
  const visibleProjects = projects.filter(item => filter === 'All work' || (filter === 'Brand strategy' ? item.category === 'BRAND STRATEGY' : item.category !== 'BRAND STRATEGY'));
  return <>
    <header className="site-header"><div className="container nav-inner">
      <a className="wordmark" href="#home" aria-label="Alex Morgan home">alex<span>.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item} className={`nav-link ${active === item.toLowerCase() ? 'active' : ''}`} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
      <Button asChild variant="outline" className="nav-cta"><a href="#contact">Let’s talk <ArrowUpRight/></a></Button>
      <Button variant="ghost" size="icon" className="mobile-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
    </div>{menuOpen && <nav id="mobile-navigation" className="container mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <a className="nav-link" key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>}</header>
    <main>
      <section className="hero" id="home">
        <img className="hero-art" src={heroArt} alt="Sculptural chrome asterisk intertwined with a lime ribbon" width={1536} height={1024} fetchPriority="high"/>
        <div className="container hero-content"><div className="available"><span className="status-dot"/> OPEN TO OPPORTUNITIES</div>
          <div className="eyebrow">HELLO, I’M ALEX MORGAN</div>
          <h1>Strategic mind.<br/>Creative heart.<span>Marketing impact.</span></h1>
          <p className="hero-pitch">Aspiring Marketing Director at the intersection of brand strategy, digital experiences, and meaningful growth.</p>
          <div className="hero-actions"><Button size="lg" asChild><a href="#contact">Contact me <ArrowUpRight/></a></Button><Button variant="outline" size="lg" asChild><a href="/alex-morgan-resume.pdf" download>Download resume <Download/></a></Button></div>
        </div>
        <div className="container hero-bottom"><div className="hero-note"><MapPin size={12}/> BASED IN JOHANNESBURG · THINKING GLOBALLY</div><Socials/></div>
      </section>
      <div className="expertise-strip"><div className="container expertise-inner"><span>Brand strategy</span><Asterisk/><span>Digital marketing</span><Asterisk/><span>Creative storytelling</span><Asterisk/><span>Data-driven growth</span><Asterisk/><span>Web development</span></div></div>
      <section className="section" id="about"><div className="container">
        <div className="section-header"><div><div className="eyebrow">01 / A LITTLE ABOUT ME</div><h2>Curiosity fuels my ambition.</h2></div><p className="section-intro">A creative thinker with a business mindset.<br/>Always learning. Always looking forward.</p></div>
        <div className="about-grid"><div className="about-copy"><p>I’m Alex — a marketing enthusiast, creative problem-solver, and digital builder with an ambition to lead brands that make a difference.</p><p>I believe great marketing starts with <strong>understanding people</strong>. By combining strategic thinking with hands-on technical skills, I turn ideas into experiences that connect, inspire, and deliver real value.</p><p>My goal? To grow into a Marketing Director who brings out the best in both brands and the people behind them.</p><div className="about-signoff"><Asterisk size={16}/> Big-picture thinking. Detail-driven execution.</div></div>
          <div><div className="education-title">EDUCATION & QUALIFICATIONS</div><div className="education"><div className="icon-tile"><GraduationCap size={21}/></div><div><h3>Bachelor of Commerce in Marketing</h3><p>University of Johannesburg</p><time>2022 — 2025</time></div></div><div className="education"><div className="icon-tile"><Award size={21}/></div><div><h3>Diploma in Digital Marketing</h3><p>Digital School of Marketing</p><time>2025 — 2026</time></div></div></div>
        </div></div></section>
      <section className="section" id="skills"><div className="container"><div className="section-header"><div><div className="eyebrow">02 / MY TOOLKIT</div><h2>Creative meets capable.</h2></div><p className="section-intro">A multidisciplinary skill set to take ideas from<br/>the first spark to the final experience.</p></div>
        <div className="skills-grid">{skills.map((skill, i) => { const Icon = [Code2, Database, Wrench, Users][i]; return <article className="skill-card" key={skill.title}>{Icon && <Icon/>}<h3>{skill.title}</h3><p>{skill.subtitle}</p><ul>{skill.items.map(item => <li key={item}>{item}</li>)}</ul></article>; })}</div>
      </div></section>
      <section className="section" id="projects"><div className="container"><div className="section-header"><div><div className="eyebrow">03 / SELECTED WORK</div><h2>Ideas turned into impact.</h2></div><div className="project-filters" aria-label="Filter projects">{['All work', 'Brand strategy', 'Digital & growth'].map(item => <Button key={item} size="sm" variant={filter === item ? 'secondary' : 'ghost'} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</Button>)}</div></div>
        <div className="project-grid">{visibleProjects.map(item => <article className="project-card" key={item.name}><div className="project-image-wrap"><img className="project-image" src={item.image} alt={`${item.name} campaign concept`} width={1024} height={768} loading="lazy"/><span className="project-number">0{projects.indexOf(item) + 1} / {item.year}</span></div><div className="project-category">{item.category}</div><h3>{item.name}</h3><p>{item.description}</p><div className="tags">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><div className="project-links"><Button variant="ghost" size="sm" className="px-0" onClick={() => setSelected(projects.indexOf(item))}>View project <ArrowUpRight/></Button><Button variant="ghost" size="icon" asChild><a href={profile.github} target="_blank" rel="noreferrer" aria-label={`${item.name} GitHub`}><Github/></a></Button></div></article>)}</div>
      </div></section>
      <section className="section" id="certifications"><div className="container"><div className="section-header"><div><div className="eyebrow">04 / KEEPING MY EDGE</div><h2>Learning never stands still.</h2></div><p className="section-intro">Building a stronger foundation, one new<br/>perspective and qualification at a time.</p></div><div className="cert-grid">{certifications.map(cert => <article className="cert-card" key={cert.brand}><div className="cert-brand"><span>{cert.mark}</span>{cert.brand}</div><h3>{cert.name}</h3><p>{cert.org}</p><div className="cert-bottom"><span>Issued {cert.date}</span><Button variant="ghost" size="sm" asChild><a href={cert.url} target="_blank" rel="noreferrer">Program <ArrowUpRight/></a></Button></div></article>)}</div></div></section>
      <section className="section contact-section" id="contact"><div className="container contact-grid"><div><div className="eyebrow">05 / THE NEXT CHAPTER</div><h2>Great things start<br/>with <span>a conversation.</span></h2><p className="contact-copy">Have an opportunity, an idea, or just a good question? I’d love to hear from you. Let’s make something meaningful together.</p><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={20}/>{profile.email}<ArrowUpRight size={16}/></a><Socials/></div><form onSubmit={submitContact}><div className="form-grid"><div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="Alex, meet…" required autoComplete="name" maxLength={100}/></div><div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email"/></div></div><div className="field"><label htmlFor="subject">What’s on your mind?</label><input id="subject" name="subject" placeholder="An opportunity, a collaboration, an idea…" required maxLength={200}/></div><div className="field"><label htmlFor="message">Your message</label><textarea id="message" name="message" placeholder="Tell me a little more…" required maxLength={5000}/></div><Button type="submit" size="lg" className="w-full">{draftReady ? 'Open email draft again' : 'Let’s connect'}{draftReady ? <Check/> : <Send/>}</Button><p className="form-note" role="status">{draftReady ? 'Your email draft is ready. Send it from your email app to complete your message.' : 'Opens your email app with a prepared message. Sample contact details.'}</p></form></div></section>
    </main>
    <footer><div className="container footer-inner"><a className="wordmark" href="#home">alex<span>.</span></a><p>© {new Date().getFullYear()} Alex Morgan. Made with purpose.</p><a className="footer-top" href="#home">Back to top <ArrowUp size={13}/></a></div><div className="container flex justify-between items-center mt-5"><span className="text-[10px] text-muted-foreground">Concept portfolio · Sample biography, qualifications, and projects</span><Socials/></div></footer>
    <Dialog open={project !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="project-dialog">{project && <><img className="project-dialog-image" src={project.image} alt={project.name} width={1024} height={768}/><span className="demo-label">CONCEPT PROJECT / {project.year}</span><DialogTitle>{project.name}</DialogTitle><DialogDescription className="leading-relaxed">{project.detail}</DialogDescription><div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><p className="text-xs text-muted-foreground">{project.result}. This is a portfolio concept, not a published client campaign.</p><div className="flex gap-3"><Button asChild><a href={project.image} target="_blank" rel="noreferrer">Live visual preview <ArrowUpRight/></a></Button><Button asChild variant="outline"><a href={profile.github} target="_blank" rel="noreferrer"><Github/> GitHub</a></Button></div></>}</DialogContent></Dialog>
  </>;
}
