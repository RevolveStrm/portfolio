"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-semibold mb-4 text-black">
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                I'm a passionate full stack developer with a keen eye for design
                and a love for creating efficient, scalable applications. With
                expertise in modern web technologies, I bring ideas to life
                through clean, maintainable code.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    Experience
                  </h3>
                  <p className="text-gray-600">5+ years in web development</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    Education
                  </h3>
                  <p className="text-gray-600">B.S. in Computer Science</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
