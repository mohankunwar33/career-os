"use client";

import { useMemo } from "react";

import { loadRoadmaps } from "../storage";
import RoadmapOverview from "./RoadmapOverview";

interface Props {
  id: string;
}

export default function RoadmapDetailsClient({ id }: Props) {
  const roadmap = useMemo(() => getRoadmapById(id), [id]);

  if (!roadmap) {
    return (
      <div className="rounded-lg border p-8 text-center">
        <h2 className="text-2xl font-bold">
          Roadmap not found
        </h2>

        <p className="mt-2 text-muted-foreground">
          The roadmap you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return <RoadmapOverview roadmap={roadmap} />;
}