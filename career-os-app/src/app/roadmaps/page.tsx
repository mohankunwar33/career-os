import { AppShell } from "@/components/layout/app-shell";

import { RoadmapCard } from "@/features/roadmaps/components/RoadmapCard";
import { roadmaps } from "@/features/roadmaps/mock-data";

export default function RoadmapsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Roadmaps</h1>
          <p className="text-muted-foreground">
            Manage your learning journeys.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.id} roadmap={roadmap} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}