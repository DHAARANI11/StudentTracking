import React from 'react';

function LeaveHistory() {
  // Sample data - in a real app, this would come from an API
  const leaveHistory = [
    { 
      id: 1, 
      subject: 'Math', 
      date: '2023-05-10', 
      reason: 'Family function', 
      status: 'approved',
      response: 'Request approved. Please collect notes from classmates.'
    },
    { 
      id: 2, 
      subject: 'Science', 
      date: '2023-05-12', 
      reason: 'Medical appointment', 
      status: 'approved',
      response: 'Approved. Bring medical certificate.'
    },
    { 
      id: 3, 
      subject: 'English', 
      date: '2023-05-15', 
      reason: 'Personal reasons', 
      status: 'rejected',
      response: 'Rejected. Class test scheduled.'
    },
    { 
      id: 4, 
      subject: 'History', 
      date: '2023-05-20', 
      reason: 'Family trip', 
      status: 'pending',
      response: ''
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'approved': return '#2ecc71';
      case 'rejected': return '#e74c3c';
      case 'pending': return '#f39c12';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="leave-history">
      <h2>My Leave History</h2>
      
      <div className="history-list">
        {leaveHistory.length === 0 ? (
          <p>No leave requests found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Date</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Response</th>
              </tr>
            </thead>
            <tbody>
              {leaveHistory.map(request => (
                <tr key={request.id}>
                  <td>{request.subject}</td>
                  <td>{request.date}</td>
                  <td>{request.reason}</td>
                  <td>
                    <span 
                      className="status-badge" 
                      style={{ backgroundColor: getStatusColor(request.status) }}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td>{request.response || 'No response yet'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default LeaveHistory;