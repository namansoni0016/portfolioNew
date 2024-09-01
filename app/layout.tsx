import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
      <body className="bg-gray-100">
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-700 text-white p-4 shadow-md">
            <nav className="container mx-auto flex justify-between">
              <div>
                <Link href="/" className="text-2xl font-bold">NS</Link>
              </div>
              <div className="flex space-x-4">
                <Link href="/about">About</Link>
                <Link href="/experience">Experience</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact Me</Link>
              </div>
            </nav>
          </header>
          <main className="flex-grow container mx-auto p-6 mt-6">
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-transparent hover:border-blue-300 transition duration-300">{children}</div>
          </main>
          <footer className="bg-blue-700 text-white p-4 text-center shadow-md mt-6">
            &copy; {new Date().getFullYear()} NS Portfolio
          </footer>
        </div>
      </body>
    </html>
  )
}
