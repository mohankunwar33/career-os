"use client";

import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Roadmap } from "../types";

interface DeleteRoadmapDialogProps {
  roadmap: Roadmap;
  onDelete: (id: string) => void;
}

export function DeleteRoadmapDialog({
  roadmap,
  onDelete,
}: DeleteRoadmapDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete roadmap?</DialogTitle>
          <DialogDescription>
            This will permanently delete “{roadmap.title}”.
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogTrigger>

          <DialogTrigger asChild>
            <Button
              variant="destructive"
              onClick={() => onDelete(roadmap.id)}
            >
              Delete Roadmap
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}