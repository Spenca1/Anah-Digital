"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

export default function PremiumCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set((x - centerX) / 18);
    rotateX.set(-(y - centerY) / 18);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className="relative rounded-3xl"
    >
      {/* Spotlight */}

      <motion.div
        className="
        pointer-events-none
        absolute
        inset-0
        rounded-3xl
        opacity-0
        transition-opacity
        duration-300
        group-hover:opacity-100
        "
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(59,130,246,.35),
              transparent 70%
            )
          `,
        }}
      />

      {children}
    </motion.div>
  );
}