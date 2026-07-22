"use client";

import { AppShell } from "@/components/layout/app-shell";
import { CreateRoadmapDialog } from "@/features/roadmaps/components/CreateRoadmapDialog";
import { RoadmapCard } from "@/features/roadmaps/components/RoadmapCard";
import { useRoadmaps } from "@/features/roadmaps/hooks/useRoadmaps";

export default function RoadmapsPage() {
  const { roadmaps, addRoadmap } = useRoadmaps();

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Roadmaps</h1>
            <p className="text-muted-foreground">
              Manage your learning journeys.
            </p>
          </div>

          <CreateRoadmapDialog onCreate={addRoadmap} />
        </div>

        {roadmaps.length === 0 ? (
          <div className="rounded-xl border border-dashed p-10 text-center">
            <h2 className="text-lg font-semibold">
              No roadmaps yet
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Create your first roadmap to begin tracking progress.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {roadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} />
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}