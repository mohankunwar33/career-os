"use client";

import { FormEvent, useState } from "react";
import { Plus } from "lucide-react";

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

interface CreateRoadmapDialogProps {
  onCreate: (title: string, description: string) => void;
}

export function CreateRoadmapDialog({
  onCreate,
}: CreateRoadmapDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanTitle = title.trim();
    const cleanDescription = description.trim();

    if (!cleanTitle) return;

    onCreate(cleanTitle, cleanDescription);

    setTitle("");
    setDescription("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Roadmap
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create roadmap</DialogTitle>
            <DialogDescription>
              Add a new learning roadmap to CareerOS.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-6">
            <div className="space-y-2">
              <label
                htmlFor="roadmap-title"
                className="text-sm font-medium"
              >
                Title
              </label>

              <Input
                id="roadmap-title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Example: Data Science"
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="roadmap-description"
                className="text-sm font-medium"
              >
                Description
              </label>

              <Input
                id="roadmap-description"
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                placeholder="Describe this learning journey"
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
              Create Roadmap
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}