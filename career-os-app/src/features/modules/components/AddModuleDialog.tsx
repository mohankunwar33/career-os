"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ModuleForm from "./ModuleForm";

interface AddModuleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddModule: (title: string, description: string) => void;
}

export default function AddModuleDialog({
  open,
  onOpenChange,
  onAddModule,
}: AddModuleDialogProps) {
  function handleSubmit(title: string, description: string) {
    onAddModule(title, description);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Module</DialogTitle>
        </DialogHeader>

        <ModuleForm
          submitText="Create Module"
          onSubmit={handleSubmit}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}