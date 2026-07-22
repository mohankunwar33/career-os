import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  FileText,
  FolderKanban,
  LayoutDashboard,
  NotebookText,
  Settings,
  Target,
} from "lucide-react";

const navigationItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Roadmaps", href: "/roadmaps", icon: BookOpen },
  { name: "Planner", href: "/planner", icon: Target },
  { name: "Calendar", href: "/calendar", icon: CalendarDays },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Notes", href: "/notes", icon: NotebookText },
  { name: "Resources", href: "/resources", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 border-r bg-background md:block">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="text-xl font-bold">
          CareerOS
        </Link>
      </div>

      <nav className="space-y-1 p-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}