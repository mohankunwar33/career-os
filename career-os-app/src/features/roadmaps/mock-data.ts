import { Roadmap } from "./types";

export const roadmaps: Roadmap[] = [
  {
    id: "1",
    title: "AI Engineer",
    description: "Complete AI Engineer roadmap",
    progress: 18,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Machine Learning",
    description: "Learn ML from beginner to advanced",
    progress: 42,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "MLOps",
    description: "Deployment and production systems",
    progress: 8,
    createdAt: new Date().toISOString(),
  },
];