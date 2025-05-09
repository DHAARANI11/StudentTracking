import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
import StaffLogin from './pages/StaffLogin';
import StudentLogin from './pages/StudentLogin';
import AdminDashboard from './components/Admin/Dashboard';
import StaffDashboard from './components/Staff/Dashboard';
import StudentDashboard from './components/Student/Dashboard';
import LeaveRequests from './components/Staff/LeaveRequest';
import AttendanceStats from './components/Student/AttendanceStats';
import LeaveHistory from './components/Student/LeaveHistory';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/staff/login" element={<StaffLogin />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/staff/dashboard" element={<StaffDashboard />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/studentsubjects" element={<AttendanceStats />} />
          <Route path="/student/attendancestats" element={<AttendanceStats />} />
          <Route path="/student/leavehistory" element={<LeaveHistory />} />
          <Route path="/staff/leaverequest" element={<LeaveRequests />} />
          <Route path="/student/assessmentdetails" element={<AttendanceStats />} />
          <Route path="/student/homework" element={<AttendanceStats />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;