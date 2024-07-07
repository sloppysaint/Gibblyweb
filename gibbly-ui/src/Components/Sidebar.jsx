import React from 'react';
import pencilImage from './pencil.png';
import discover from './images.png';
import {Link} from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="bg-white h-full p-4 shadow-md">
      <h1 className="text-2xl font-bold mb-6">Gibbly</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <button className="w-full text-justified h-30"  >
              <div className="flex items-center">
                <img className="p-2 object-contain h-8 flex flex-row" src={pencilImage} alt="A plus button"/>
                <p className="ml-2">Create</p>
              </div>  
            </button>
          </li>
          <li className="mb-4"> <button className="w-full text-justified h-30"  >
              <div className="flex items-center">
                <img className="p-2 object-contain h-8 flex flex-row" src={discover} alt="A plus button"/>
                <p className="ml-2">Discover</p>
              </div>  
            </button></li>
          <li className="mb-4"><button className="w-full text-justified">My Library</button></li>
          <li className="mb-4"><button className="w-full text-justified">Classes</button></li>
          <li className="mb-4"><button className="w-full text-justified" >
            <Link to = './Pages/Settingcard'>Settings</Link></button></li>

          <li className="mb-4"><button className="w-full text-justified">
          <Link to = './Pages/Upgrade'>
            Upgrade 
            </Link></button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
