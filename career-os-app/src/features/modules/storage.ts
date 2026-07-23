import { Module } from "./types";

const STORAGE_KEY = "careeros-modules";

export function loadModules(): Module[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to load modules:", error);
    return [];
  }
}

export function saveModules(modules: Module[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(modules)
  );
}

export function getModuleById(
  id: string
): Module | undefined {
  return loadModules().find(
    (module) => module.id === id
  );
}

export function getModulesByRoadmap(
  roadmapId: string
): Module[] {
  return loadModules().filter(
    (module) => module.roadmapId === roadmapId
  );
}