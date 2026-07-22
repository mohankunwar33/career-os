"use client";

import { useEffect, useState } from "react";

import { roadmaps as mockRoadmaps } from "../mock-data";
import { loadRoadmaps, saveRoadmaps } from "../storage";
import { Roadmap } from "../types";

export function useRoadmaps() {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);

  useEffect(() => {
    const storedRoadmaps = loadRoadmaps();

    if (storedRoadmaps.length === 0) {
      setRoadmaps(mockRoadmaps);
      saveRoadmaps(mockRoadmaps);
      return;
    }

    setRoadmaps(storedRoadmaps);
  }, []);

  function addRoadmap(title: string, description: string) {
    const newRoadmap: Roadmap = {
      id: crypto.randomUUID(),
      title,
      description,
      progress: 0,
      createdAt: new Date().toISOString(),
    };

    const updatedRoadmaps = [...roadmaps, newRoadmap];

    setRoadmaps(updatedRoadmaps);
    saveRoadmaps(updatedRoadmaps);
  }

  function updateRoadmap(
    id: string,
    title: string,
    description: string
  ) {
    const updatedRoadmaps = roadmaps.map((roadmap) =>
      roadmap.id === id
        ? {
            ...roadmap,
            title,
            description,
          }
        : roadmap
    );

    setRoadmaps(updatedRoadmaps);
    saveRoadmaps(updatedRoadmaps);
  }

  function deleteRoadmap(id: string) {
    const updatedRoadmaps = roadmaps.filter(
      (roadmap) => roadmap.id !== id
    );

    setRoadmaps(updatedRoadmaps);
    saveRoadmaps(updatedRoadmaps);
  }

  return {
    roadmaps,
    addRoadmap,
    updateRoadmap,
    deleteRoadmap,
  };
}