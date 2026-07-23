import { Module } from "../types";
import ModuleCard from "./ModuleCard";

interface ModuleListProps {
  modules: Module[];
  onEdit: (module: Module) => void;
  onDelete: (module: Module) => void;
}

export default function ModuleList({
  modules,
  onEdit,
  onDelete,
}: ModuleListProps) {
  if (modules.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center">
        <p className="text-gray-500">
          No modules added yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {modules.map((module) => (
        <ModuleCard
          key={module.id}
          module={module}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}