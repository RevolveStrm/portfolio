"use client";
import { Card, CardContent } from "@/components/ui/card";
import { technologies } from "@/constants/technologies";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { Separator } from "./ui/separator";

export default function TechStack() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-8 text-left space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
          <Separator className="bg-gray-400 mt-4" />
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-5 lg:space-y-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-lg font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
          <InfiniteMovingCards
            items={technologies}
            direction="right"
            speed="slow"
          />
        </motion.div>
      </div>
    </section>
  );
}
