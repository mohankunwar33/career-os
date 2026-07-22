import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Roadmap } from "../types";

interface Props {
  roadmap: Roadmap;
}

export function RoadmapCard({ roadmap }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{roadmap.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          {roadmap.description}
        </p>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${roadmap.progress}%` }}
          />
        </div>

        <p className="mt-2 text-sm font-medium">
          {roadmap.progress}% Complete
        </p>
      </CardContent>
    </Card>
  );
}