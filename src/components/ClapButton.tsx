"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaHandsClapping } from "react-icons/fa6";

interface Props {
  slug: string;
  initialClaps: number;
}

export default function ClapButton({
  slug,
  initialClaps,
}: Props) {
  const [claps, setClaps] = useState(initialClaps);

  const [clicked, setClicked] = useState(false);

  async function handleClap() {
    setClicked(true);
    
     console.log("Slug:", slug); 

    const res = await fetch(`/api/posts/${slug}/clap`, {
      method: "POST",
    });

    const data = await res.json();

    setClaps(data.claps);

    setTimeout(() => {
      setClicked(false);
    }, 300);
  }

  return (
    <div className="mt-14 flex items-center gap-5">

        

      <motion.button
        whileTap={{
          scale: 0.85,
        }}
        animate={
          clicked
            ? {
                scale: [1, 1.3, 1],
                rotate: [0, -10, 10, 0],
              }
            : {}
        }
        transition={{
          duration: 0.4,
        }}
        onClick={handleClap}
        className="
        flex
        items-center
        gap-3
        rounded-full
        bg-blue-600
        px-6
        py-3
        font-semibold
        text-white
        shadow-lg
        hover:bg-blue-700
        "
      >
        <FaHandsClapping size={22} />

        Clap
      </motion.button>

      <motion.span
        key={claps}
        initial={{
          y: -8,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="text-lg font-semibold"
      >
        {claps} Claps
      </motion.span>

     

    </div>
  );
}