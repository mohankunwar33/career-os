"use client";

import { useEffect, useState } from "react";

import { roadmaps as mockRoadmaps } from "../mock-data";
import { loadRoadmaps, saveRoadmaps } from "../storage";
import { Roadmap } from "../types";

export function useRoadmaps() {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);

  useEffect(() => {
    const stored = loadRoadmaps();

    if (stored.length === 0) {
      setRoadmaps(mockRoadmaps);
      saveRoadmaps(mockRoadmaps);
    } else {
      setRoadmaps(stored);
    }
  }, []);

  function addRoadmap(title: string, description: string) {
    const newRoadmap: Roadmap = {
      id: crypto.randomUUID(),
      title,
      description,
      progress: 0,
      createdAt: new Date().toISOString(),
    };

    const updated = [...roadmaps, newRoadmap];

    setRoadmaps(updated);
    saveRoadmaps(updated);
  }

  return {
    roadmaps,
    addRoadmap,
  };
}