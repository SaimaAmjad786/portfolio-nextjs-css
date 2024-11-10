
"use client";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <h1 className="text-white hover:text-red-500 text-xl font-bold ">
          Saima Portfolio
        </h1>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="text-lg text-red-500 hover:text-white font-bold">
            Home
          </Link>
          <Link href="#about" className="text-lg text-red-500 hover:text-white font-bold">
            About
          </Link>
          <Link href="#skills" className="text-lg text-red-500 hover:text-white font-bold">
            Skills
          </Link>
          <Link href="#service" className="text-lg text-red-500 hover:text-white font-bold">
            Service
          </Link>
          <Link href="#project" className="text-lg text-red-500 hover:text-white font-bold">
            Projects
          </Link>
          <Link href="#contact-us" className="text-lg text-red-500 hover:text-white font-bold">
            Contact
          </Link>
        </div>

        {/* Hamburger Icon (Mobile Menu) */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden flex items-center"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden  space-x-2 p-4 space-y-4 transition-all duration-300 ease-in-out`}
      >
        <Link href="#home" className="text-lg text-red-500  hover:text-white font-bold">
          Home
        </Link>
        <Link href="#about" className="text-lg text-red-500  hover:text-white font-bold">
          About
        </Link>
        <Link href="#skills" className="text-lg text-red-500  hover:text-white font-bold">
          Skills
        </Link>
        <Link href="#service" className="text-lg text-red-500  hover:text-white font-bold">
          Service
        </Link>
        <Link href="#project" className="text-lg text-red-500  hover:text-white font-bold">
          Projects
        </Link>
        <Link href="#contact-us" className="text-lg text-red-500  hover:text-white font-bold">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
