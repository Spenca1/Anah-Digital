"use client";
import Reveal from "@/components/Reveal";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

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
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault();

  setLoading(true);
  setError("");
  setSuccess("");

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
    }),
  });

  const data = await response.json();

  setLoading(false);

  if (!response.ok) {
    setError(data.error);
    return;
  }

  setSuccess(
    "Message sent successfully! I'll get back to you soon."
  );

  setName("");
  setEmail("");
  setSubject("");
  setMessage("");
}
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
            Ready to Turn Your Idea Into Reality?
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
            Whether you need a modern website, a custom web application,
             or a complete business solution, I'd love to hear about your project 
            and discuss how I can help bring it to life.
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
                  Calabar, Nigeria
                </p>
              </div>

            </motion.div>
            <motion.div className="mt-8 rounded-2xl border p-5 bg-green-500/5">
    <h3 className="font-semibold text-green-600">
        🟢 Available for Freelance
    </h3>

    <p className="mt-2 text-gray-500">
        Usually responds within 24 hours.
    </p>
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
                href="https://wa.me/2348122641971" 
                className="
                rounded-full
                border
                p-4
                transition
                hover:bg-blue-600
                hover:text-white
                "
              >
                <FaWhatsapp size={20} />
              </a>
              

              <a
                href="https://www.linkedin.com/in/thankgod-anah-792ab5268/"
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
  onSubmit={handleSubmit}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
            bg-white/80
            dark:bg-neutral-900/80
            backdrop-blur-xl
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
                placeholder="Full Name"
                value={name}
onChange={(e) => setName(e.target.value)}
                className="
                mb-5
                w-full
                rounded-xl
                border
                px-5
                py-4
                outline-none
                focus:border-blue-600
                focus:ring-4
                focus:ring-blue-600/20
                "
              />

            </motion.div>

            <motion.div variants={fadeUp}>

              <input
                type="email"
                placeholder="Email Address"
                value={email}
onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Project Type"
                value={subject}
onChange={(e) => setSubject(e.target.value)}
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
                value={message}
onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your project, goals, timeline and any specific requirements..."
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
              {error && (
  <p className="mt-4 text-red-600">
    {error}
  </p>
)}

{success && (
  <p className="mt-4 text-green-600">
    {success}
  </p>
)}

              <button
  disabled={loading}
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
  disabled:cursor-not-allowed
  disabled:opacity-60
  "
>
  <Send size={18} />

  {loading ? "Sending..." : "Send Message"}
</button>

            </motion.div>

          </motion.form>

        </div>

      </div>

    </section>
    </Reveal>
  );
}