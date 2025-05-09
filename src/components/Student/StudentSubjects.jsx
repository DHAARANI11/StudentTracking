import React from 'react';
import '../../styles/student.css'; // Make sure this file exists and is correctly linked

function StudentSubjects() {
  const subjects = [
    { name: 'Mathematics', assessment: 'Algebra Midterm', date: '2025-05-15' },
    { name: 'Science', assessment: 'Physics Lab Report', date: '2025-05-18' },
    { name: 'English', assessment: 'Essay Submission', date: '2025-05-20' },
    { name: 'History', assessment: 'World War II Presentation', date: '2025-05-22' },
    { name: 'Computer Science', assessment: 'Python Project', date: '2025-05-25' },
  ];

  return (
    <div className="student-subjects-table-container">
      <h2 className="subject-heading">My Subjects & Upcoming Assessments</h2>
      <table className="subject-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Assessment</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td>{subject.assessment}</td>
              <td>{subject.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentSubjects;
