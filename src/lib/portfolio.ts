import formaImage from '@/assets/project-forma.jpg';
import moveImage from '@/assets/project-move.jpg';
import energyImage from '@/assets/project-energy.jpg';

export const profile = {
  name: 'Alex Morgan',
  email: 'hello@alexmorgan.example',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
};

export const projects = [
  { name: 'FORMA — A fresh perspective', category: 'BRAND STRATEGY', image: formaImage, tags: ['Brand positioning', 'Figma', 'Webflow'], description: 'An integrated brand and digital experience for a mindful skincare concept. From audience insights to a distinctive visual identity.', result: 'Brand identity & digital experience', detail: 'A concept-led campaign built around a simple insight: skincare should feel like a moment of balance. The strategy connects a calm visual identity, an accessible storefront, and an educational social content series.', year: '2026' },
  { name: 'Altura — Make your move', category: 'GROWTH MARKETING', image: moveImage, tags: ['Campaign strategy', 'Meta Ads', 'Analytics'], description: 'A performance-driven launch concept connecting an active community with a new generation of sportswear.', result: 'Integrated launch campaign', detail: 'An audience-first launch strategy pairing bold creative with a measurable acquisition funnel. The concept includes paid social variations, a conversion-focused landing page, and a campaign measurement framework.', year: '2026' },
  { name: 'Good Energy — Beyond the buzz', category: 'CONTENT & DIGITAL', image: energyImage, tags: ['Content strategy', 'React', 'SEO'], description: 'A bold beverage launch concept bringing together storytelling, a digital-first experience, and community.', result: 'Content ecosystem & website', detail: 'An energetic digital concept designed to turn a product launch into a conversation. A content calendar, creator partnerships, and a React landing page support a consistent brand story across every touchpoint.', year: '2025' },
];

export const skills = [
  { title: 'Frontend', subtitle: 'Experiences that connect', icon: 'code', items: ['React & Next.js', 'HTML & CSS', 'Tailwind CSS', 'Responsive design'] },
  { title: 'Backend', subtitle: 'The thinking behind the screen', icon: 'database', items: ['Node.js fundamentals', 'REST APIs', 'SQL fundamentals', 'Data integration'] },
  { title: 'Tools & DevOps', subtitle: 'A smarter way to work', icon: 'tools', items: ['Figma & Adobe CC', 'Git & GitHub', 'Google Analytics 4', 'HubSpot & Meta Ads'] },
  { title: 'Soft skills', subtitle: 'People make the difference', icon: 'people', items: ['Strategic thinking', 'Creative storytelling', 'Team leadership', 'Clear communication'] },
];