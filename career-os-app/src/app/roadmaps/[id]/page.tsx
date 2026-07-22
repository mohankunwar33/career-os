interface PageProps {
  params: {
    id: string;
  };
}

export default async function RoadmapDetails({ params }: PageProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Roadmap Details
      </h1>

      <p>Roadmap ID:</p>

      <div className="rounded-lg border p-4">
        {params.id}
      </div>
    </div>
  );
}