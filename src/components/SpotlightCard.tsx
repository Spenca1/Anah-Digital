"use client";



import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

export default function SpotlightCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      "
    >
      {/* Spotlight */}

      <motion.div
        className="
        pointer-events-none
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        "
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(37,99,235,.18),
              transparent 80%
            )
          `,
        }}
      />

      {children}
    </motion.div>
  );
}