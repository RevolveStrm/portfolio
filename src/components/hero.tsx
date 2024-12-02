"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";

export default function Hero() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-8 text-left space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About me
          <Separator className="bg-gray-400 mt-4" />
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            I am a developer with a passion for creating intuitive and efficient
            digital solutions. I value clean code, collaboration, and continuous
            growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Experience
              </h3>
              <p className="text-gray-600">5+ years in web development</p>
              <p className="text-gray-600">
                Delivered scalable, user-friendly applications for startups and
                enterprises across industries such as e-commerce, SaaS, and
                fintech.
              </p>
              <p className="text-gray-600">
                Specialized in full-stack development with modern JavaScript
                technologies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Education
              </h3>
              <p className="text-gray-600">
                Master's Degree in Computer Science
              </p>
              <p className="text-gray-600">
                Gained in-depth expertise in software engineering, algorithms,
                and system design.
              </p>
              <p className="text-gray-600">
                Engaged in academic and personal projects that honed my
                problem-solving and analytical skills.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Philosophy
              </h3>
              <p className="text-gray-600">
                I believe in creating intuitive solutions that simplify complex
                problems, combining technical excellence with an unwavering
                focus on user experience.
              </p>
              <p className="text-gray-600">
                Strive for maintainable, clean code that empowers teams to build
                for the future.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Languages
              </h3>
              <p className="text-gray-600">
                Fluent in Ukrainian and proficient in English, with strong
                communication skills in technical and collaborative
                environments.
              </p>
              <p className="text-gray-600">
                Open to working in multilingual teams and adapting to diverse
                cultures.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
