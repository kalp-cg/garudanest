export const BRAND = {
  name: "garudanest",
  email: "teamgarudanest@gmail.com",
  social: {
    instagram: "https://www.instagram.com/teamgarudanest/",
    twitter: "https://x.com/teamgarudanest",
    linkedin: "https://www.linkedin.com/in/teamgarudanest/"
  }
};

export const navLinks = [
  { label: "home", href: "/" },
  { label: "work", href: "/work" },
  { label: "process", href: "/process" },
  { label: "nest", href: "/nest" },
  { label: "manifesto", href: "/manifesto" },
];

export const teamMembers = [
  { name: "Ari Prasetyo", role: "Frontend", bio: "Crafts high-performance UI systems for product teams.", tags: ["Next.js", "UI", "A11y"], image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
  { name: "Rina Mahesa", role: "Backend", bio: "Builds reliable APIs and distributed services at scale.", tags: ["Node", "Prisma", "Postgres"], image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" },
  { name: "Devansh Patel", role: "AI", bio: "Ships applied AI systems from prototype to production.", tags: ["RAG", "Evaluation", "MLOps"], image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
  { name: "Naufal Saputra", role: "DevOps", bio: "Designs cloud infra with speed, resilience, and observability.", tags: ["K8s", "CI/CD", "SRE"], image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
  { name: "Ishita Singh", role: "Frontend", bio: "Builds conversion-focused interfaces with premium UX polish.", tags: ["React", "Motion", "Design"], image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
  { name: "Harsh Vora", role: "Backend", bio: "Owns core architecture for high-throughput backend systems.", tags: ["Microservices", "Caching", "Queues"], image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" },
  { name: "Bagus Wicaksono", role: "DevOps", bio: "Automates secure deployments and developer platforms.", tags: ["Terraform", "Security", "Cloud"], image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800" },
  { name: "Megha Jain", role: "AI", bio: "Creates AI pipelines that improve product decisions.", tags: ["NLP", "Python", "Data"], image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" },
];

export const projects = [
  { title: "Nexus Commerce", stack: ["Next.js", "Prisma", "Postgres"], p: "Checkout drop-offs under load", s: "Rebuilt flow + optimized data paths", r: "31% faster checkout, +18% conversion" },
  { title: "Atlas Dispatch AI", stack: ["FastAPI", "RAG", "Vector DB"], p: "Manual support triage bottleneck", s: "Auto-routing with confidence scoring", r: "42% ticket deflection" },
  { title: "Pulse Finance Core", stack: ["Node", "Kafka", "Redis"], p: "Inconsistent transactions at peak", s: "Event-driven idempotent processing", r: "99.99% reliability" },
  { title: "Orbit Talent Cloud", stack: ["React", "GraphQL", "S3"], p: "Low application completion", s: "Streamlined hiring UX", r: "+27% completed applications" },
];

export const testimonials = [
  { name: "Anika Rao", role: "Product Lead", quote: "GarudaNest shipped in weeks what others estimated for quarters." },
  { name: "Rafi Ananta", role: "Senior Backend Engineer", quote: "Peer quality is unreal. Every sprint makes you sharper." },
  { name: "Milan Shah", role: "Founder", quote: "Fast, sharp, and reliable delivery without management bloat." },
];

export const activities = [
  "Deployed analytics pipeline to production today.",
  "Open-sourced internal tooling and crossed 1.2k stars.",
  "Completed security hardening for fintech API gateway.",
  "Released hiring workflow v2 with 28% faster screening.",
];

export const SERVICES = [
  { id: "ai", label: "AI & Neural Systems", description: "RAG, LLM orchestration, and custom model deployment." },
  { id: "infra", label: "Core Infrastructure", description: "Scalable backend, database optimization, and cloud architecture." },
  { id: "web", label: "Elite Web Platforms", description: "High-performance Next.js systems with premium UX polish." },
  { id: "audit", label: "Security & Performance Audit", description: "Hardening and bottleneck elimination for existing systems." }
];

export const BUDGET_RANGES = [
  { id: "tier1", label: "$10k — $25k", value: "10-25k" },
  { id: "tier2", label: "$25k — $50k", value: "25-50k" },
  { id: "tier3", label: "$50k — $100k", value: "50-100k" },
  { id: "tier4", label: "$100k+", value: "100k+" }
];
