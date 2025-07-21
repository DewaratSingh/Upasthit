
import React from 'react'

function About() {
  return (
    <div className="w-full mt-auto">
      {/* Footer */}
      <div className="bg-gray-300 px-10 py-4 w-full">
        <div className="flex justify-between items-center">
          <div className="flex gap-8">
            <span className="text-gray-800 cursor-pointer hover:text-gray-600">About us</span>
            <span className="text-gray-800 cursor-pointer hover:text-gray-600">Contact</span>
            <span className="text-gray-800 cursor-pointer hover:text-gray-600">Privacy Policy</span>
          </div>
          <div>
            <span className="text-gray-800">@ 2025 Upasthit</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
