"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "./ui/separator";

export default function Certificates() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" id="certificates">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-8 text-left space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificates
          <Separator className="bg-gray-400 mt-4" />
        </motion.h2>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-around">
          <Image
            src={"/assets/images/certificates/binary.jpg"}
            width={0}
            height={320}
            alt="Icon"
            style={{ height: "320px", width: "auto", objectFit: "contain" }}
            unoptimized={true}
          />
          <Image
            src={"/assets/images/certificates/genesis.png"}
            width={0}
            height={320}
            alt="Icon"
            style={{ height: "320px", width: "auto", objectFit: "contain" }}
            unoptimized={true}
          />
          <Image
            src={"/assets/images/certificates/google.png"}
            width={0}
            height={320}
            alt="Icon"
            style={{ height: "320px", width: "auto", objectFit: "contain" }}
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  );
}
