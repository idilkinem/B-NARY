import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NewsNavbar from "../components/NewsNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Güncel Sağlık Haberleri - KanAnaliz",
  description: "En güncel sağlık haberleri ve gelişmeleri.",
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NewsNavbar />
      {children}
    </div>
  );
} 