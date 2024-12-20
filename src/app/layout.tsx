import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import GTag from "@/components/g-tag";
import { Providers } from "@/components/providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 300 500 700 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 300 500 700 900",
});

export const metadata: Metadata = {
  title: "Stepan Vladyka",
  description: "Full-Stack JavaScript Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GTag />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
