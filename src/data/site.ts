// Central site configuration & content.
// Ganti nilai di sini untuk memperbarui konten tanpa menyentuh komponen.

export const site = {
  name: "Paskalis Eogene Siswanto",
  role: "Product Designer & QA",
  tagline: "Designing clean, functional products — built on honesty and precision.",
  location: "Semarang, Central Java, Indonesia",
  email: "paskaliseogene01@gmail.com",
  socials: {
    instagram: "https://instagram.com/snx.eo",
    linkedin: "https://www.linkedin.com/in/paskalis-eogene-siswanto-9596b4286/",
  },
  instagramHandle: "@snx.eo",
} as const;

export const about = {
  paragraphs: [
    "Paskalis Eogene Siswanto is a Product Designer and QA based in Semarang, Central Java, Indonesia, and a Computer Science undergraduate at Binus University. His path into design began during his studies, when he repeatedly proposed UI improvements to indie game developers — a habit that, over the past year and a half, grew into a dedicated pursuit of product design.",
    "He specializes in prototyping, design systems, visual design, and testing, working primarily with Figma and Adobe Illustrator. Guided by a clean and functional philosophy, he places great value on thorough preparation before building anything, and holds honesty and precision as the core principles of his work.",
    "Beyond design, Paskalis is a photography enthusiast — drawn to street, sports, and automotive subjects — which sharpens his sense of color and framing. He also enjoys reading, an interest that continues to broaden his perspective.",
  ],
  skills: ["Prototyping", "Design Systems", "Visual Design", "Testing / QA"],
  tools: ["Figma", "Adobe Illustrator"],
  education: "B.Sc. Computer Science — Binus University",
} as const;

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  role: string;
  duration: string;
  tools: string[];
  client: string;
  problem: string;
  goals: string[];
  process: { title: string; description: string }[];
  outcome: string;
  prototypeUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "indie-game-ui-revamp",
    title: "Indie Game UI Revamp",
    summary:
      "Redesigned the in-game menus and HUD of an indie title to improve clarity and player onboarding.",
    tags: ["Game UI", "Visual Design", "Prototyping"],
    role: "Product Designer",
    duration: "6 weeks",
    tools: ["Figma", "Adobe Illustrator"],
    client: "Indie Game Studio (concept)",
    problem:
      "Players struggled to navigate cluttered menus and often missed key actions during the first session.",
    goals: [
      "Simplify the main menu and settings hierarchy",
      "Make core actions discoverable within the first minute",
      "Establish a reusable UI style for future updates",
    ],
    process: [
      { title: "Research", description: "Reviewed player feedback and mapped the existing navigation flow." },
      { title: "Wireframe", description: "Sketched low-fidelity layouts to test hierarchy and grouping." },
      { title: "Visual Design", description: "Built a clean, high-contrast UI kit aligned with the game's tone." },
      { title: "Prototype", description: "Created an interactive prototype for playtesting and iteration." },
    ],
    outcome:
      "The revamped UI reduced first-session confusion in playtests and provided a consistent component set for future releases.",
    prototypeUrl: "#",
  },
  {
    slug: "mobile-fitness-app",
    title: "Mobile Fitness App",
    summary:
      "End-to-end product design for a habit-focused fitness app, from user flows to a scalable design system.",
    tags: ["Mobile App", "Design System", "UX"],
    role: "Product Designer & QA",
    duration: "8 weeks",
    tools: ["Figma"],
    client: "Personal project",
    problem:
      "Users abandon fitness apps quickly because tracking feels tedious and progress is hard to see.",
    goals: [
      "Reduce friction in daily logging",
      "Visualize progress in a motivating way",
      "Ship a consistent, testable component library",
    ],
    process: [
      { title: "Research", description: "Explored habit-formation patterns and competitor onboarding flows." },
      { title: "User Flow", description: "Defined the core loop: log → see progress → get nudged." },
      { title: "Design System", description: "Created tokens, components, and states for consistency and QA." },
      { title: "Testing", description: "Ran usability checks and logged issues against acceptance criteria." },
    ],
    outcome:
      "Delivered a cohesive design system and a streamlined logging flow that cut the steps to record a workout in half.",
    prototypeUrl: "#",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    summary:
      "A clean, data-dense dashboard designed for clarity, scannability, and reliable QA hand-off.",
    tags: ["Web", "Dashboard", "Visual Design"],
    role: "Product Designer",
    duration: "5 weeks",
    tools: ["Figma", "Adobe Illustrator"],
    client: "Concept project",
    problem:
      "Stakeholders needed to read key metrics at a glance, but the existing dashboard buried them in noise.",
    goals: [
      "Surface the most important metrics first",
      "Establish a consistent charting and spacing system",
      "Make the layout responsive and accessible",
    ],
    process: [
      { title: "Research", description: "Interviewed users to rank the metrics they check most often." },
      { title: "Wireframe", description: "Prioritized content with a clear visual hierarchy." },
      { title: "Visual Design", description: "Applied a restrained palette and consistent chart styling." },
      { title: "QA", description: "Documented states and edge cases for a smooth developer hand-off." },
    ],
    outcome:
      "The redesign made primary KPIs immediately visible and set a reusable pattern for future dashboard views.",
    prototypeUrl: "#",
  },
];

export type Photo = {
  id: string;
  src: string;
  category: "Street" | "Automotive" | "Portrait" | "Culture";
  caption: string;
  orientation: "landscape" | "portrait";
};

export const photos: Photo[] = [
  { id: "photo-1", src: "/1.jpg", category: "Automotive", caption: "Porsche Taycan on the street", orientation: "landscape" },
  { id: "photo-4", src: "/4.jpg", category: "Automotive", caption: "Mitsubishi Neptune '86", orientation: "landscape" },
  { id: "photo-9", src: "/9.jpg", category: "Culture", caption: "Barongsai at night — Semarang", orientation: "landscape" },
  { id: "photo-10", src: "/10.jpg", category: "Portrait", caption: "Afternoon, two friends", orientation: "portrait" },
  { id: "photo-6", src: "/6.jpg", category: "Street", caption: "Coffee beans, roastery detail", orientation: "landscape" },
  { id: "photo-5", src: "/5.jpg", category: "Street", caption: "The roasting drum", orientation: "landscape" },
  { id: "photo-7", src: "/7.jpg", category: "Street", caption: "Dessert & a good book", orientation: "portrait" },
  { id: "photo-8", src: "/8.jpg", category: "Street", caption: "Iced tea, warm light", orientation: "portrait" },
  { id: "photo-2", src: "/2.jpg", category: "Automotive", caption: "Yamaha in motion", orientation: "landscape" },
  { id: "photo-3", src: "/3.jpg", category: "Automotive", caption: "Honda CBR, in action", orientation: "landscape" },
];

// Foto profil untuk halaman About
export const profilePhoto = "/foto about.jpg";
