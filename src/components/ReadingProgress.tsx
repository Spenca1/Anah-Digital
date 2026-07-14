"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        (scrollTop / documentHeight) * 100;

      setProgress(percentage);
    }

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div
      className="
      fixed
      top-0
      left-0
      z-[9999]
      h-1
      w-full
      bg-transparent
      "
    >
      <div
       className="
h-full
bg-gradient-to-r
from-blue-500
via-cyan-500
to-indigo-600
shadow-[0_0_12px_rgba(37,99,235,.6)]
transition-[width]
duration-150
ease-out
"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}