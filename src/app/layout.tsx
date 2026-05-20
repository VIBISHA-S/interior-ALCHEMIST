import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Interior Alchemist | Architecture & Design",
  description: "Crafting spaces that match your style and needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans dark", outfit.variable)}>
      <body className="antialiased bg-[#0a0a0a] text-white selection:bg-white/20">
        {children}
      </body>
    </html>
  );
}
