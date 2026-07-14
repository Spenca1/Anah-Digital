import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-24">

        <section className="text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Portfolio
          </p>

          <h1 className="mt-6 text-6xl font-black leading-tight">
            Building software
            <br />
            that solves
            <span className="text-blue-600">
              {" "}real problems.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-500 dark:text-gray-400">
            Every project represents a real challenge,
            thoughtful design, modern technologies,
            and scalable engineering solutions.
          </p>

        </section>

        {/* Statistics */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border p-8 text-center">

            <h2 className="text-5xl font-black text-blue-600">
              20+
            </h2>

            <p className="mt-3 text-gray-500">
              Projects Built
            </p>

          </div>

          <div className="rounded-3xl border p-8 text-center">

            <h2 className="text-5xl font-black text-blue-600">
              3+
            </h2>

            <p className="mt-3 text-gray-500">
              Years Experience
            </p>

          </div>

          <div className="rounded-3xl border p-8 text-center">

            <h2 className="text-5xl font-black text-blue-600">
              100%
            </h2>

            <p className="mt-3 text-gray-500">
              Client Satisfaction
            </p>

          </div>

        </div>

        {/* Projects */}

        <section className="mt-28">

          <ProjectsGrid />

        </section>

      </main>

      <Footer />
    </>
  );
}