"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { Module } from "../types";
import ModuleForm from "./ModuleForm";

interface EditModuleDialogProps {
  module: Module;
  onUpdate: (
    id: string,
    title: string,
    description: string
  ) => void;
}

export default function EditModuleDialog({
  module,
  onUpdate,
}: EditModuleDialogProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [module]);

  function handleSubmit(
    title: string,
    description: string
  ) {
    onUpdate(module.id, title, description);
    setOpen(false);
  }

  if (!open) {
    return (
      <Button
        size="sm"
        variant="outline"
        onClick={() => setOpen(true)}
      >
        Edit
      </Button>
    );
  }

  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <h3 className="mb-5 text-lg font-semibold">
        Edit Module
      </h3>

      <ModuleForm
        initialTitle={module.title}
        initialDescription={module.description}
        submitLabel="Save Changes"
        onSubmit={handleSubmit}
        onCancel={() => setOpen(false)}
      />
    </div>
  );
}