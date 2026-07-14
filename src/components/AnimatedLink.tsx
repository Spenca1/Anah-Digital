"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AnimatedLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: .96,
      }}
      transition={{
        duration: .2,
      }}
    >
      <Link
        href={href}
        className={className}
      >
        {children}
      </Link>
    </motion.div>
  );
}