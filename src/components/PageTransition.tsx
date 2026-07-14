"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={pathname}

        initial={{
          opacity: 0,
          y: 30,
          scale: 0.985,
          filter: "blur(12px)",
        }}

        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}

        exit={{
          opacity: 0,
          y: -20,
          scale: 1.015,
          filter: "blur(12px)",
        }}

        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1], // Premium easing
        }}

        className="will-change-transform"
      >
        {children}
      </motion.div>

    </AnimatePresence>
  );
}