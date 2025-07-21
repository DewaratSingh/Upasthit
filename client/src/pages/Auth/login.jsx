import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState('student');

  return (
    <div className="h-screen bg-gray-200 flex flex-col">
      <img src="Upashit_logo.png" alt="Profile" className="absolute top-4 left-6 h-12 w-auto object-contain"/>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-[6px_6px_20px_rgba(0,0,0,0.55)] p-8">
          {/* Welcome Text */}
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Welcome to Upasthit
          </h1>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveTab('teacher')}
              className={`px-8 py-3 rounded-full text-base font-medium transition-colors ${
                activeTab === 'teacher'
                  ? 'bg-blue-600 text-white'
                  : 'bg-green-300 text-white'
              }`}
            >
              Teacher
            </button>
            <button
              onClick={() => setActiveTab('student')}
              className={`px-8 py-3 rounded-full text-base font-medium transition-colors ${
                activeTab === 'student'
                  ? 'bg-blue-600 text-white'
                  : 'bg-green-300 text-white'
              }`}
            >
              Student
            </button>
          </div>

          {/* Login Heading */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-base font-bold text-gray-700 mb-2 ">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                required
              />
            </div>

            <div>
              <label className="block text-base font-bold text-gray-700 mb-2 ">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                required
              />
            </div>

            <div className="text-left">
              <button type="button" className="text-base text-gray-600 hover:text-gray-800">
                Forgot password?
              </button>
            </div>

            <div className="flex justify-center pt-3">
              <button
                type="submit"
                className="px-10 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-base font-medium"
              >
                Login
              </button>
            </div>

            <div className="text-center pt-3">
              <button type="button" className="text-base text-gray-600 hover:text-gray-800 underline">
                No account contact admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
