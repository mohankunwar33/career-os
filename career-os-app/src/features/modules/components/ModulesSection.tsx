"use client";

import { useState } from "react";

import { Module } from "../types";
import { useModules } from "../useModules";
import ModuleList from "./ModuleList";

interface ModulesSectionProps {
  roadmapId: string;
}

export default function ModulesSection({
  roadmapId,
}: ModulesSectionProps) {
  const {
    modules,
    addModule,
    updateModule,
    deleteModule,
  } = useModules(roadmapId);

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  function handleAddModule() {
    if (!title.trim()) return;

    addModule(title, description);

    setTitle("");
    setDescription("");
  }

  function handleEdit(module: Module) {
    const newTitle = window.prompt(
      "Module Title",
      module.title
    );

    if (!newTitle) return;

    const newDescription = window.prompt(
      "Module Description",
      module.description
    );

    updateModule(
      module.id,
      newTitle,
      newDescription ?? ""
    );
  }

  function handleDelete(module: Module) {
    const confirmed = window.confirm(
      `Delete "${module.title}"?`
    );

    if (!confirmed) return;

    deleteModule(module.id);
  }

  return (
    <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Modules
        </h2>
      </div>

      <div className="space-y-3">
        <input
          className="w-full rounded border p-2"
          placeholder="Module title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <textarea
          className="w-full rounded border p-2"
          placeholder="Description"
          rows={3}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <button
          onClick={handleAddModule}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add Module
        </button>
      </div>

      <div className="mt-8">
        <ModuleList
          modules={modules}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}