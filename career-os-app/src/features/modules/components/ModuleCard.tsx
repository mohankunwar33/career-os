import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/ProgressBar";

import { Module } from "../types";

interface ModuleCardProps {
  module: Module;
  onEdit: (module: Module) => void;
  onDelete: (module: Module) => void;
}

export default function ModuleCard({
  module,
  onEdit,
  onDelete,
}: ModuleCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            {module.title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {module.description || "No description provided."}
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(module)}
          >
            Edit
          </Button>

          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(module)}
          >
            Delete
          </Button>
        </div>
      </div>

      <div className="mt-6">
        <ProgressBar
          value={module.progress}
          showLabel
        />
      </div>
    </Card>
  );
}