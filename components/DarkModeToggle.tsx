'use client';

import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function DarKModeToggle() {
    const [ theme, setTheme ] = useState<string>('light');
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefer-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    }, []);
    const toggleTheme = () => {
        if(theme === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };
    return (
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300" aria-label="Toggle Dark Mode">
            {theme === 'light' ? (
                <MoonIcon className="w-6 h-6 text-gray-800"/>
            ) : (
                <SunIcon className="w-6 h-6 text-yellow-500"/>
            )}
        </button>
    )
}