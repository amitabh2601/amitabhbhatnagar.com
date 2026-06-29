import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amitabh Bhatnagar — SDE III · AI Systems · Expedia Group",
  description:
    "Amitabh Bhatnagar is a Software Development Engineer with 8 years of experience building AI-powered systems, autonomous agentic pipelines, and cloud-native services.",
  openGraph: {
    title: "Amitabh Bhatnagar — SDE III · AI Systems",
    description:
      "8 years shipping AI pipelines, mobile SDKs, and cloud-native systems across 16 brands and 25+ regions.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col font-mono">{children}</body>
    </html>
  );
}
