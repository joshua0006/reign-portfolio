import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Cristel Reign Abesamis
            </span>
          </Link>
          <div className="hidden md:flex items-center  space-x-8">
            <a
              href="/#about"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-blue-100 hover:text-white"
              }`}
            >
              About
            </a>

            <a
              href="/#testimonials"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-blue-100 hover:text-white"
              }`}
            >
              Testimonials
            </a>
            <a
              href="/#projects"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-blue-100 hover:text-white"
              }`}
            >
              Projects
            </a>
            <a
              href="/#contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
