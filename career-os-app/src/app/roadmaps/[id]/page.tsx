import RoadmapDetailsClient from "@/features/roadmaps/components/RoadmapDetailsClient";

interface Props {
  params: {
    id: string;
  };
}

export default function RoadmapDetailsPage({
  params,
}: Props) {
  return (
    <div className="space-y-6">
      <RoadmapDetailsClient id={params.id} />
    </div>
  );
}