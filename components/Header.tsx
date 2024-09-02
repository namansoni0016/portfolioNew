'use client'

import Link from "next/link";
import DarKModeToggle from "./DarkModeToggle";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className="bg-white dark:bg-gray-800 p-4 shadow-md">
            <nav className="hidden container mx-auto md:flex justify-between items-center px-4 space-x-6">
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
            {/* Mobile menu button */}
            <div className="md:hidden container mx-auto flex items-center justify-between">
                <div>
                    <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">NS</Link>
                </div>
                <button onClick={toggleMenu} className="text-gray-800 dark:text-white focus:outline-none" aria-label="Toggle Menu">
                    {/* Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <DarKModeToggle/>
            </div>
            {isOpen && (
                <nav className="md:hidden mt-4">
                    <ul className="flex flex-col space-y-4">
                        <li><Link href="/about" onClick={toggleMenu} className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">About</Link></li>
                        <li><Link href="/experience" onClick={toggleMenu} className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Experience</Link></li>
                        <li><Link href="/projects" onClick={toggleMenu} className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Projects</Link></li>
                        <li><Link href="/contact" onClick={toggleMenu} className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Contact Me</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    )
}