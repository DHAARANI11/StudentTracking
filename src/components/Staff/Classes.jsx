import React from 'react';
import "../../styles/staff.css";


function Classes() {
  // Sample data - in a real app, this would come from an API
  const allocatedClasses = [
    { class: 'Class 1', subject: 'Math', time: '9:00 AM - 10:00 AM' },
    { class: 'Class 3', subject: 'Science', time: '11:00 AM - 12:00 PM' },
    { class: 'Class 5', subject: 'English', time: '2:00 PM - 3:00 PM' }
  ];

  return (
    <div className="staff-classes">
      <h2>My Allocated Classes</h2>
      <div className="classes-list">
        {allocatedClasses.map((cls, index) => (
          <div key={index} className="class-card">
            <h3>{cls.subject}</h3>
            <p>Class: {cls.class}</p>
            <p>Time: {cls.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;