import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <div className="fixed top-0 w-screen h-14 backdrop-blur-sm bg-slate-800 bg-opacity-10 z-50 flex items-center justify-center">
        <ul className="flex space-x-10 text-xl font-medium text-white">
            <li className="scale-110"> HJEM </li>
            <li className="scale-90"> OM OSS </li>
            <li className="scale-90"> GALLERI </li>
        </ul>
    </div>
  );
}

export default Navbar;