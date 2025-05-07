import React, { useState } from 'react';
import "../../styles/staff.css";


function Attendance() {
  const [selectedClass, setSelectedClass] = useState('');
  const [attendance, setAttendance] = useState({});

  // Sample data
  const classes = ['Class 1', 'Class 3', 'Class 5'];
  const students = {
    'Class 1': [
      { id: 101, name: 'Alice Johnson' },
      { id: 102, name: 'Bob Smith' },
      { id: 103, name: 'Charlie Brown' }
    ],
    'Class 3': [
      { id: 201, name: 'David Wilson' },
      { id: 202, name: 'Eva Green' }
    ],
    'Class 5': [
      { id: 301, name: 'Frank Miller' },
      { id: 302, name: 'Grace Lee' },
      { id: 303, name: 'Henry Ford' }
    ]
  };

  const handleClassChange = (e) => {
    const cls = e.target.value;
    setSelectedClass(cls);
    // Initialize attendance for selected class
    if (cls && !attendance[cls]) {
      const initialAttendance = {};
      students[cls].forEach(student => {
        initialAttendance[student.id] = 'present';
      });
      setAttendance({ ...attendance, [cls]: initialAttendance });
    }
  };

  const handleAttendanceChange = (studentId, status) => {
    setAttendance({
      ...attendance,
      [selectedClass]: {
        ...attendance[selectedClass],
        [studentId]: status
      }
    });
  };

  const handleSubmit = () => {
    alert(`Attendance for ${selectedClass} submitted successfully!`);
    console.log(attendance[selectedClass]);
  };

  return (
    <div className="attendance-container">
      <h2>Mark Attendance</h2>
      
      <div className="class-selector">
        <label>Select Class:</label>
        <select value={selectedClass} onChange={handleClassChange}>
          <option value="">-- Select Class --</option>
          {classes.map(cls => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
      </div>

      {selectedClass && (
        <div className="attendance-sheet">
          <h3>{selectedClass} - Attendance</h3>
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {students[selectedClass].map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <select
                      value={attendance[selectedClass]?.[student.id] || 'present'}
                      onChange={(e) => handleAttendanceChange(student.id, e.target.value)}
                    >
                      <option value="present">Present</option>
                      <option value="absent">Absent</option>
                      <option value="late">Late</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleSubmit}>Submit Attendance</button>
        </div>
      )}
    </div>
  );
}

export default Attendance;