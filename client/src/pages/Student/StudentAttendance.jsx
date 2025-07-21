import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import StudentSidebar from '../../components/StudentSidebar';


function StudentAttendance() {
  const [activeBtn, setActiveBtn] = useState('Overall');
  
  const changecolor = (btn) => activeBtn === btn ? "border-2 border-black text-black bg-white" : "bg-white text-gray-600";
  
  return (
    <div className='h-screen flex flex-col'>
      <Navbar/>
      <div className='flex flex-1 bg-gray-100'>
        <StudentSidebar/>
        <div className='mx-5 mt-4 w-full bg-gray-100'>
          <h1 className='text-4xl font-bold text-black'>Attendance Analytics</h1>
          <p className='text-xl text-gray-600'>View your attendance in different formats</p>
          <div className='flex justify-between items-center mt-4 w-full bg-gray-200 p-4 rounded-2xl shadow-lg'>
            <button 
              onClick={() => {setActiveBtn("Overall")}}
              className={`flex justify-center items-center shadow-lg h-[40px] p-3 rounded-2xl text-lg w-[360px] cursor-pointer active:scale-95 duration-200 ${changecolor("Overall")}`}>
              Overall
            </button>
            <button 
              onClick={() => {setActiveBtn("Monthly")}}
              className={`flex justify-center items-center shadow-lg h-[40px] p-3 rounded-2xl text-lg w-[360px] cursor-pointer active:scale-95 duration-200 ${changecolor("Monthly")}`}>
              Monthly
            </button>
            <button 
              onClick={() => {setActiveBtn("Subject-wise")}}
              className={`flex justify-center items-center shadow-lg h-[40px] p-3 rounded-2xl text-lg w-[360px] cursor-pointer active:scale-95 duration-200 ${changecolor("Subject-wise")}`}>
              Subject-wise
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-5 shadow-lg mt-4">
            <div className='mb-5'>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-black">Overall Attendance</h2>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Total Classes</p>
                  <p className="text-xl font-semibold text-black">120</p>
                </div>
              </div>
              <p className='text-lg text-gray-600'>Your complete attendance summary</p>
            </div>

            <div className="mb-5 justify-between flex">
              <span className="text-3xl font-bold text-green-600">70.8%</span>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-green-600">
                <span className="text-sm font-bold text-white">Excellent</span>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{width: '70.8%'}}></div>
            </div>
            <p className='pt-4 text-gray-600 text-sm'>128 out of 150 classes attended</p>
          </div>

          <div className="bg-white rounded-lg p-5 border border-blue-500 mt-4">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Recent Activity</h2>
              <p className="text-sm text-gray-500">Latest attendance updates and notifications</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Attended Mathematics class</p>
                    <p className="text-xs text-gray-500">Today, 10:00 AM</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                  Present
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Late for Physics class</p>
                    <p className="text-xs text-gray-500">Yesterday, 2:00 PM</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                  Late
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Missed Chemistry class</p>
                    <p className="text-xs text-gray-500">2 days ago, 11:00 AM</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                  Absent
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentAttendance
