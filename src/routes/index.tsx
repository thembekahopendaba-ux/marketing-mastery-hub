import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, Download, Menu, X, Linkedin, Github, Mail, MapPin, GraduationCap, Database, Users, MessageSquare, Sparkles, Asterisk, Check, Send, ArrowUp, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile, hero, expertise, about, education, experience, skills } from '@/lib/portfolio';
import heroArt from '@/assets/hero-art.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Hope Ndaba — Customer Service Professional' },
    { name: 'description', content: 'Hope Thembeka Ndaba: live chat and front-of-house customer service experience, Freshdesk CRM, and high-volume query resolution. View the CV and get in touch.' },
    { property: 'og:title', content: 'Hope Ndaba — Customer Service Professional' },
    { property: 'og:description', content: 'Live chat support, query resolution, and first-contact service that keeps customers. Hope Ndaba’s portfolio and CV.' },
    { property: 'og:type', content: 'profile' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});

const navigation = ['About', 'Skills', 'Experience', 'Contact'];
const skillIcons = [Database, Users, MessageSquare, Sparkles];

function Socials() {
  return <div className="socials">
    <a href={`mailto:${profile.email}`} aria-label="Email Hope"><Mail size={17}/></a>
    <a href={profile.phoneHref} aria-label={`Call ${profile.phone}`}><Phone size={16}/></a>
    {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16}/></a>}
    {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16}/></a>}
  </div>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
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
    const subject = String(data.get('subject') || 'Opportunity for Hope');
    const body = `${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftReady(true);
  };
  return <>
    <header className="site-header"><div className="container nav-inner">
      <a className="wordmark" href="#home" aria-label={`${profile.name} home`}>{profile.wordmark}<span>.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item} className={`nav-link ${active === item.toLowerCase() ? 'active' : ''}`} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
      <Button asChild variant="outline" className="nav-cta"><a href="#contact">Let’s talk <ArrowUpRight/></a></Button>
      <Button variant="ghost" size="icon" className="mobile-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
    </div>{menuOpen && <nav id="mobile-navigation" className="container mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <a className="nav-link" key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>}</header>
    <main>
      <section className="hero" id="home">
        <img className="hero-art" src={heroArt} alt="Sculptural chrome asterisk intertwined with a lime ribbon" width={1536} height={1024} fetchPriority="high"/>
        <div className="container hero-content"><div className="available"><span className="status-dot"/> OPEN TO NEW OPPORTUNITIES</div>
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1>{hero.headline[0]}<br/>{hero.headline[1]}<span>{hero.headline[2]}</span></h1>
          <p className="hero-pitch">{hero.pitch}</p>
          <div className="hero-actions"><Button size="lg" asChild><a href="#contact">Contact me <ArrowUpRight/></a></Button><Button variant="outline" size="lg" asChild><a href={profile.cv.url} download={profile.cv.filename}>Download CV <Download/></a></Button></div>
        </div>
        <div className="container hero-bottom"><div className="hero-note"><MapPin size={12}/> BASED IN {profile.location.toUpperCase()} · THINKING GLOBALLY</div><Socials/></div>
      </section>
      <div className="expertise-strip"><div className="container expertise-inner">{expertise.map((item, i) => <span key={item} className="flex items-center gap-5"><span>{item}</span>{i < expertise.length - 1 && <Asterisk/>}</span>)}</div></div>
      <section className="section" id="about"><div className="container">
        <div className="section-header"><div><div className="eyebrow">01 / A LITTLE ABOUT ME</div><h2>Service is a skill.</h2></div><p className="section-intro">{about.intro}</p></div>
        <div className="about-grid"><div className="about-copy">{about.copy.map((paragraph, i) => <p key={i}>{paragraph.includes('strong') ? <span dangerouslySetInnerHTML={{ __html: paragraph }}/> : paragraph}</p>)}<div className="about-signoff"><Asterisk size={16}/> {about.signoff}</div></div>
          <div><div className="education-title">EDUCATION & QUALIFICATIONS</div>{education.map(item => <div className="education" key={item.title}><div className="icon-tile"><GraduationCap size={21}/></div><div><h3>{item.title}</h3><p>{item.org}</p><time>{item.date}</time></div></div>)}</div>
        </div></div></section>
      <section className="section" id="skills"><div className="container"><div className="section-header"><div><div className="eyebrow">02 / MY TOOLKIT</div><h2>Capable, and getting more so.</h2></div><p className="section-intro">The systems, service habits, and people skills<br/>I bring to a team from day one.</p></div>
        <div className="skills-grid">{skills.map((skill, i) => { const Icon = skillIcons[i]; return <article className="skill-card" key={skill.title}>{Icon && <Icon/>}<h3>{skill.title}</h3><p>{skill.subtitle}</p><ul>{skill.items.map(item => <li key={item}>{item}</li>)}</ul></article>; })}</div>
      </div></section>
      <section className="section" id="experience"><div className="container"><div className="section-header"><div><div className="eyebrow">03 / WHERE I’VE WORKED</div><h2>Experience that built the instincts.</h2></div><p className="section-intro">Two very different rooms, one standard:<br/>stay calm, be useful, close the loop.</p></div>
        <div className="experience-grid">{experience.map(job => <article className="experience-card" key={job.role}><div className="experience-top"><div><div className="experience-type">{job.type}</div><h3>{job.role}</h3><div className="experience-company">{job.company}</div></div><time className="experience-dates">{job.period}</time></div><p className="experience-summary">{job.summary}</p><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><div className="tags">{job.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></article>)}</div>
        <div className="experience-note"><Asterisk size={14}/> References available on request.</div>
      </div></section>
      <section className="section contact-section" id="contact"><div className="container contact-grid"><div><div className="eyebrow">04 / THE NEXT CHAPTER</div><h2>Need someone your<br/>customers <span>will remember?</span></h2><p className="contact-copy">Hiring for a support, service, or customer experience role? I’d love to hear about it.</p><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={20}/>{profile.email}<ArrowUpRight size={16}/></a><a className="contact-phone" href={profile.phoneHref}><Phone size={18}/>{profile.phone}</a></div>
        <form onSubmit={submitContact}><div className="form-grid"><div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="Who’s reaching out?" required autoComplete="name" maxLength={100}/></div><div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email"/></div></div><div className="field"><label htmlFor="subject">What’s on your mind?</label><input id="subject" name="subject" placeholder="A role, an interview, a question…" required maxLength={200}/></div><div className="field"><label htmlFor="message">Your message</label><textarea id="message" name="message" placeholder="Tell me a little more…" required maxLength={5000}/></div><Button type="submit" size="lg" className="w-full">{draftReady ? 'Open email draft again' : 'Let’s connect'}{draftReady ? <Check/> : <Send/>}</Button><p className="form-note" role="status">{draftReady ? 'Your email draft is ready. Send it from your email app to complete your message.' : 'Opens your email app with a prepared message.'}</p></form></div></section>
    </main>
    <footer><div className="container footer-inner"><a className="wordmark" href="#home">{profile.wordmark}<span>.</span></a><p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p><a className="footer-top" href="#home">Back to top <ArrowUp size={13}/></a></div><div className="container flex justify-between items-center mt-5"><span className="text-[10px] text-muted-foreground">Customer service portfolio · References available on request</span><Socials/></div></footer>
  </>;
}
