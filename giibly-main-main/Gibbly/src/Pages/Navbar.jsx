import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white border-b border-gray-300">
      <div className="flex justify-between items-center py-3 px-5">
        <img src={Logo} alt="Gibbly Logo" className="h-16" />
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <nav className={`flex-col lg:flex-row lg:flex ${isOpen ? 'flex' : 'hidden'} lg:items-center w-full lg:w-auto`}>
          <button
            onClick={(e) => {
              window.location.href = "mailto:support@gibbly.app";
              e.preventDefault();
            }}
            className="bg-orange-500 text-white py-2 px-4 rounded mx-2 my-2 lg:my-0 hover:bg-orange-600"
          >
            Contact Us
          </button>
          <Link
            to="/home"
            className="text-black no-underline py-2 px-4 mx-1 my-2 lg:my-0 hover:bg-gray-200"
          >
            Go to Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
