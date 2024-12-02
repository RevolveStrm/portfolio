"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const projectCategories = [
  "Web Applications",
  "Mobile Apps",
  "Data Science Projects",
  "Open Source Contributions",
];

export default function Projects() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-mint-cream">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-8 text-center text-viridian"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="space-y-12">
          {projectCategories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-azure-web hover:shadow-lg transition-shadow duration-300 border-cambridge-blue">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold mb-4 text-viridian">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-mint-green rounded-lg p-4 text-center">
                    <p className="text-cambridge-blue">
                      [Your project slider or grid will go here]
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
