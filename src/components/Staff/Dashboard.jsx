import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Classes from './Classes';
import Attendance from './Attendance';
import LeaveRequest from './LeaveRequest';
import Profile from './Profile';
import "../../styles/staff.css";


function StaffDashboard() {
  const [activeTab, setActiveTab] = useState('classes');

  return (
    <div className="staff-dashboard">
      <header className="staff-header">
        <h1>Staff Dashboard</h1>
        <nav>
          <button onClick={() => setActiveTab('classes')}>My Classes</button>
          <button onClick={() => setActiveTab('attendance')}>Attendance</button>
          <button onClick={() => setActiveTab('leave')}>Leave Requests</button>
          <button onClick={() => setActiveTab('profile')}>Profile</button>
          <Link to="/" className="logout-btn">Logout</Link>
        </nav>
      </header>

      <main>
        {activeTab === 'classes' && <Classes />}
        {activeTab === 'attendance' && <Attendance />}
        {activeTab === 'leave' && <LeaveRequest />}
        {activeTab === 'profile' && <Profile />}
      </main>
    </div>
  );
}

export default StaffDashboard;