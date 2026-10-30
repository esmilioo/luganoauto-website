import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Chrome } from "@/components/layout/Chrome";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "Lugano Auto — Performance & Heritage",
  description:
    "Usato selezionato, supercar e vetture di prestigio in Canton Ticino.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body className="bg-noir text-titanium font-sans antialiased">
        <Chrome>{children}</Chrome>
      </body>
    </html>
  );
}