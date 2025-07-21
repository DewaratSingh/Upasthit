
import React from 'react'
import { Menu } from 'lucide-react'

function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="flex items-center justify-between px-4 py-4 md:px-8 bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="block md:hidden text-gray-700"
        >
          <Menu size={28} />
        </button>
        
        {/* Upasthit Logo */}
        <img src="/Upashit_logo.png" alt="Upasthit Logo" className="h-12 w-auto object-contain"/>
      </div>
      <div className="hidden md:flex flex-1 justify-center">
        <input
          type="text"
          placeholder="Enter clubs or resources..."
          className="w-full max-w-lg rounded-2xl px-4 py-2 border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition border border-transparent">
          <img
            src="/Profile.png"
            alt="profile"
            className="h-8 w-8 rounded-full text-3xl"
          />
          <p className="text-gray-700 font-medium hidden sm:block text-3xl">Profile</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
