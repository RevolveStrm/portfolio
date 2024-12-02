"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const technologies = [
  { name: "React" },
  { name: "Node.js" },
  { name: "TypeScript" },
  { name: "Python" },
  { name: "Docker" },
  { name: "AWS" },
];

export default function TechStack() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-azure-web">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-8 text-center text-viridian"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-mint-cream hover:shadow-lg transition-shadow duration-300 border-cambridge-blue">
                <CardContent className="flex items-center justify-center h-24">
                  <span className="text-lg font-medium text-viridian">
                    {tech.name}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
