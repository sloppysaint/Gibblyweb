import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="flex justify-between items-center py-3 px-5">
        <img src={Logo} alt="Gibbly Logo" className="h-16" />
        <nav className="flex items-center">
          <a
            href="#home"
            className="text-black no-underline py-2 px-4 mx-1 hover:bg-gray-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-black no-underline py-2 px-4 mx-1 hover:bg-gray-200"
          >
            About
          </a>
          <div className="relative group">
            <a
              href="#courses"
              className="text-black no-underline py-2 px-4 mx-1 hover:bg-gray-200"
            >
              Courses
            </a>
            <div className="absolute hidden group-hover:block bg-white border border-gray-300 min-w-[160px] shadow-lg z-10">
              <a
                href="#course1"
                className="block text-black py-3 px-4 no-underline hover:bg-gray-200"
              >
                Course 1
              </a>
              <a
                href="#course2"
                className="block text-black py-3 px-4 no-underline hover:bg-gray-200"
              >
                Course 2
              </a>
            </div>
          </div>
          <div className="relative group">
            <a
              href="#blog"
              className="text-black no-underline py-2 px-4 mx-1 hover:bg-gray-200"
            >
              Blog
            </a>
            <div className="absolute hidden group-hover:block bg-white border border-gray-300 min-w-[160px] shadow-lg z-10">
              <a
                href="#blog1"
                className="block text-black py-3 px-4 no-underline hover:bg-gray-200"
              >
                Blog Post 1
              </a>
              <a
                href="#blog2"
                className="block text-black py-3 px-4 no-underline hover:bg-gray-200"
              >
                Blog Post 2
              </a>
            </div>
          </div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded mx-2 hover:bg-orange-600">
            Contact Us
          </button>
          <a
            href="/home"
            className="text-black no-underline py-2 px-4 mx-1 hover:bg-gray-200"
          >
            Go to Dashboard
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
