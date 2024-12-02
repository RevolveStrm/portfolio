"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          John Doe
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl mt-2 text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Developer
        </motion.p>
      </div>
    </header>
  );
}
