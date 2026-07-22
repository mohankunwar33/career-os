import { AppShell } from "@/components/layout/app-shell";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const dashboardStats = [
  {
    title: "Roadmap Progress",
    value: "18%",
    description: "12 of 68 topics completed",
  },
  {
    title: "Study Streak",
    value: "7 days",
    description: "Keep the momentum going",
  },
  {
    title: "Weekly Goal",
    value: "8 / 12 hrs",
    description: "4 hours remaining",
  },
  {
    title: "Projects",
    value: "2",
    description: "1 project currently active",
  },
];

export default function HomePage() {
  return (
    <AppShell>
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Welcome back, Mohan
          </h2>
          <p className="text-muted-foreground">
            Continue building your AI Engineer roadmap.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Today&apos;s Study Plan</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="rounded-lg border p-4">
                <p className="font-medium">Python Functions</p>
                <p className="text-sm text-muted-foreground">
                  Study parameters, return values and scope.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <p className="font-medium">NumPy Arrays</p>
                <p className="text-sm text-muted-foreground">
                  Practice indexing, slicing and vector operations.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Roadmap</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="font-semibold">AI Engineer 2026</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Foundation phase in progress
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[18%] rounded-full bg-primary" />
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                18% completed
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </AppShell>
  );
}