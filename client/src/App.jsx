import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Auth/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TeacherAttendance from './pages/Teacher/TeacherAttendance'
import TeacherHome from './pages/Teacher/TeacherHome'
import TeacherAnnouncements from './pages/Teacher/TeacherAnnouncements'
import StudentHome from './pages/Student/StudentHome'
import StudentAttendance from './pages/Student/StudentAttendance'
import StudentAnnouncement from './pages/Student/StudentAnnouncement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/teacher/attendance" element={<TeacherAttendance />} />
        <Route path="/teacher" element={<TeacherHome />} />
        <Route path="/teacher/announcement" element={<TeacherAnnouncements />} />
        <Route path="/student" element={<StudentHome />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/student/announcement" element={<StudentAnnouncement />} />
      </Routes>
    </Router>
  )
}

export default App
