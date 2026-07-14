"use client";

import { useState } from "react";
import ServiceModal from "@/components/ServiceModal";
import Reveal from "@/components/Reveal";
import StaggerContainer from "@/components/StaggerContainer";
import StaggerItem from "@/components/StaggerItem";
import SpotlightCard from "@/components/SpotlightCard";
import PremiumCard from "@/components/PremiumCard";

import {
  Code2,
  Smartphone,
  Database,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";


const services = [
  
    {
  title: "Web Development",

  icon: Code2,

  description:
    "Modern websites and scalable web applications built with React, Next.js and TypeScript.",

  features: [
    "Business Websites",
    "Landing Pages",
    "Portfolio Websites",
    "E-Commerce Stores",
    "Admin Dashboards",
    "SEO Optimization",
  ],

  projects: [
    "Food Ordering Platform",
    "Business Website Platform",
    "Fanimation Store",
  ],
},


{
  title: "Mobile Apps",

  icon: Smartphone,

  description:
    "Cross-platform mobile applications that deliver smooth user experiences on Android and iOS.",

  features: [
    "Business Websites",
    "Landing Pages",
    "Portfolio Websites",
    "E-Commerce Stores",
    "Admin Dashboards",
    "SEO Optimization",
  ],

  projects: [
    "Food Ordering Platform",
    "Business Website Platform",
    "Fanimation Store",
  ],
},


{
  title: "Backend & APIs",

  icon: Database,

  description:
    "Secure APIs, databases and cloud infrastructure powering reliable digital products.",

  features: [
    "Business Websites",
    "Landing Pages",
    "Portfolio Websites",
    "E-Commerce Stores",
    "Admin Dashboards",
    "SEO Optimization",
  ],

  projects: [
    "Food Ordering Platform",
    "Business Website Platform",
    "Fanimation Store",
  ],
},
];

export default function Services() {
  const [selectedService, setSelectedService] = useState <any>(null);
  return (
    <Reveal>
      <section
        id="services"
        className="relative px-6 py-28"
      >
        {/* Background Glow */}

        <div
          className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top_left,#2563eb12,transparent_45%)]
          "
        />

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="text-center"
          >
            <p className="font-semibold text-blue-600">
              SERVICES
            </p>

            <h2 className="mt-4 text-5xl font-black">
              What I Do
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
              Helping businesses build beautiful,
              fast and scalable digital products.
            </p>
          </motion.div>

          {/* Services Grid */}

          <StaggerContainer>

            <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {services.map((service) => {

                const Icon = service.icon;

                return (

                  <StaggerItem key={service.title}>
                    <PremiumCard>

<div
className="
group
relative
overflow-hidden
rounded-3xl
border
border-gray-200
bg-white/70
p-8
backdrop-blur-xl
transition-all
duration-300
hover:shadow-2xl
hover:shadow-blue-500/20
dark:border-gray-800
dark:bg-white/5
"
>

                      {/* Hover Glow */}

                      <div
                        className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-blue-600/0
                        via-blue-600/5
                        to-blue-600/20
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:opacity-100
                        "
                      />

                      {/* Icon */}

                      <div
                        className="
                        relative
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-600
                        to-cyan-500
                        text-white
                        shadow-xl
                        shadow-blue-500/30
                        "
                      >
                        <motion.div
animate={{
  y: [0, -5, 0],
}}
transition={{
  duration: 3,
  repeat: Infinity,
}}
whileHover={{
  scale: 1.3,
  rotate: 12,
}}
>
                          <Icon size={30} />
                        </motion.div>
                      </div>

                      {/* Title */}

                      <h3 className="relative mt-8 text-2xl font-bold">
                        {service.title}
                      </h3>

                      {/* Description */}

                      <p className="relative mt-5 leading-8 text-gray-500 dark:text-gray-400">
                        {service.description}
                      </p>

                      {/* Button */}

               <button

onClick={() => setSelectedService(service)}

className="
relative
mt-8
flex
items-center
gap-2
font-semibold
text-blue-600
transition
hover:gap-4
"

>

                        <motion.div
whileHover={{
  x: 6,
}}
transition={{
  repeat: Infinity,
  repeatType: "reverse",
  duration: .5,
}}
>
  <ArrowRight size={18} />
</motion.div>
                      </button>

                    </div>
                    </PremiumCard>

                  </StaggerItem>

                );

              })}

            </div>

          </StaggerContainer>

          {/* Decorative Line */}

          <div className="mt-20 flex justify-center">

            <div
              className="
              h-px
              w-40
              bg-gradient-to-r
              from-transparent
              via-blue-500
              to-transparent
              "
            />

          </div>

        </div>

      </section>
      <ServiceModal

open={selectedService !== null}

service={selectedService}

onClose={() => setSelectedService(null)}

/>
    </Reveal>
  );
}