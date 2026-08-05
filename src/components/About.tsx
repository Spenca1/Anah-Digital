"use client";
import Reveal from "@/components/Reveal";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

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
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const skills = [
  "Full Stack Development",
  "Next.js & React",
  "Mobile Applications",
  "Database Design",
  "Business Solutions",
  "SEO Optimization",
  "AI Integration",
  "Modern UI/UX",
];

const stats = [
  {
    number: "20+",
    label: "Projects",
  },
  {
    number: "100%",
    label: "Commitment",
  },
  {
    number: "3+",
    label: "Years Learning",
  },
  {
    number: "∞",
    label: "Passion",
  },
];

export default function About() {
  return (
    <Reveal delay={0.15}>
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background */}

      <div
        className="
        absolute
        inset-0
        -z-10
        bg-[radial-gradient(circle_at_top_left,#2563eb15,transparent_45%)]
        "
      />

      <div className="mx-auto max-w-7xl">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
          grid
          items-center
          gap-20
          lg:grid-cols-2
          "
        >

          {/* LEFT */}

          <div>

            <motion.p
              variants={fadeUp}
              className="font-semibold text-blue-600"
            >
              ABOUT ME
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-5xl font-black leading-tight"
            >
             Helping Businesses
             
              Grow Through

              <span className="text-blue-600">
                {" "}
                Modern Software.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
              mt-8
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-400
              "
            >
             I'm a Full Stack Software Engineer passionate about building secure, 
             scalable, and user-friendly digital products. 
             From business websites to full-stack web and Mobile applications.

              <br />
              <br />

             I enjoy transforming ideas into software that helps organizations grow
              and creates meaningful experiences for users.
            </motion.p>

            <motion.div
              variants={stagger}
              className="
              mt-10
              grid
              gap-4
              sm:grid-cols-2
              "
            >
              {skills.map((skill) => (

                <motion.div
                  variants={fadeUp}
                  key={skill}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    className="text-blue-600"
                    size={20}
                  />

                  <span>{skill}</span>

                </motion.div>

              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="
              mt-12
              flex
              flex-wrap
              gap-5
              "
            >

              <a
                href="/files/Anah CV.pdf"
                download
                className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-blue-600
                px-7
                py-4
                font-semibold
                text-white
                transition
                hover:-translate-y-1
                hover:bg-blue-700
                "
              >
                <Download size={20} />

                Download Resume
              </a>

            

              <a
                href="#contact"
                className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                px-7
                py-4
                font-semibold
                transition
                hover:border-blue-600
                hover:text-blue-600
                "
              >
                Let's Talk

                <ArrowRight size={18} />
              </a>

            </motion.div>

          </div>

          {/* RIGHT */}

         <motion.div
  variants={fadeUp}
  className="
  relative
  mx-auto
  max-w-md
  lg:max-w-lg
">

            <div
              className="
              absolute
              inset-0
              rounded-[40px]
              bg-blue-600/20
              blur-3xl
              "
            />

            <div
              className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-gray-200
              bg-white
              p-5
              shadow-2xl
              dark:border-gray-800
              dark:bg-neutral-900
              "
            >


<img
  src="/images/About-me.jpg"
  alt="Anah Uche"
  className="w-full rounded-[30px] object-cover"
/>


            </div>
            <h2 className="text-center mt-5 font-bold"> 
  Anah Thankgod Uche.
<br> 
</br>
Full Stack Software Engineer
</h2>

          </motion.div>

        </motion.div>

        {/* Statistics */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
          mt-24
          grid
          gap-8
          rounded-3xl
          border
          bg-white/60
          p-10
          backdrop-blur-xl
          dark:border-gray-800
          dark:bg-neutral-900/60
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >

          {stats.map((item) => (

            <motion.div
              variants={fadeUp}
              key={item.label}
              className="text-center"
            >

              <h3
                className="
                text-5xl
                font-black
                text-blue-600
                "
              >
                {item.number}
              </h3>

              <p
                className="
                mt-3
                text-gray-500
                dark:text-gray-400
                "
              >
                {item.label}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
    </Reveal>
  );
}