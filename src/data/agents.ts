export interface AgentProfile {
  id: string;
  name: string;
  role: string;
  experience: string;
  certifications: string[];
  languages: string[];
  phone: string;
  whatsapp: string;
  email: string;
  image: string;
  bio: string;
  soldProperties: number;
  salesVolume: string;
  featuredListings: { title: string; location: string; price: string; image: string }[];
  clientReviews: { quote: string; client: string }[];
}

export const AGENTS_DATA: AgentProfile[] = [
  {
    id: "vikram-sharma",
    name: "Vikram Sharma",
    role: "Managing Director & Founder",
    experience: "14+ Years Experience",
    certifications: ["Certified Real Estate Broker (RERA)", "RICS Fellow", "HNW Investment Advisor"],
    languages: ["English", "Hindi", "Marathi", "Gujarati"],
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    email: "vikram@horizonrealty.com",
    image: "/images/agent-vikram.png",
    bio: "Vikram has spearheaded over ₹800+ Cr in luxury residential transactions across Bandra, Worli, and South Mumbai. Known for absolute discretion and strategic market timing.",
    soldProperties: 120,
    salesVolume: "₹ 850 Cr+",
    featuredListings: [
      { title: "Horizon Heights Villa", location: "Bandra West", price: "₹ 6.25 Cr", image: "/images/hero-villa.png" },
      { title: "Greenwood Villa", location: "Panchgani", price: "₹ 8.75 Cr", image: "/images/greenwood-villas.png" },
    ],
    clientReviews: [
      { quote: "Vikram guided our family through an intricate penthouse deal with total transparency.", client: "Rohan & Meera Kapoor" },
    ],
  },
  {
    id: "ananya-deshmukh",
    name: "Ananya Deshmukh",
    role: "Head of Luxury Residences",
    experience: "9+ Years Experience",
    certifications: ["Luxury Home Specialist", "RERA Certified Advisor"],
    languages: ["English", "Hindi", "Marathi"],
    phone: "+91 98765 43211",
    whatsapp: "919876543211",
    email: "ananya@horizonrealty.com",
    image: "/images/agent-ananya.png",
    bio: "Specializing in high-rise sea-facing penthouses and bespoke residential acquisitions for corporate leaders and creative industry pioneers.",
    soldProperties: 75,
    salesVolume: "₹ 420 Cr+",
    featuredListings: [
      { title: "Skyline Residences", location: "Lower Parel", price: "₹ 3.85 Cr", image: "/images/skyline-residences.png" },
      { title: "Azure Penthouse", location: "Worli", price: "₹ 14.50 Cr", image: "/images/cta-living-room.png" },
    ],
    clientReviews: [
      { quote: "Ananya's taste and negotiation skills saved us weeks of searching.", client: "Dr. Alok Verma" },
    ],
  },
  {
    id: "rohan-kapoor",
    name: "Rohan Kapoor",
    role: "VP Commercial & Land Advisory",
    experience: "11+ Years Experience",
    certifications: ["Commercial Real Estate Specialist", "Institutional Land Consultant"],
    languages: ["English", "Hindi", "Punjabi"],
    phone: "+91 98765 43212",
    whatsapp: "919876543212",
    email: "rohan@horizonrealty.com",
    image: "/images/agent-rohan.png",
    bio: "Rohan manages corporate Grade-A office acquisitions and institutional land joint ventures in BKC, Lower Parel, and Navi Mumbai.",
    soldProperties: 48,
    salesVolume: "₹ 610 Cr+",
    featuredListings: [
      { title: "Zenith Business Tower", location: "BKC, Mumbai", price: "₹ 18.20 Cr", image: "/images/why-choose-us.png" },
    ],
    clientReviews: [
      { quote: "Rohan secured our Grade-A office space in BKC under tight deadlines.", client: "Apex Tech Ventures" },
    ],
  },
];
