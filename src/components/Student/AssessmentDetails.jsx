import React from 'react';

function AssessmentDetails() {
  const assessments = [
    { subject: 'Math', title: 'Midterm', score: '45/50' },
    { subject: 'Science', title: 'Lab Test', score: '38/40' },
    { subject: 'English', title: 'Essay', score: '42/50' },
  ];

  return (
    <div className="assessment-details">
      <h2>Assessment Details</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Assessment</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td>{item.title}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssessmentDetails;
