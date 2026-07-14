import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import PageTransition from "@/components/PageTransition";
import AdminThemeToggle from "@/components/AdminThemeToggle";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
  className="
  min-h-screen
  flex
  bg-white
  text-black
  dark:bg-black
  dark:text-white
  transition-colors
  duration-300
"
>

      {/* Sidebar */}

      <aside
        className="
        w-64
        border-r
        border-gray-200
        dark:border-gray-800
        p-6
        space-y-8
        bg-white
        dark:bg-zinc-950
        "
      >

        <h2 className="text-2xl font-bold">
          Anah CMS
        </h2>

        <nav className="space-y-4">

          <Link
            href="/admin"
            className="block transition hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/subscribers"
            className="block transition hover:text-blue-600"
          >
            Subscribers
          </Link>

          <Link
            href="/admin/posts"
            className="block transition hover:text-blue-600"
          >
            Articles
          </Link>

          <Link
            href="/admin/posts/new"
            className="block transition hover:text-blue-600"
          >
            Create Article
          </Link>

          <Link
            href="/admin/analytics"
            className="block transition hover:text-blue-600"
          >
            Analytics
          </Link>

        </nav>

        <div className="pt-10 space-y-4">
  <AdminThemeToggle />
  <LogoutButton />
</div>

      </aside>

      {/* Page Content */}

      <main
  className="
  flex-1
  overflow-y-auto
  bg-white
  dark:bg-black
  text-black
  dark:text-white
  transition-colors
  duration-300
  p-8
"
>

        <PageTransition>
          {children}
        </PageTransition>

      </main>

    </div>
  );
}