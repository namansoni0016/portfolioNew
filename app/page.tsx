import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <section className="flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-500"> Naman Soni</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            I'm a passionate <span className="font-medium">Full Stack Developer</span> currently focused on developing responsive web applications and working with modern technologies.
          </p>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-500 transition duration-300">Download Resume</Link>
        </div>
        {/* Image section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pl-16 mt-10  mb-10 md:mt-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image src="/profile.jpg" alt="Naman Soni" layout="fill" objectFit="cover" className="rounded-full shadow-xl"/>
          </div>
        </div>
      </section>
    </div>
  );
}
