"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "Building Websites...",
  "Creating Experiences...",
  "Engineering Solutions...",
  "Launching Ideas...",
  "Welcome.",
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  const [text, setText] = useState("");

  const [messageIndex, setMessageIndex] = useState(0);

  // Typing Effect
  useEffect(() => {
    const word = "Anah.";

    let current = 0;

    const typing = setInterval(() => {
      current++;

      setText(word.slice(0, current));

      if (current === word.length) {
        clearInterval(typing);
      }
    }, 180);

    return () => clearInterval(typing);
  }, []);

  // Rotating Messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Loader Duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
            },
          }}
          className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          bg-white
          dark:bg-black
          "
        >
          <div className="text-center">

            {/* Logo */}

            <motion.h1
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
              text-7xl
              font-black
              tracking-tight
              "
            >
              {text.slice(0, -1)}
              <span className="text-blue-600">
                {text.endsWith(".") ? "." : ""}
              </span>

              <motion.span
                animate={{
                  opacity: [1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: .7,
                }}
              >
                |
              </motion.span>
            </motion.h1>

            {/* Progress Line */}

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 220,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="
              mx-auto
              mt-8
              h-1
              rounded-full
              bg-blue-600
              "
            />

            {/* Loading Messages */}

            <AnimatePresence mode="wait">

              <motion.p
                key={messages[messageIndex]}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: .35,
                }}
                className="
                mt-8
                text-lg
                text-gray-500
                dark:text-gray-400
                "
              >
                {messages[messageIndex]}
              </motion.p>

            </AnimatePresence>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}