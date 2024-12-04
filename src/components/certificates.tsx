"use client";
import { isSectionIntersecting } from "@/atoms/is-section-intersecting";
import { certificates } from "@/constants/certificates";
import { motion } from "framer-motion";
import { useSetAtom } from "jotai";
import React from "react";
import { useIntersectionObserver } from "usehooks-ts";
import CertificateCard from "./certificate-card";
import { Separator } from "./ui/separator";

export default function Certificates() {
  const setIntersecting = useSetAtom(isSectionIntersecting);
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.3,
  });

  React.useEffect(() => {
    setIntersecting(isIntersecting);
  }, [isIntersecting, setIntersecting]);

  return (
    <section
      className="py-4 lg:py-12 px-4 sm:px-6 lg:px-8"
      id="certificates"
      ref={ref}
    >
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

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 justify-around">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.title}
              title={certificate.title}
              description={certificate.description}
              src={certificate.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
