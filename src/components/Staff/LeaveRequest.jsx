import React, { useState } from 'react';
import "../../styles/staff.css";


function LeaveRequests() {
  // Sample leave requests
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, studentName: 'Alice Johnson', class: 'Class 1', subject: 'Math', date: '2023-05-10', reason: 'Family function', status: 'pending' },
    { id: 2, studentName: 'Bob Smith', class: 'Class 3', subject: 'Science', date: '2023-05-12', reason: 'Medical appointment', status: 'pending' }
  ]);

  const handleResponse = (id, response) => {
    setLeaveRequests(leaveRequests.map(request => 
      request.id === id ? { ...request, status: response } : request
    ));
  };

  return (
    <div className="leave-requests">
      <h2>Student Leave Requests</h2>
      
      <div className="requests-list">
        {leaveRequests.length === 0 ? (
          <p>No leave requests pending.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Date</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map(request => (
                <tr key={request.id}>
                  <td>{request.studentName}</td>
                  <td>{request.class}</td>
                  <td>{request.subject}</td>
                  <td>{request.date}</td>
                  <td>{request.reason}</td>
                  <td>{request.status}</td>
                  <td>
                    {request.status === 'pending' && (
                      <>
                        <button onClick={() => handleResponse(request.id, 'approved')}>Approve</button>
                        <button onClick={() => handleResponse(request.id, 'rejected')}>Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default LeaveRequests;