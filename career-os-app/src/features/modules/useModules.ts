"use client";

import { useEffect, useState } from "react";

import { modules as mockModules } from "./mock-data";
import {
  getModulesByRoadmap,
  loadModules,
  saveModules,
} from "./storage";
import { Module } from "./types";

export function useModules(roadmapId: string) {
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    const storedModules = loadModules();

    if (storedModules.length === 0) {
      saveModules(mockModules);
      setModules([]);
      return;
    }

    setModules(getModulesByRoadmap(roadmapId));
  }, [roadmapId]);

  function addModule(
    title: string,
    description: string
  ) {
    const newModule: Module = {
      id: crypto.randomUUID(),
      roadmapId,
      title,
      description,
      progress: 0,
      createdAt: new Date().toISOString(),
    };

    const updatedModules = [
      ...loadModules(),
      newModule,
    ];

    saveModules(updatedModules);

    setModules(getModulesByRoadmap(roadmapId));
  }

  function updateModule(
    id: string,
    title: string,
    description: string
  ) {
    const updatedModules = loadModules().map((module) =>
      module.id === id
        ? {
            ...module,
            title,
            description,
          }
        : module
    );

    saveModules(updatedModules);

    setModules(getModulesByRoadmap(roadmapId));
  }

  function deleteModule(id: string) {
    const updatedModules = loadModules().filter(
      (module) => module.id !== id
    );

    saveModules(updatedModules);

    setModules(getModulesByRoadmap(roadmapId));
  }

  return {
    modules,
    addModule,
    updateModule,
    deleteModule,
  };
}