import RoadmapOverview from "@/features/roadmaps/components/RoadmapOverview";

export default function RoadmapDetails() {
  const roadmap = {
    id: "1",
    title: "AI Engineer",
    description:
      "Become an AI Engineer from beginner to advanced.",
    progress: 40,
    createdAt: new Date().toISOString(),
  };

  return (
    <div className="space-y-6">
      <RoadmapOverview roadmap={roadmap} />
    </div>
  );
}