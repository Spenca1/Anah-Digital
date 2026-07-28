"use client";

import { Globe, ArrowUpRight, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";


const projects = [
  {
    title: "Food Ordering Platform",
    description:
      "Full Stack CMS built to help businesses publish content, manage subscribers, track analytics and improve SEO.",

    image: "/images/Restaurant.png",

    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind",
    ],

    live: "",
    github: "",

    featured: true,
  },

  {
    title: "Fanimation Store",

    description:
      "A modern fan e-commerce platform built with React and modern frontend technologies.",

    image: "/images/Fanimation.png",

    stack: [
      "React",
      "Tailwind CSS",
    ],

    live: "https://fanimation-website-two.vercel.app",
    github: "https://github.com/Spenca1/fanimation-website-",
  },

  {
    title: "Business Management System",

    description:
      "A digital system designed to help businesses manage business operations efficiently.",

    image: "/images/business.png",

    stack: [
      "Next.js",
      "Prisma",
      "MySQL",
    ],

    live: null,
    github: null,
  },

  {
    title: "Business Website Platform",

    description:
      "Professional business websites designed to help companies attract customers online.",

    image: "/images/website.png",

    stack: [
      "Next.js",
      "SEO",
      "Tailwind",
    ],

    live: null,
    github: null,
  },

  {
    title: "Task Manager",

    description:
      "Productivity application helping teams organize work and manage daily tasks.",

    image: "/images/tasks.png",

    stack: [
      "Next.js",
      "MongoDB",
    ],

    live: null,
    github: null,
  },
];

export default function Projects() {
  return (
    <Reveal> 
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        inset-0
        -z-10
        bg-[radial-gradient(circle_at_bottom_right,#2563eb12,transparent_45%)]
        "
      />

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="font-semibold text-blue-600">
            PORTFOLIO
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            Every project below represents a real-world solution designed with scalability, 
            performance and user experience in mind.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: .6,
                delay: index * .12,
              }}

              viewport={{
                once: true,
              }}

            whileHover={{
  y: -10,
  scale: 1.02,
}}

              className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-gray-200
              bg-white
              shadow-sm
              transition
              hover:shadow-2xl
              hover:shadow-blue-500/10
              dark:border-gray-800
              dark:bg-white/5
              "
            >

              <div className="relative overflow-hidden">

                {project.featured && (

                  <div
                    className="
                    absolute
                    left-4
                    top-4
                    z-10
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-blue-600
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-white
                    "
                  >

                    <Star size={14} />

                    Featured

                  </div>

                )}

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  h-60
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                  "
                />

                <div
  className="
  absolute
  inset-0
  bg-gradient-to-t
  from-black/70
  via-black/10
  to-transparent
  opacity-0
  transition-all
  duration-500
  group-hover:opacity-100
  "
/>

              </div>

              <div className="p-7">

                <h3
  className="
  text-2xl
  font-bold
  transition-all
  duration-300
  group-hover:text-blue-600
  "
>
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.stack.map((tech) => (

                    <span
                      key={tech}
                      className="
rounded-full
bg-blue-50
px-3
py-1
text-sm
font-medium
text-blue-700
transition-all
duration-300
group-hover:scale-105
group-hover:bg-blue-600
group-hover:text-white
dark:bg-blue-900/30
dark:text-blue-300
"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-8 flex gap-4">

  {project.live && (
    <a
      href={project.live}
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
      font-medium
      text-white
      transition
      hover:bg-blue-700
      "
    >
      <Globe size={18} />
      Live
      <ArrowUpRight size={16} />
    </a>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="
      flex
      items-center
      gap-2
      rounded-xl
      border
      px-5
      py-3
      transition
      hover:border-blue-600
      hover:text-blue-600
      "
    >
      <FaGithub size={18} />
      Code
    </a>
  )}

  {!project.live && !project.github && (
    <span
      className="
      rounded-xl
      border
      px-5
      py-3
      text-gray-500
      "
    >
      Coming Soon
    </span>
  )}

</div>

              </div>
<div
className="
pointer-events-none
absolute
left-[-120%]
top-0
h-full
w-1/2
rotate-12
bg-white/20
transition-all
duration-700
group-hover:left-[140%]
"
/>
            </motion.div>

          ))}

        </div>

        <div className="mt-20 flex justify-center">

<button
className="
rounded-xl
border
border-blue-600
px-8
py-4
font-semibold
text-blue-600
transition-all
duration-300
hover:bg-blue-600
hover:text-white
hover:scale-105
"
>

View All Projects →

</button>

</div>
<div
className="
mt-24
grid
grid-cols-2
gap-8
text-center
md:grid-cols-4
"
>

<div>
<h3 className="text-4xl font-black text-blue-600">
20+
</h3>
<p className="mt-2 text-gray-500">
Projects
</p>
</div>

<div>
<h3 className="text-4xl font-black text-blue-600">
10+
</h3>
<p className="mt-2 text-gray-500">
Business Solutions
</p>
</div>

<div>
<h3 className="text-4xl font-black text-blue-600">
100%
</h3>
<p className="mt-2 text-gray-500">
Commitment
</p>
</div>

<div>
<h3 className="text-4xl font-black text-blue-600">
24/7
</h3>
<p className="mt-2 text-gray-500">
Modern Tech Stack
</p>
</div>

</div>

      </div>
    </section>
    </Reveal>
  );
}