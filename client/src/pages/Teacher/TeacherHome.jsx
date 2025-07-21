
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { BarChart3, Users } from 'lucide-react';
import About from "../../components/About";
import Announcements from "../../components/Announcements";

function TeacherHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const now = new Date();
  const date = now.getDate();
  const month = now.toLocaleString("default", { month: "long" });
  const day = now.toLocaleString("default", { weekday: "long" });
  const year = now.getFullYear();
  
  
  return (
    <div className="h-screen flex flex-col">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className='flex flex-1 bg-gray-100'>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className="flex-1 flex flex-col p-6 w-full">  
                {/* Welcome Section */}
                <section className="mb-6 mx-5">
                    <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
                      Welcome, Teacher Name!
                    </h1>
                    <p className="text-gray-600 text-2xl">
                      Your college journey made easier
                    </p>
                </section>
                
                {/* Action Cards */}
                <section className="flex mx-5 gap-6 mb-6">
                    <Link to="/teacher/attendance" className="flex items-center gap-4 h-[140px] w-[450px] rounded-2xl bg-white p-4 shadow-[6px_6px_20px_rgba(0,0,0,0.55)] hover:shadow-xl transition-shadow">
                        <BarChart3 size={28} className="text-blue-600" />
                        <div>
                            <span className="text-2xl text-gray-800 font-semibold block">Mark Attendance</span>
                            <span className="text-gray-600 text-lg">{date} {month} {year}</span>
                        </div>
                    </Link>
                    <Link to="/teacher/attendance" className="flex items-center gap-4 h-[140px] w-[450px] rounded-2xl bg-white p-4 shadow-[6px_6px_20px_rgba(0,0,0,0.55)] hover:shadow-xl transition-shadow">
                        <Users size={28} className="text-blue-600" />
                        <div>
                            <span className="text-2xl text-gray-800 font-semibold block">Explore Branch</span>
                            <span className="text-gray-600 text-lg">64 students SE A Comp</span>
                        </div>
                    </Link>
                </section>
                
                {/* Announcements */}
                 <h2 className="text-3xl font-bold text-black mx-6 mt-3 mb-6">Announcements</h2>
                <Announcements />                
            </main>
        </div>
        <About/>
    </div>
  )
}

export default TeacherHome

          
