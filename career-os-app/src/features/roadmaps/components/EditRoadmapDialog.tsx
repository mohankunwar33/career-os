"use client";

import { FormEvent, useEffect, useState } from "react";
import { Pencil } from "lucide-react";

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
import { Input } from "@/components/ui/input";

import { Roadmap } from "../types";

interface EditRoadmapDialogProps {
  roadmap: Roadmap;
  onUpdate: (
    id: string,
    title: string,
    description: string
  ) => void;
}

export function EditRoadmapDialog({
  roadmap,
  onUpdate,
}: EditRoadmapDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(roadmap.title);
  const [description, setDescription] = useState(
    roadmap.description
  );

  useEffect(() => {
    setTitle(roadmap.title);
    setDescription(roadmap.description);
  }, [roadmap]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanTitle = title.trim();
    const cleanDescription = description.trim();

    if (!cleanTitle) return;

    onUpdate(roadmap.id, cleanTitle, cleanDescription);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Pencil className="mr-2 h-4 w-4" />
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit roadmap</DialogTitle>
            <DialogDescription>
              Update the roadmap title and description.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-6">
            <div className="space-y-2">
              <label
                htmlFor={`roadmap-title-${roadmap.id}`}
                className="text-sm font-medium"
              >
                Title
              </label>

              <Input
                id={`roadmap-title-${roadmap.id}`}
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor={`roadmap-description-${roadmap.id}`}
                className="text-sm font-medium"
              >
                Description
              </label>

              <Input
                id={`roadmap-description-${roadmap.id}`}
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={!title.trim()}>
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}