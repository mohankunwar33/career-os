"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Module } from "../types";
import { useModules } from "../useModules";

import ModuleList from "./ModuleList";
import AddModuleDialog from "./AddModuleDialog";
import EditModuleDialog from "./EditModuleDialog";
import DeleteModuleDialog from "./DeleteModuleDialog";

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

  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [selectedModule, setSelectedModule] =
    useState<Module | null>(null);

  function handleCreate(
    title: string,
    description: string
  ) {
    addModule(title, description);
    setAddDialogOpen(false);
  }

  function handleEdit(module: Module) {
    setSelectedModule(module);
    setEditDialogOpen(true);
  }

  function handleDelete(module: Module) {
    setSelectedModule(module);
    setDeleteDialogOpen(true);
  }

  function handleUpdate(
    id: string,
    title: string,
    description: string
  ) {
    updateModule(id, title, description);

    setEditDialogOpen(false);
    setSelectedModule(null);
  }

  function handleDeleteConfirm(id: string) {
    deleteModule(id);

    setDeleteDialogOpen(false);
    setSelectedModule(null);
  }

  function closeEditDialog() {
    setEditDialogOpen(false);
    setSelectedModule(null);
  }

  function closeDeleteDialog() {
    setDeleteDialogOpen(false);
    setSelectedModule(null);
  }

  return (
    <section className="rounded-xl border bg-background p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            Modules
          </h2>

          <p className="text-sm text-muted-foreground">
            Organize your roadmap into learning modules.
          </p>
        </div>

        <Button
          onClick={() => setAddDialogOpen(true)}
        >
          + Add Module
        </Button>

      </div>

      <ModuleList
        modules={modules}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddModuleDialog
        open={addDialogOpen}
        onOpenChange={setAddDialogOpen}
        onAddModule={handleCreate}
      />

      <EditModuleDialog
        open={editDialogOpen}
        module={selectedModule}
        onOpenChange={(open) => {
          if (!open) {
            closeEditDialog();
          } else {
            setEditDialogOpen(true);
          }
        }}
        onUpdateModule={handleUpdate}
      />

      <DeleteModuleDialog
        open={deleteDialogOpen}
        module={selectedModule}
        onOpenChange={(open) => {
          if (!open) {
            closeDeleteDialog();
          } else {
            setDeleteDialogOpen(true);
          }
        }}
        onDeleteModule={handleDeleteConfirm}
      />
    </section>
  );
}