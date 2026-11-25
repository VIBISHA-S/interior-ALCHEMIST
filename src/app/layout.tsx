import type { Metadata } from "next";
import { Instrument_Serif, Bebas_Neue, Roboto_Mono, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Preloader from "@/components/Preloader";

const serif = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-serif" });
const condensed = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-condensed" });
const mono = Roboto_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mono" });
const sans = Libre_Franklin({ weight: ["300", "400", "500", "700", "800"], subsets: ["latin"], variable: "--font-sans" });

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
    <html lang="en" className={cn(serif.variable, condensed.variable, mono.variable, sans.variable)}>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
