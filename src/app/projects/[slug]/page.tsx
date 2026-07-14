import { notFound } from "next/navigation";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-24">

        <p className="font-semibold uppercase tracking-widest text-blue-600">
          {project.category}
        </p>

        <h1 className="mt-6 text-6xl font-black">
          {project.title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-500 dark:text-gray-400">
          {project.description}
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

         {project.demo === "#" ? (

  <button
    disabled
    className="
    flex
    items-center
    gap-2
    rounded-xl
    bg-gray-400
    px-5
    py-3
    text-white
    cursor-not-allowed
    "
  >
    <ExternalLink size={18} />
    Coming Soon
  </button>

) : (

  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="
    flex
    items-center
    gap-2
    rounded-xl
    bg-blue-600
    px-5
    py-3
    text-white
    transition
    hover:bg-blue-700
    "
  >
    <ExternalLink size={18} />
    Live Demo
  </a>

)}

          <a
            href={project.github}
            target="_blank"
            className="
            rounded-xl
            border
            px-6
            py-3
            font-semibold
            transition
            hover:bg-gray-100
            dark:hover:bg-zinc-800
            "
          >
            GitHub
          </a>

        </div>

        {/* Hero Image */}

        <div className="mt-20 overflow-hidden rounded-3xl border">

          <img
            src={project.image}
            alt={project.title}
            className="w-full"
          />

        </div>

        {/* Challenge */}

        <section className="mt-24">

          <h2 className="text-4xl font-bold">
            The Challenge
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
            {project.challenge}
          </p>

        </section>

        {/* Solution */}

        <section className="mt-20">

          <h2 className="text-4xl font-bold">
            My Solution
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
            {project.solution}
          </p>

        </section>

        {/* Features */}

        <section className="mt-20">

          <h2 className="text-4xl font-bold">
            Key Features
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {project.features.map((feature) => (

              <div
                key={feature}
                className="rounded-xl border p-6"
              >
                ✅ {feature}
              </div>

            ))}

          </div>

        </section>

        {/* Technologies */}

        <section className="mt-20">

          <h2 className="text-4xl font-bold">
            Technology Stack
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">

            {project.technologies.map((tech) => (

              <span
                key={tech}
                className="
                rounded-full
                bg-blue-100
                px-4
                py-2
                font-medium
                text-blue-700
                dark:bg-blue-900/30
                dark:text-blue-300
                "
              >
                {tech}
              </span>

            ))}

          </div>

        </section>

        {/* Back Button */}

        <div className="mt-24">

          <Link
            href="/projects"
            className="
            rounded-xl
            border
            px-6
            py-3
            font-semibold
            transition
            hover:bg-gray-100
            dark:hover:bg-zinc-800
            "
          >
            ← Back to Projects
          </Link>

        </div>

      </main>

      <Footer />
    </>
  );
}