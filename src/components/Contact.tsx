"use client";
import Reveal from "@/components/Reveal";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import { FaGithub, FaLinkedin  } from "react-icons/fa";


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

export default function Contact() {
  return (
    <Reveal delay={0.2}>
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28"
    >
      <div
        className="
        absolute
        inset-0
        -z-10
        bg-[radial-gradient(circle_at_top_right,#2563eb15,transparent_45%)]
        "
      />

      <div className="mx-auto max-w-7xl">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >

          <motion.p
            variants={fadeUp}
            className="font-semibold text-blue-600"
          >
            CONTACT
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-5xl font-black"
          >
            Let's Build Something Amazing
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            text-gray-500
            dark:text-gray-400
            "
          >
            Have a project in mind, a job opportunity,
            or simply want to connect? I'd love to hear
            from you.
          </motion.p>

        </motion.div>

        <div
          className="
          mt-20
          grid
          gap-16
          lg:grid-cols-2
          "
        >

          {/* LEFT */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <motion.div
              variants={fadeUp}
              className="
              mb-6
              flex
              items-center
              gap-4
              rounded-2xl
              border
              p-5
              backdrop-blur-xl
              "
            >
              <Mail className="text-blue-600" />

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-gray-500">
                  anahthankgod@gmail.com 
                </p>
              </div>

            </motion.div>

            <motion.div
              variants={fadeUp}
              className="
              mb-6
              flex
              items-center
              gap-4
              rounded-2xl
              border
              p-5
              backdrop-blur-xl
              "
            >
              <Phone className="text-blue-600" />

              <div>
                <h3 className="font-semibold">
                  Phone
                </h3>

                <p className="text-gray-500">
                  +234 812 264 1971
                </p>
              </div>

            </motion.div>

            <motion.div
              variants={fadeUp}
              className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              p-5
              backdrop-blur-xl
              "
            >
              <MapPin className="text-blue-600" />

              <div>
                <h3 className="font-semibold">
                  Location
                </h3>

                <p className="text-gray-500">
                  Lagos, Nigeria
                </p>
              </div>

            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex gap-5"
            >

              <a
                href="https://github.com/Spenca1"
                className="
                rounded-full
                border
                p-4
                transition
                hover:bg-blue-600
                hover:text-white
                "
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                className="
                rounded-full
                border
                p-4
                transition
                hover:bg-blue-600
                hover:text-white
                "
              >
                <FaLinkedin size={20} />
              </a>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
            rounded-3xl
            border
            p-8
            shadow-xl
            backdrop-blur-xl
            "
          >

            <motion.div variants={fadeUp}>

              <input
                type="text"
                placeholder="Your Name"
                className="
                mb-5
                w-full
                rounded-xl
                border
                px-5
                py-4
                outline-none
                focus:border-blue-600
                "
              />

            </motion.div>

            <motion.div variants={fadeUp}>

              <input
                type="email"
                placeholder="Email Address"
                className="
                mb-5
                w-full
                rounded-xl
                border
                px-5
                py-4
                outline-none
                focus:border-blue-600
                "
              />

            </motion.div>

            <motion.div variants={fadeUp}>

              <input
                type="text"
                placeholder="Subject"
                className="
                mb-5
                w-full
                rounded-xl
                border
                px-5
                py-4
                outline-none
                focus:border-blue-600
                "
              />

            </motion.div>

            <motion.div variants={fadeUp}>

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="
                w-full
                rounded-xl
                border
                px-5
                py-4
                outline-none
                resize-none
                focus:border-blue-600
                "
              />

            </motion.div>

            <motion.div variants={fadeUp}>

              <button
                className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:-translate-y-1
                hover:bg-blue-700
                "
              >
                <Send size={18} />

                Send Message
              </button>

            </motion.div>

          </motion.form>

        </div>

      </div>

    </section>
    </Reveal>
  );
}