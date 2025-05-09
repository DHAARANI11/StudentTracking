import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeaveRequest from './LeaveRequest';
import Profile from './Profile';
import Settings from './Settings';
import StudentSubjects from './StudentSubjects';
import AssessmentDetails from './AssessmentDetails';
import HomeworkUpload from './HomeworkUpload';
import AttendanceStats from './AttendanceStats';
import LeaveHistory from './LeaveHistory';
import Footer from '../Common/Footer';

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('stats');

  return (
    <div className="student-dashboard">
      <header className="student-header">
        <h1>Student Dashboard</h1>
        <nav>
          
          <button onClick={() => setActiveTab('subjects')}>Subjects</button>
          <button onClick={() => setActiveTab('assessments')}>Assessments</button>
          <button onClick={() => setActiveTab('homework')}>Homework</button>
          <button onClick={() => setActiveTab('stats')}>My Stats</button>
          <button onClick={() => setActiveTab('leave')}>Request Leave</button>
          <button onClick={() => setActiveTab('history')}>Leave History</button>
          <button onClick={() => setActiveTab('profile')}>Profile</button>
          <button onClick={() => setActiveTab('settings')}>Settings</button>
          <Link to="/" className="logout-btn">Logout</Link>
        </nav>

      </header>

      <main>
        
        {activeTab === 'subjects' && <StudentSubjects />}
        {activeTab === 'assessments' && <AssessmentDetails />}
        {activeTab === 'homework' && <HomeworkUpload />}
        {activeTab === 'stats' && <AttendanceStats />}
        {activeTab === 'leave' && <LeaveRequest />}
        {activeTab === 'history' && <LeaveHistory />}
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'settings' && <Settings />}
      </main>
      <Footer/>
    </div>
  );
}

export default StudentDashboard;