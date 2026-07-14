"use client";

import Reveal from "@/components/Reveal";
import Link from "next/link";
import { ChevronUp } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <Reveal delay={0.25}>
      <footer
        className="
        relative
        overflow-hidden
        border-t
        dark:bg-neutral-950
        transition-colors
        duration-500
      "
      >
        {/* Background Glow */}

        <div
          className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_bottom_left,#2563eb10,transparent_45%)]
        "
        />

        {/* Top Section */}

        <div
          className="
          mx-auto
          max-w-7xl
          grid
          gap-14
          px-6
          py-20
          md:grid-cols-4
        "
        >
          {/* Brand */}

          <div>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              Anah
              <span className="text-blue-600">.</span>
            </h2>

            <p
              className="
              mt-6
              leading-8
              text-gray-600
              dark:text-gray-400
            "
            >
              Building premium software, digital products and AI-powered
              solutions for businesses that want to grow.
            </p>
          </div>

          {/* Links */}

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">
              Quick Links
            </h3>

            <div
              className="
              mt-6
              flex
              flex-col
              gap-4
              text-gray-600
              dark:text-gray-400
            "
            >
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>

              <Link href="/blog" className="hover:text-blue-600 transition">
                Blog
              </Link>

              <a href="#services" className="hover:text-blue-600 transition">
                Services
              </a>

              <a href="#projects" className="hover:text-blue-600 transition">
                Projects
              </a>

              <a href="#about" className="hover:text-blue-600 transition">
                About
              </a>

              <a href="#contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">
              Services
            </h3>

            <div
              className="
              mt-6
              flex
              flex-col
              gap-4
              text-gray-600
              dark:text-gray-400
            "
            >
              <p>Web Development</p>
              <p>Mobile Apps</p>
              <p>Business Websites</p>
              <p>AI Solutions</p>
              <p>Business Automation</p>
            </div>
          </div>

          {/* Connect */}

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">
              Connect
            </h3>

            <div className="mt-6 flex gap-4">
              {[
                {
                  href: "https://github.com/Spenca1",
                  icon: <FaGithub size={20} />,
                },
                {
                  href: "https://linkedin.com/",
                  icon: <FaLinkedin size={20} />,
                },
                {
                  href: "https://x.com/AnahUchechukwu_",
                  icon: <FaXTwitter size={20} />,
                },
                {
                  href: "https://www.instagram.com/luvdoctor4_real/",
                  icon: <FaInstagram size={20} />,
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  rounded-full
                  border
                  border-gray-300
                  dark:border-gray-700
                  p-3
                  text-gray-700
                  dark:text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-600
                  hover:bg-blue-600
                  hover:text-white
                "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
          border-t
          border-gray-200
          dark:border-gray-800
         
        "
        >
          <div
            className="
            mx-auto
            max-w-7xl
            px-6
            py-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
          >
            <p className="text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Anah Digital. All rights reserved.
            </p>

            <p className="text-gray-500 dark:text-gray-400">
              Built with Next.js & Tailwind CSS
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
              rounded-full
              bg-blue-600
              p-3
              text-white
              transition-all
              duration-300
              hover:scale-110
              hover:shadow-lg
              hover:shadow-blue-600/40
            "
            >
              <ChevronUp size={18} />
            </button>
          </div>
        </div>
      </footer>
    </Reveal>
  );
}