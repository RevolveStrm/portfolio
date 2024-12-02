"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/constants/projects";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";

export default function Projects() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-8 text-left space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
          <Separator className="bg-gray-400 mt-4" />
        </motion.h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-azure-web hover:shadow-lg transition-shadow duration-300 border-cambridge-blue">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold mb-4 text-viridian">
                    {project.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>See the projects here, soon...</p>
                  {/* <div className="bg-mint-green rounded-lg p-4 text-center">
                    <p className="text-cambridge-blue">
                      [Your project slider or grid will go here]
                    </p>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
