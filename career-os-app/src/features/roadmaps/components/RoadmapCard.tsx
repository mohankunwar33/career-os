import { BookOpen, CheckCircle2, Layers3 } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { DeleteRoadmapDialog } from "./DeleteRoadmapDialog";
import { EditRoadmapDialog } from "./EditRoadmapDialog";
import { Roadmap } from "../types";

interface RoadmapCardProps {
  roadmap: Roadmap;
  onUpdate: (
    id: string,
    title: string,
    description: string
  ) => void;
  onDelete: (id: string) => void;
}

export function RoadmapCard({
  roadmap,
  onUpdate,
  onDelete,
}: RoadmapCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>{roadmap.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <p className="text-sm text-muted-foreground">
          {roadmap.description || "No description provided."}
        </p>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${roadmap.progress}%` }}
          />
        </div>

        <p className="mt-2 text-sm font-medium">
          {roadmap.progress}% Complete
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-lg border p-3">
            <Layers3 className="mx-auto h-4 w-4 text-muted-foreground" />
            <p className="mt-1 text-xs text-muted-foreground">
              Modules
            </p>
            <p className="font-semibold">0</p>
          </div>

          <div className="rounded-lg border p-3">
            <BookOpen className="mx-auto h-4 w-4 text-muted-foreground" />
            <p className="mt-1 text-xs text-muted-foreground">
              Topics
            </p>
            <p className="font-semibold">0</p>
          </div>

          <div className="rounded-lg border p-3">
            <CheckCircle2 className="mx-auto h-4 w-4 text-muted-foreground" />
            <p className="mt-1 text-xs text-muted-foreground">
              Done
            </p>
            <p className="font-semibold">0</p>
          </div>
        </div>

        <div className="mt-auto flex gap-2 pt-6">
          <EditRoadmapDialog
            roadmap={roadmap}
            onUpdate={onUpdate}
          />

          <DeleteRoadmapDialog
            roadmap={roadmap}
            onDelete={onDelete}
          />
        </div>
      </CardContent>
    </Card>
  );
}