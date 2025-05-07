import React from 'react';
import "../../styles/student.css";

function AttendanceStats() {
  // Sample attendance data
  const attendanceData = [
    { subject: 'Mathematics', present: 45, absent: 5, late: 2 },
    { subject: 'Science', present: 48, absent: 2, late: 0 },
    { subject: 'English', present: 40, absent: 10, late: 2 },
    { subject: 'History', present: 50, absent: 0, late: 0 },
    { subject: 'Computer Science', present: 42, absent: 8, late: 1 }
  ];

  // Calculate statistics
  const totalClasses = attendanceData.reduce((sum, sub) => sum + sub.present + sub.absent + sub.late, 0);
  const presentClasses = attendanceData.reduce((sum, sub) => sum + sub.present, 0);
  const overallPercentage = Math.round((presentClasses / totalClasses) * 100);
  const totalLeaves = attendanceData.reduce((sum, sub) => sum + sub.absent, 0);

  // Attendance rating
  const getRating = (percentage) => {
    if (percentage >= 85) return 'Excellent';
    if (percentage >= 75) return 'Good';
    if (percentage >= 65) return 'Fair';
    return 'Poor';
  };

  return (
    <div className="attendance-container">
      <header className="attendance-header">
        <h2>Attendance Overview</h2>
      </header>

      <div className="summary-cards">
        {/* Overall Attendance Card */}
        <div className="stat-card">
          <div className="card-header">
            <h3>Overall Attendance</h3>
            <span className={`rating-badge ${overallPercentage >= 75 ? 'good' : 'poor'}`}>
              {getRating(overallPercentage)}
            </span>
          </div>
          <div className="card-content">
            <div className="circular-progress" style={{
              background: `conic-gradient(
                ${overallPercentage >= 75 ? '#4CAF50' : '#F44336'} ${overallPercentage}%, 
                #E0E0E0 ${overallPercentage}%)`
            }}>
              <span>{overallPercentage}%</span>
            </div>
            <div className="stat-details">
              <p><span className="stat-number">{presentClasses}</span> Present</p>
              <p><span className="stat-number">{totalClasses - presentClasses}</span> Absent</p>
              <p><span className="stat-number">{totalClasses}</span> Total Classes</p>
            </div>
          </div>
        </div>

        {/* Leaves Summary Card */}
        <div className="stat-card">
          <div className="card-header">
            <h3>Leaves Taken</h3>
          </div>
          <div className="card-content">
            <div className="leave-count">
              <span className="stat-number">{totalLeaves}</span>
              <p>Total Days</p>
            </div>
            <div className="leave-details">
              <p><span className="stat-number">{Math.round((totalLeaves / totalClasses) * 100)}%</span> of classes</p>
              <p>Most in: <span className="stat-number">
                {attendanceData.reduce((a, b) => a.absent > b.absent ? a : b).subject}
              </span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject-wise Table */}
      <div className="subject-table">
        <h3>Subject-wise Attendance</h3>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Late</th>
              <th>Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((subject, index) => {
              const total = subject.present + subject.absent + subject.late;
              const percentage = Math.round((subject.present / total) * 100);
              
              return (
                <tr key={index}>
                  <td>{subject.subject}</td>
                  <td>{subject.present}</td>
                  <td>{subject.absent}</td>
                  <td>{subject.late}</td>
                  <td>
                    <div className="attendance-bar">
                      <div 
                        className={`bar-fill ${percentage >= 75 ? 'good' : 'poor'}`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                      <span className="percentage-label">
                        {percentage}% ({getRating(percentage)})
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendanceStats;