import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Announcements from '../../components/Announcements'

function TeacherAnnouncements() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const now = new Date();
  const date = now.getDate();
  const month = now.toLocaleString("default", { month: "long" });
  const day = now.toLocaleString("default", { weekday: "long" });
  const year = now.getFullYear();
  
  return (
    <div className="h-screen flex flex-col">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <div className='flex flex-1 bg-gray-100'>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <main className="flex-1 flex flex-col p-6">
                <section className="mb-6 ml-5">
                    <h1 className="text-2xl sm:text-2xl lg:text-5xl font-bold text-black mb-2">
                      Announcements
                    </h1>
                    <p className="text-black text-xl">
                      {day}, {month} {date}, {year}
                    </p>
                </section>
                
                {/* Announcement Input */}
                <section className="mx-5 mt-2">
                  
                    <div className="bg-white rounded-2xl p-4 shadow-[6px_6px_20px_rgba(0,0,0,0.55)] border border-gray-200 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-semibold">T</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Make an announcement to your class"
                          className="flex-1 px-4 py-3 border-none outline-none text-gray-700 placeholder-gray-500 text-base"
                        />
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-black">
                            <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
                          </svg>
                      </button>
                    </div>
                  </div>
                </section>
                
                {/* Announcements List */}
                <section className="flex-1 mt-4">
                    <Announcements />
                </section>
            </main>
        </div>
    </div>
  )
}

export default TeacherAnnouncements
