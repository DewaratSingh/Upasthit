// pages/Attendance.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function Attendance() {
  const now = new Date();
  const date = now.getDate();
  const month = now.toLocaleString("default", { month: "long" });
  const day = now.toLocaleString("default", { weekday: "long" });
  const year = now.getFullYear();

  const [status, setStatus] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const click = (e) => {
    setStatus(e.target.innerText);
  };

  const getStatusStyle = () => {
    switch (status) {
      case "Present":
        return "bg-green-500 border-green-600 text-white font-semibold";
      case "Late":
        return "bg-yellow-500 border-yellow-600 text-white font-semibold";
      case "Absent":
        return "bg-red-500 border-red-600 text-white font-semibold";
      default:
        return "bg-white border-gray-300 text-black";
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-col md:flex-row">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 mt-8 px-4 md:ml-8 md:mr-8 space-y-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-black">
                  Daily Attendance
                </h1>
                <p className="text-gray-600 text-base sm:text-lg">
                  {day}, {month} {date}, {year}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <p className="text-gray-700 font-medium text-base sm:text-lg">
                  64 Total Students
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 lg:gap-3 w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Search by name or roll number..."
                    className="px-3 sm:px-4 py-2 border border-gray-300 w-full sm:w-[300px] lg:w-[350px] lg:h-[40px] rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg lg:border-2 lg:border-blue-300"
                  />
                  <button className="bg-blue-600 flex items-center justify-center text-white px-4 sm:px-6 lg:px-8 py-2 lg:py-2.5 rounded-lg lg:rounded-xl hover:bg-blue-700 transition-colors active:scale-95 duration-200 cursor-pointer text-base sm:text-lg w-full sm:w-auto lg:h-[40px] lg:font-medium">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <div className="overflow-x-auto lg:overflow-y-auto lg:max-h-96">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-base sm:text-lg">
                      Roll No.
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-base sm:text-lg">
                      Student Name
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-base sm:text-lg">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-base sm:text-lg">
                      Actions
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-base sm:text-lg hidden lg:table-cell">
                      Remark
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-base sm:text-lg">SEA101</td>
                    <td className="py-3 px-4 text-base sm:text-lg">First Last Name</td>
                    <td className="py-3 px-4">
                      <div
                        className={`w-16 sm:w-20 h-6 sm:h-8 text-sm sm:text-lg rounded border flex items-center justify-center ${getStatusStyle()}`}
                      >
                        {status}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                        {["Present", "Late", "Absent"].map((type) => (
                          <button
                            key={type}
                            onClick={click}
                            className={`px-2 sm:px-3 py-1 text-white text-xs sm:text-base lg:text-lg rounded active:scale-95 duration-70 cursor-pointer  ${
                              type === "Present" ? "bg-green-300 hover:bg-green-700" : type === "Late" ? "bg-yellow-300 hover:bg-yellow-700" : "bg-red-300 hover:bg-red-700"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden lg:table-cell">
                      <input
                        type="text"
                        placeholder="Add remark..."
                        className="px-2 py-1 border border-gray-300 rounded text-sm sm:text-base lg:text-lg w-full"
                      />
                    </td>
                  </tr>

                  {/* Mobile Remark */}
                  <tr className="lg:hidden border-b border-gray-100">
                    <td colSpan="4" className="py-3 px-4">
                      <input
                        type="text"
                        placeholder="Add remark..."
                        className="px-2 py-1 border border-gray-300 rounded text-sm w-full"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
