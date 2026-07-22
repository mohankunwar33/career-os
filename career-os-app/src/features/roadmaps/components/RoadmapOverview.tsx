type Roadmap = {
  id: string;
  title: string;
  description: string;
  progress: number;
  createdAt: string;
};

interface RoadmapOverviewProps {
  roadmap: Roadmap;
}

export default function RoadmapOverview({
  roadmap,
}: RoadmapOverviewProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="text-3xl font-bold">{roadmap.title}</h1>

      <p className="mt-2 text-muted-foreground">
        {roadmap.description}
      </p>

      <div className="mt-6">
        <div className="mb-2 flex justify-between">
          <span>Progress</span>
          <span>{roadmap.progress}%</span>
        </div>

        <div className="h-3 w-full rounded-full bg-gray-200">
          <div
            className="h-3 rounded-full bg-blue-600"
            style={{ width: `${roadmap.progress}%` }}
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Created</p>
          <p>{new Date(roadmap.createdAt).toLocaleDateString()}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Modules</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}