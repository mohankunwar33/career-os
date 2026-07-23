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
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            {module.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {module.description}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(module)}
            className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(module)}
            className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-sm">
          <span>Progress</span>
          <span>{module.progress}%</span>
        </div>

        <div className="h-2 rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-green-600"
            style={{
              width: `${module.progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}