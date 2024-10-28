import { Header } from "@/components/dashboard/header";
import { DashboardNav } from "@/components/dashboard/nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 lg:block">
          <DashboardNav />
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}