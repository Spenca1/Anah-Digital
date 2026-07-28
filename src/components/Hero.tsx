"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1], // replaces "easeOut"
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div
        className="
        absolute
        inset-0
        -z-10
        bg-[radial-gradient(circle_at_top_right,#2563eb22,transparent_40%)]
        "
      />
 <div
className="
absolute
left-0
top-40
h-80
w-80
rounded-full
bg-blue-500/10
blur-[120px]
-translate-x-1/2
"
/>
      <div
        className="
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-16
        px-6
        py-24
        lg:grid-cols-2
        "
      >

        {/* LEFT */}

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          <motion.div
  variants={fadeUp}
  className="
  mb-8
  inline-flex
  items-center
  gap-2
  rounded-full
  border
  border-green-500/20
  bg-green-500/10
  px-4
  py-2
  text-sm
  font-medium
  backdrop-blur
  "
>

  <span
    className="
    h-2.5
    w-2.5
    rounded-full
    bg-green-500
    animate-pulse
    "
  />

  Available for Freelance Projects

</motion.div>

         <motion.p
  variants={fadeUp}
  className="
  text-sm
  font-semibold
  uppercase
  tracking-[0.3em]
  text-blue-600
  "
>
  FULL STACK SOFTWARE ENGINEER
</motion.p>

<motion.h2
  variants={fadeUp}
  className="
  mt-4
  text-xl
  font-semibold
  text-gray-700
  dark:text-gray-300
  "
>
  👋 Hi, I'm Anah Thankgod Uche.
</motion.h2>

          <motion.h1
variants={fadeUp}
className="
text-5xl
font-black
leading-tight
tracking-tight
sm:text-6xl
lg:text-7xl
"
>

I Build Modern Software


<span className="block">

That Helps 

</span>

<span
className="
bg-gradient-to-r
from-blue-600
to-cyan-400
bg-clip-text
text-transparent
"
>

Businesses Grow.

</span>

</motion.h1>

          <motion.p
variants={fadeUp}
className="
mt-8
max-w-2xl
text-lg
leading-8
text-gray-600
dark:text-gray-400
"
>

I design and build modern websites,
high-performance web applications, Mobile Applications
and scalable digital solutions that help
businesses increase revenue,
attract customers,
and grow online.

</motion.p>

<motion.div
  variants={fadeUp}
  className="
  mt-8
  flex
  flex-wrap
  gap-3
"
>
  {[
    "Next.js",
    "React",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
  ].map((tech) => (
    <span
      key={tech}
      className="
      rounded-full
      border
      border-blue-200
      bg-blue-50
      px-4
      py-2
      text-sm
      font-medium
      text-blue-700
      dark:border-blue-900
      dark:bg-blue-950/30
      dark:text-blue-300
      "
    >
      {tech}
    </span>
  ))}
</motion.div>

          {/* Buttons */}

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-5"
          >

            <div className="mt-10 flex flex-wrap gap-5">

<Link href="#contact">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="
    rounded-xl
    bg-blue-600
    px-8
    py-4
    font-semibold
    text-white
    shadow-xl
    shadow-blue-600/30
    transition
    hover:bg-blue-700
    cursor-pointer
    "
  >
    Start a Project
  </motion.button>
</Link>

<Link href="/projects">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="
    rounded-xl
    border
    border-gray-300
    bg-white/30
    px-8
    py-4
    font-semibold
    backdrop-blur
    transition
    hover:border-blue-600
    hover:text-blue-600
    dark:bg-white/5
    dark:border-gray-700
    cursor-pointer
    "
  >
    Explore my work
  </motion.button>
</Link>

</div>

          </motion.div>

          {/* Statistics */}

          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-wrap gap-10"
          >

            <motion.div
              whileHover={{
                y: -8,
              }}
            >
              <h3 className="text-3xl font-bold text-blue-600">
                20+
              </h3>

              <p className="text-gray-500">
                Projects built
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
              }}
            >
              <h3 className="text-3xl font-bold text-blue-600">
                100%
              </h3>

              <p className="text-gray-500">
                Commitment 
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
              }}
            >
              
              <h3 className="text-3xl font-bold text-blue-600">
                3+
              </h3>

              <p className="text-gray-500">
                Years Learning
              </p>
            </motion.div>

          </motion.div>

        </motion.div>
        

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
}}
          className="relative flex justify-center"
        >

          <div
            className="
            absolute
            h-[500px]
            w-[500px]
            rounded-full
            bg-gradient-to-br
            from-blue-600/30
            via-blue-500/10
            to-transparent
            blur-3xl
            "
          />

          <motion.img
initial={{ y: 0 }}
animate={{ y: [-10, 10, -10] }}

transition={{
  repeat: Infinity,
  duration: 5,
  ease: [0.42, 0, 0.58, 1],
}}

src="/images/mockup.png"

alt="Hero"

className="
relative
w-full
h-150
max-w-xl
drop-shadow-[0_30px_60px_rgba(37,99,235,0.25)]
"
/>

        </motion.div>

      </div>

    </section>

  );
}











