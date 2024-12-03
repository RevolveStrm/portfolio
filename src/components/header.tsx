"use client";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 lg:py-6 px-4 sm:px-6 lg:px-8" id="header">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 justify-between">
        <div>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-black text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Stepan Vladyka
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mt-2 text-gray-600 text-center lg:text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack JS Developer
          </motion.p>
        </div>

        <motion.div
          className="flex space-x-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href={process.env.NEXT_PUBLIC_GITHUB_LINK as string}
            target="_blank"
          >
            <Github size={32} />
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_LINKEDIN_LINK as string}
            target="_blank"
          >
            <Linkedin size={32} />
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_FREELANCEHUNT_LINK as string}
            target="_blank"
          >
            <Image
              src="/assets/images/contacts/freelancehunt.png"
              alt="Freelancehunt"
              width={30}
              height={0}
              style={{ width: "30px", height: "auto" }}
            />
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
