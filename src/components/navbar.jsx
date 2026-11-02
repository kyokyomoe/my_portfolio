import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-blue-600 font-bold text-xl">
          <span className="bg-blue-50 p-2 rounded-lg">&lt;/&gt;</span>
          <span className="text-gray-900">Ma Kyo Kyo Moe</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <a
            href="#home"
            className="text-blue-600 hover:text-blue-600 transition"
          >
            Home
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#experience" className="hover:text-blue-600 transition">
            Experience
          </a>
          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>
          <a href="#certificates" className="hover:text-blue-600 transition">
            Certificates
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium flex items-center space-x-2 shadow-lg shadow-blue-600/20 transition"
          >
            <span>✉ Contact Me</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-blue-600 font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-600"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-600"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-600"
          >
            Skills
          </a>
          <a
            href="#certificates"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-600"
          >
            Certificates
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-600"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
