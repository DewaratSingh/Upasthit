// components/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#3F51B5] z-40 transform 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 md:static md:translate-x-0 
          flex flex-col md:h-[calc(100vh-10rem)] md:w-[265px]  md:ml-8  rounded-xl p-4 gap-3`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-white block md:hidden mb-4 self-end"
        >
          ✕
        </button>

        <Link
          to="/teacher"
          className="bg-[#2C397f] w-[210] mt-6 font-medium hover:bg-[#192048] text-center rounded-lg text-white py-3 active:scale-95 duration-200"
        >
          Home
        </Link>
        <Link
          to="/teacher/attendance"
          className="bg-[#2C397f] w-[210] font-medium hover:bg-[#192048] text-center rounded-lg text-white py-3 active:scale-95 duration-200"
        >
          Attendance
        </Link>
        <Link
          to="/teacher/timetable"
          className="bg-[#2C397f] w-[210] font-medium hover:bg-[#192048] text-center rounded-lg text-white py-3 active:scale-95 duration-200"
        >
          Timetable
        </Link>
        <Link
          to="/teacher/announcement"
          className="bg-[#2C397f] w-[210]font-medium hover:bg-[#192048] text-center rounded-lg text-white py-3 active:scale-95 duration-200"
        >
          Announcement
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
