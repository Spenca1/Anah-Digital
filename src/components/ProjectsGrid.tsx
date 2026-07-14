"use client";


import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import Link from "next/link";


export default function ProjectsGrid() {
  return (
    <div className="mt-20 grid gap-10 lg:grid-cols-2">
      {projects.map((project, index) => (

        <Link href={`/projects/${project.slug}`}>
  <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
          whileHover={{ y: -10 }}
          className="
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white
          shadow-lg
          transition-all
          duration-300
          hover:shadow-2xl
          dark:border-gray-800
          dark:bg-zinc-900
          "
        >
          <Link href={`/projects/${project.slug}`}>

            <div className="relative">

              {project.featured && (
                <div
                  className="
                  absolute
                  left-5
                  top-5
                  rounded-full
                  bg-blue-600
                  px-4
                  py-1
                  text-sm
                  font-semibold
                  text-white
                  z-10
                  "
                >
                  ★ Featured
                </div>
              )}

              <img
                src={project.image}
                alt={project.title}
                className="
                h-72
                w-full
                object-cover
                transition-transform
                duration-500
                hover:scale-105
                "
              />

            </div>

            <div className="p-8">

              <p className="font-semibold text-blue-600">
                {project.category}
              </p>

              <h2 className="mt-3 text-3xl font-black">
                {project.title}
              </h2>

              <p className="mt-5 leading-8 text-gray-500 dark:text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                    rounded-full
                    bg-blue-100
                    px-4
                    py-2
                    text-sm
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

            </div>

          </Link>

          <div className="flex gap-4 px-8 pb-8">

            <a href={project.github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              px-5
              py-3
              transition
              hover:bg-blue-600
              hover:text-white
              "
            >
              <FaGithub size={18} />
              GitHub
            </a>

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

          </div>

          </motion.div>
</Link>
      ))}
    </div>
  );
}