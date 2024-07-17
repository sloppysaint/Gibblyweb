import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import ExploreIcon from '@mui/icons-material/Explore';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../assets/logo.png';

const Class = ()=> {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    
    <div className='grid grid-cols-10 gap-4'>
      <div className='col-span-1 md:hidden'>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-600 hover:text-gray-900">
           <MenuIcon fontSize="large" />
        </button>
      </div>
      <div className={`fixed inset-y-0 left-0 w-45 bg-white shadow-lg p-4 overflow-y-auto transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:w-40`}>
        <div className="flex justify-between items-center mb-4">
          <img src={Logo} alt="Gibbly Logo" className="h-16" />
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            <CloseIcon fontSize="large" />
          </button>
        </div>
        <nav>
        <ul>
            <li className="mb-4">
              <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
                <div onClick={()=>window.location.href="/create"}  className="flex flex-col items-center">
                  <CreateIcon />
                  <p className="text-orange-600 font-bold">Create</p>
                </div>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
                <div onClick={()=>window.location.href="/loader"} className="flex flex-col items-center">
                  <ExploreIcon />
                  <p className="text-orange-600">Discover</p>
                </div>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
                <div onClick={()=>window.location.href="/loader"} className="flex flex-col items-center">
                  <LibraryBooksIcon />
                  <p className="text-orange-600">My Library</p>
                </div>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
                <div onClick={()=>window.location.href="/pages/Class"} className="flex flex-col items-center">
                  <SchoolIcon />
                  <p className="text-orange-600">Classes</p>
                </div>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
                <div onClick={()=>window.location.href="/pages/Settingcard"}  className="flex flex-col items-center">
                  <SettingsIcon />
                  <p className="text-orange-600">Settings</p>
                </div>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
                <div onClick={()=>window.location.href="/pages/Upgrade"} className="flex flex-col items-center">
                  <UpgradeIcon />
                  <p className="text-yellow-600 font-bold">Upgrade</p>
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className='col-span-1'></div>
    
    <div className="bg-gray-50 min-h-screen p-8 col-span-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-2xl font-bold">My Classes</h1>
        <button className="flex items-center justify-center leading-none no-underline text-white text-[15px] font-bold rounded-[9px] w-[110px] h-[43px] border-b-[7px] border-[#356714] transition-all duration-200 shadow-md bg-[#428019] hover:border-b-[2px] hover:translate-y-[2px]">
          <span className="mr-2">+</span>Add Class
        </button>
      </div>
      <p className="text-purple-700">
        No classes yet. <span className="font-semibold">Add a class to get started!</span>
      </p>
    </div>
    </div>
  </div>
  );
}

export default Class;