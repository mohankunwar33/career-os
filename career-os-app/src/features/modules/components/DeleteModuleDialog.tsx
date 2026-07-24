"use client";

import ConfirmDialog from "@/components/ui/ConfirmDialog";
import { Module } from "../types";

interface DeleteModuleDialogProps {
  open: boolean;
  module: Module | null;
  onOpenChange: (open: boolean) => void;
  onDeleteModule: (id: string) => void;
}

export default function DeleteModuleDialog({
  open,
  module,
  onOpenChange,
  onDeleteModule,
}: DeleteModuleDialogProps) {
  if (!module) return null;

  function handleDelete() {
    onDeleteModule(module.id);
    onOpenChange(false);
  }

  return (
    <ConfirmDialog
      open={open}
      title="Delete Module"
      description={`Are you sure you want to delete "${module.title}"? This action cannot be undone.`}
      confirmText="Delete"
      cancelText="Cancel"
      onConfirm={handleDelete}
      onCancel={() => onOpenChange(false)}
    />
  );
}