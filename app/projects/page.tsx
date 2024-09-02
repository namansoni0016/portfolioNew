export default function Projects() {
    return (
        <div className="mt-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">Projects</h1>
            <ul className="space-y-4">
                <li>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Money Mate</h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">An expense tracker built using MERN stack.</p>
                </li>
                <li>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Estate Edge</h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">A real-estate listing web app built using MERN stack.</p>
                </li>
            </ul>
        </div>
    )
}