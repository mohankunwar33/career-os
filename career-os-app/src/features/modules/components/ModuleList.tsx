import ModuleCard from "./ModuleCard";
import { Module } from "../types";

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
        <h3 className="text-lg font-medium">
          No modules found
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Create your first module to get started.
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