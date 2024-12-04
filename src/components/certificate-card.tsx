import Image from "next/image";
import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Props {
  title: string;
  src: string;
  description?: string;
}

export default function CertificateCard({ title, description, src }: Props) {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <CardTitle className="font-bold">{title}</CardTitle>
        <CardDescription className="font-normal text-gray-500">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={src}
          width={0}
          height={300}
          alt="Icon"
          style={{
            height: "300px",
            width: "auto",
            objectFit: "contain",
            objectPosition: "top",
          }}
          unoptimized={true}
        />
      </CardContent>
    </Card>
  );
}
