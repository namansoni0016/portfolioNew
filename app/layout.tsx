import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import DarKModeToggle from "@/components/DarkModeToggle";

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
          {/* header */}
          <header className="bg-white dark:bg-gray-800 p-4 shadow-md">
            <nav className="container mx-auto flex items-center justify-between px-4">
              <div>
                <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">NS</Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">About</Link>
                <Link href="/experience" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Experience</Link>
                <Link href="/projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Projects</Link>
                <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Contact Me</Link>
                <DarKModeToggle/>
              </div>
            </nav>
          </header>
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
