import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="flex justify-between items-center py-3 px-5">
        <img src={Logo} alt="Gibbly Logo" className="h-16" />
        <nav className="flex items-center">




          <button onClick={(e) => {
            window.location.href = "mailto:support@gibbly.app";
            e.preventDefault();
          }} className="bg-orange-500 text-white py-2 px-4 rounded mx-2 hover:bg-orange-600">

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