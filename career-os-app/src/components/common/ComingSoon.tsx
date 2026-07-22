import { AppShell } from "@/components/layout/app-shell";

interface ComingSoonProps {
  title: string;
  description: string;
}

export function ComingSoon({
  title,
  description,
}: ComingSoonProps) {
  return (
    <AppShell>
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="max-w-xl rounded-xl border bg-card p-10 text-center shadow-sm">
          <h1 className="text-4xl font-bold">{title}</h1>

          <p className="mt-4 text-muted-foreground">
            {description}
          </p>

          <div className="mt-8 rounded-lg border border-dashed p-6">
            <p className="text-lg font-semibold">
              🚧 Coming Soon
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              This feature will be available in an upcoming sprint.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}