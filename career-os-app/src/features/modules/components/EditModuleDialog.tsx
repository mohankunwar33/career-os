"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Module } from "../types";
import ModuleForm from "./ModuleForm";

interface EditModuleDialogProps {
  open: boolean;
  module: Module | null;
  onOpenChange: (open: boolean) => void;
  onUpdateModule: (
    id: string,
    title: string,
    description: string
  ) => void;
}

export default function EditModuleDialog({
  open,
  module,
  onOpenChange,
  onUpdateModule,
}: EditModuleDialogProps) {
  if (!module) return null;

  function handleSubmit(title: string, description: string) {
    onUpdateModule(module.id, title, description);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Module</DialogTitle>
        </DialogHeader>

        <ModuleForm
          initialTitle={module.title}
          initialDescription={module.description}
          submitText="Save Changes"
          onSubmit={handleSubmit}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}