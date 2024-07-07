import React, { Fragment } from 'react'

function Navbar() {
  return (
    <Fragment>
        <header className="flex justify-between items-center bg-white p-4 border-b border-gray-300">
        <div className="text-2xl font-bold text-orange-500">Gibbly</div>
        <nav className="flex items-center">
          <a href="#home" className="text-black no-underline px-3 py-2 mx-1">Home</a>
          <a href="#about" className="text-black no-underline px-3 py-2 mx-1">About</a>
          <div className="relative inline-block">
            <a href="#courses" className="text-black no-underline px-3 py-2 mx-1">Courses</a>
            <div className="absolute hidden bg-white shadow-md min-w-[160px] border border-gray-300">
              <a href="#course1" className="block px-4 py-2 text-black">Course 1</a>
              <a href="#course2" className="block px-4 py-2 text-black">Course 2</a>
            </div>
          </div>
          <div className="relative inline-block">
            <a href="#blog" className="text-black no-underline px-3 py-2 mx-1">Blog</a>
            <div className="absolute hidden bg-white shadow-md min-w-[160px] border border-gray-300">
              <a href="#blog1" className="block px-4 py-2 text-black">Blog Post 1</a>
              <a href="#blog2" className="block px-4 py-2 text-black">Blog Post 2</a>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md ml-4">Contact Us</button>
          <a href="dashboard.html" className="text-black no-underline px-3 py-2 mx-1">Go to Dashboard</a>
        </nav>
      </header>
    </Fragment>
  )
}

export default Navbar
