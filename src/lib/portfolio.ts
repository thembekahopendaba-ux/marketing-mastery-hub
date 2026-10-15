import cvAsset from '@/assets/cv.asset.json';

export const profile = {
  name: 'Hope Thembeka Ndaba',
  wordmark: 'hope',
  email: 'thembekahopendaba@gmail.com',
  phone: '076 199 3749',
  phoneHref: 'tel:+27761993749',
  location: 'Protea Glen, Soweto',
  linkedin: '',
  github: '',
  cv: { url: cvAsset.url, filename: 'Hope_Ndaba_CV.pdf' },
};

export const hero = {
  eyebrow: "HELLO, I'M HOPE NDABA",
  headline: ['Customer-first.', 'Calm under pressure.', 'Service that sticks.'],
  pitch: 'Live chat and front-of-house professional with hands-on experience handling high-volume customer queries, technical and billing issues, and keeping every conversation quick, clear, and human.',
};

export const expertise = [
  'Live chat support',
  'Query resolution',
  'Freshdesk CRM',
  'Retention & upselling',
  'Customer satisfaction',
];

export const about = {
  intro: 'A service-first mindset.<br/>Calm, clear, and always learning.',
  copy: [
    "I'm Hope — a customer service professional who started at the front-of-house counter and moved into high-volume live chat support for DStv, GoTV, and Showmax.",
    'I believe good service starts with <strong>listening properly</strong>. Whether it is a billing query, a technical fault, or someone who just needs guiding through their options, my aim is to resolve it at the first contact and leave the customer better than I found them.',
    'I pick up new systems quickly, write clearly, and stay steady when the queue is long. Next, I want a team and a product I can grow with — where quality service is taken seriously.',
  ],
  signoff: 'Fast learner. Detail-driven. First-contact resolution, every time.',
};

export const education = [
  {
    title: 'National Senior Certificate (Grade 12)',
    org: 'DR B W Vilakazi Secondary School',
    date: '2022',
  },
];

export const experience = [
  {
    type: 'CUSTOMER SERVICE',
    role: 'Live Chat Agent — MultiChoice Campaign',
    company: 'Afrizan People Intelligence',
    period: 'May 2023 – December 2024',
    summary:
      'High-volume live chat support across DStv, GoTV, and Showmax — technical faults, billing queries, service upgrades, and retention.',
    bullets: [
      'Managed high volumes of customer queries via live chat, delivering prompt and professional responses across DStv, GoTV, and Showmax platforms.',
      'Resolved technical issues, billing queries, and service upgrade requests, consistently achieving positive customer satisfaction outcomes.',
      'Logged and documented all customer interactions, escalations, and resolutions accurately using Freshdesk CRM.',
      'Applied in-depth product knowledge to guide customers through troubleshooting steps and service changes.',
      'Identified upselling and retention opportunities during interactions, contributing to improved customer loyalty.',
    ],
    tags: ['Freshdesk CRM', 'DStv · GoTV · Showmax', 'Billing & technical', 'Escalations', 'Retention'],
  },
  {
    type: 'FRONT OF HOUSE',
    role: 'Waitress',
    company: 'Legend Pub and Grill',
    period: '2022 – 2023',
    summary:
      'Fast-paced hospitality service where reading the room and staying calm under pressure made the difference.',
    bullets: [
      'Delivered attentive table service in a fast-paced hospitality environment, ensuring a positive guest experience.',
      'Handled customer requests and complaints calmly and efficiently, demonstrating strong interpersonal skills.',
      'Maintained cleanliness and organisation of the service area in line with establishment standards.',
    ],
    tags: ['Table service', 'Guest experience', 'Complaint handling', 'Service standards'],
  },
];

export const skills = [
  {
    title: 'CRM & Systems',
    subtitle: 'The tools I work in',
    items: ['Freshdesk CRM', 'DStv, GoTV & Showmax products', 'Query logging & documentation', 'Escalation tracking'],
  },
  {
    title: 'Customer Service',
    subtitle: 'Right the first time',
    items: ['Live chat support', 'Query resolution', 'Complaint handling', 'Upselling & retention'],
  },
  {
    title: 'Communication',
    subtitle: 'Clear, calm, professional',
    items: ['Written communication', 'Active listening', 'Professional tone', 'Escalation management'],
  },
  {
    title: 'Soft skills',
    subtitle: 'How I show up',
    items: ['Attention to detail', 'Adaptability', 'Team collaboration', 'Self-motivation', 'Time management'],
  },
];
