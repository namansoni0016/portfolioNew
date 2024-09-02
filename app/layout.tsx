import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import DarKModeToggle from "@/components/DarkModeToggle";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio built with Next.js and Tailwind css",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-custom-gray dark:bg-gray-900 transition-colors duration-300">
        <div className="flex flex-col min-h-screen">
          <Header/>
          <main className="flex-grow container mx-auto px-4">
            {children}
          </main>
          <footer className="bg-white dark:bg-gray-800 py-6 mt-10">
            <div className="container mx-auto text-center text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} NS Portfolio</div>
          </footer>
        </div>
      </body>
    </html>
  )
}
