import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TLAY - Trust Layer for Machine Economy",
  description:
    "Lightweight machine wallet runtime BoAT gives every IoT device its own identity, attestation, and payment capabilities.",
  openGraph: {
    title: "TLAY - Trust Layer for Machine Economy",
    description:
      "Lightweight machine wallet runtime BoAT gives every IoT device its own identity, attestation, and payment capabilities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
