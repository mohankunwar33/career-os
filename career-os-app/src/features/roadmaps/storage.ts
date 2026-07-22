import { Roadmap } from "./types";

const STORAGE_KEY = "careeros-roadmaps";

export function loadRoadmaps(): Roadmap[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  return JSON.parse(data);
}

export function saveRoadmaps(roadmaps: Roadmap[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(roadmaps));
}