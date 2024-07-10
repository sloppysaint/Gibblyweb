// src/Components/Sidebar.js
import React from 'react';
import pencilImage from './pencil.png';
import discover from './images.png';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 z-40 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4 overflow-y-auto">
        <button className="text-black mb-4" onClick={toggleSidebar}>Close</button>
        <h1 className="text-2xl font-bold mb-6">Gibbly</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <button className="w-full text-left h-30">
                <div className="flex items-center">
                  <img className="p-2 object-contain h-8 flex flex-row" src={pencilImage} alt="A plus button"/>
                  <p className="ml-2">Create</p>
                </div>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left h-30">
                <div className="flex items-center">
                  <img className="p-2 object-contain h-8 flex flex-row" src={discover} alt="A plus button"/>
                  <p className="ml-2">Discover</p>
                </div>
              </button>
            </li>
            <li className="mb-4"><button className="w-full text-left">My Library</button></li>
            <li className="mb-4"><button className="w-full text-left">Classes</button></li>
            <li className="mb-4">
              <button className="w-full text-left">
                <Link to='/Pages/Settingcard'>Settings</Link>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left">
                <Link to='/Pages/Upgrade'>Upgrade</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
