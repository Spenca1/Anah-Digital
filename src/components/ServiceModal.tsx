"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

type Service = {
  title: string;
  description: string;
  features: string[];
  projects: string[];
};

export default function ServiceModal({
  open,
  onClose,
  service,
}: {
  open: boolean;
  onClose: () => void;
  service: Service | null;
}) {
  return (
    <AnimatePresence>

      {open && service && (

        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          exit={{ opacity: 0 }}

          onClick={onClose}

          className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          bg-black/60
          backdrop-blur-md
          p-6
          "

        >

          <motion.div

            initial={{
              opacity: 0,
              scale: .9,
              y: 40,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: .9,
              y: 40,
            }}

            transition={{
              duration: .35,
            }}

            onClick={(e) => e.stopPropagation()}

            className="
            relative
            w-full
            max-w-2xl
            rounded-3xl
            border
            border-white/10
            bg-white
            p-10
            shadow-2xl
            dark:bg-zinc-950
            "

          >

            {/* Close */}

            <button

              onClick={onClose}

              className="
              absolute
              right-6
              top-6
              rounded-full
              p-2
              transition
              hover:bg-gray-100
              dark:hover:bg-zinc-800
              "

            >

              <X size={22} />

            </button>

            <p className="font-semibold text-blue-600">
              SERVICE
            </p>

            <h2 className="mt-4 text-4xl font-black">
              {service.title}
            </h2>

            <p className="mt-6 text-gray-500">
              {service.description}
            </p>

            {/* Features */}

            <div className="mt-10">

              <h3 className="text-xl font-bold">
                What You'll Get
              </h3>

              <div className="mt-6 space-y-4">

                {service.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={20}
                      className="text-blue-600"
                    />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

            </div>

            {/* Projects */}

            <div className="mt-12">

              <h3 className="text-xl font-bold">
                Related Projects
              </h3>

              <div className="mt-6 space-y-3">

                {service.projects.map((project) => (

                  <div

                    key={project}

                    className="
                    rounded-xl
                    border
                    p-4
                    transition
                    hover:border-blue-500
                    "

                  >

                    {project}

                  </div>

                ))}

              </div>

            </div>

            <button

              onClick={() => {
                onClose();

                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}

              className="
              mt-10
              rounded-xl
              bg-blue-600
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-blue-700
              "

            >

              Let's Build Yours

            </button>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}