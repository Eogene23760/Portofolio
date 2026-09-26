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
  // Path gambar cover (thumbnail). Kosong = pakai placeholder sementara.
  cover?: string;
  // Screenshot tambahan untuk halaman case study.
  images?: { src: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    slug: "getol",
    title: "Getol",
    summary:
      "A mobile app that helps people find the nearest public toilets based on location, facilities, and cleanliness rating.",
    tags: [
      "Mobile App",
      "UI/UX Design",
      "Location-Based Service",
      "Map",
      "Accessibility",
    ],
    role: "Product Designer",
    duration: "Personal project",
    tools: ["Figma", "FigJam"],
    client: "Personal project",
    problem:
      "In public places, people often struggle to find an accessible toilet and have no way to know its condition beforehand. Information about location, facilities, and cleanliness is scattered across different platforms.",
    goals: [
      "Help users quickly find the nearest public toilet",
      "Surface cleanliness and facility information before they visit",
      "Let users choose a toilet based on their location and needs",
    ],
    process: [
      { title: "User Research", description: "Explored when and why people need to find a toilet in unfamiliar places." },
      { title: "User Persona", description: "Defined the core users and their contexts of use." },
      { title: "Problem Definition", description: "Framed the key pain points into clear design problems." },
      { title: "User Flow", description: "Mapped the path from opening the app to finding a suitable toilet." },
      { title: "Wireframe", description: "Sketched low-fidelity layouts focused on speed and clarity." },
      { title: "UI Design", description: "Designed a clean, readable interface for quick decisions." },
      { title: "Prototype", description: "Built an interactive prototype for testing the flow." },
      { title: "Usability Testing", description: "Validated the flow with users and gathered feedback." },
      { title: "Iteration", description: "Refined the design based on testing insights." },
    ],
    outcome:
      "Produced a prototype for a toilet-finding app with a location map, nearest-toilet search, facility info, a 1–10 cleanliness rating, photos, and navigation. The project deepened my understanding of applying Location-Based Services (LBS) in design and the importance of fast, easy-to-read information in time-sensitive situations.",
    prototypeUrl: "#",
  },
  {
    slug: "lokasayur",
    title: "Lokasayur",
    summary:
      "A mobile app that connects users with roaming vegetable vendors nearby — find vendors, check stock, order, and track delivery.",
    tags: [
      "Mobile App",
      "UI/UX Design",
      "Location-Based Service",
      "Marketplace",
    ],
    role: "Product Designer",
    duration: "Personal project",
    tools: ["Figma", "FigJam"],
    client: "Personal project",
    problem:
      "Roaming vegetable vendors are hard to find digitally — customers usually rely on neighborhood word-of-mouth or wait for a vendor to pass by. Vendors, in turn, struggle to reach a wider audience and manage orders in an organized way.",
    goals: [
      "Help users find the nearest vegetable vendors in real time",
      "Let users view stock and place orders digitally",
      "Help vendors manage stock, orders, delivery routes, and income",
    ],
    process: [
      { title: "User Research", description: "Studied the habits of both customers and roaming vendors." },
      { title: "User Persona", description: "Defined personas for the two distinct user types." },
      { title: "User Flow", description: "Mapped separate flows for customers and vendors." },
      { title: "Information Architecture", description: "Structured content and features for both sides of the app." },
      { title: "Wireframe", description: "Sketched layouts for the customer and vendor experiences." },
      { title: "UI Design", description: "Designed a clear, approachable interface for everyday use." },
      { title: "Prototype", description: "Built an interactive two-sided prototype." },
      { title: "Usability Testing", description: "Tested both flows with representative users." },
      { title: "Iteration", description: "Refined the experience based on feedback." },
    ],
    outcome:
      "Produced a prototype with two user sides — customer and vendor. I learned how to design a location-based marketplace that balances the needs and workflows of two very different user types.",
    prototypeUrl: "#",
  },
  {
    slug: "floodguard",
    title: "FloodGuard",
    summary:
      "A machine-learning flood prediction and early-warning system that analyzes weather and environmental data to estimate flood risk.",
    tags: [
      "Mobile App",
      "UI/UX Design",
      "AI / Machine Learning",
      "Data Science",
      "Predictive System",
      "Dashboard",
      "Early Warning System",
    ],
    role: "Product Designer & Data",
    duration: "Personal project",
    tools: [
      "Figma",
      "FigJam",
      "Python",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebook",
    ],
    client: "Personal project",
    problem:
      "Floods result from a combination of factors — rainfall, water levels, humidity, and weather conditions. The available information is often raw data that's hard for the public to interpret. A system is needed to turn these parameters into risk information that's easy to understand and useful as an early warning.",
    goals: [
      "Build a machine-learning model to predict flood risk from environmental and weather data",
      "Identify the factors most associated with increased flood risk",
      "Present predictions as easy-to-understand information to support preparedness",
    ],
    process: [
      { title: "Data Collection", description: "Gathered weather and environmental datasets." },
      { title: "Data Cleaning", description: "Cleaned and standardized the raw data." },
      { title: "Exploratory Data Analysis", description: "Explored patterns and relationships in the data." },
      { title: "Feature Selection", description: "Selected the most relevant predictive features." },
      { title: "Data Preprocessing", description: "Prepared the data for model training." },
      { title: "Model Training", description: "Trained an XGBoost model on the prepared data." },
      { title: "Model Evaluation", description: "Evaluated the model's predictive performance." },
      { title: "Prediction", description: "Generated flood-risk predictions from the model." },
      { title: "Visualization", description: "Visualized results into understandable risk information." },
    ],
    outcome:
      "Produced a flood-risk prediction prototype using XGBoost with parameters such as rainfall, water level, wind speed and direction, humidity, day, and hour. The project helped me understand the end-to-end machine-learning process — from data preprocessing to model evaluation and visualizing prediction results.",
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
