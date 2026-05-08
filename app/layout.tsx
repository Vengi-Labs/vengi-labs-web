import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Bricolage_Grotesque, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vengi Labs — Telugu AI Research",
  description:
    "We build small, open-source language models for Telugu — designed to run offline, on low-cost devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${bricolage.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-full bg-[#fcf5ef]">{children}</body>
    </html>
  );
}
