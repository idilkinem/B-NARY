import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kan Analizi - Analiz Sayfası",
  description: "Kan değerlerinizi analiz edin ve sağlığınız hakkında detaylı bilgi alın.",
};

export default function AnalysisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 