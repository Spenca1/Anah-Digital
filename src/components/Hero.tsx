"use client";
import Link from "next/link";
import { motion } from "framer-motion";


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
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
            font-semibold
            uppercase
            tracking-widest
            text-blue-600
            "
          >
            Digital Solutions For Nigerian Businesses
          </motion.p>

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

Building digital

<span className="block">

experiences that

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

grow businesses.

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
    Let's Work Together
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
    View Projects
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
                Projects Delivered
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
                Client Satisfaction
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
                Years Experience
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
            ease: "easeOut",
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
ease: "easeInOut",
}}

src="/images/mockup.png"

alt="Hero"

className="
relative
w-full
h-150
max-w-lg
drop-shadow-2xl
"
/>

        </motion.div>

      </div>

    </section>
  );
}