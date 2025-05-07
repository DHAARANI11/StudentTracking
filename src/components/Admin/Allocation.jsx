import React, { useState } from 'react';
import "../../styles/admin.css";

function Allocation() {
  const [allocations, setAllocations] = useState([]);
  const [newAllocation, setNewAllocation] = useState({
    staff: '',
    class: '',
    subject: ''
  });

  const staffMembers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Robert Johnson' }
  ];

  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];
  const subjects = ['Math', 'Science', 'English', 'History', 'Geography'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAllocation({ ...newAllocation, [name]: value });
  };

  const handleAllocate = () => {
    if (newAllocation.staff && newAllocation.class && newAllocation.subject) {
      setAllocations([...allocations, { ...newAllocation, id: Date.now() }]);
      setNewAllocation({
        staff: '',
        class: '',
        subject: ''
      });
    }
  };

  return (
    <div className="allocation-container">
      <h2>Staff Allocation</h2>
      
      <div className="allocation-form">
        <select name="staff" value={newAllocation.staff} onChange={handleInputChange}>
          <option value="">Select Staff</option>
          {staffMembers.map(staff => (
            <option key={staff.id} value={staff.name}>{staff.name}</option>
          ))}
        </select>
        
        <select name="class" value={newAllocation.class} onChange={handleInputChange}>
          <option value="">Select Class</option>
          {classes.map(cls => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
        
        <select name="subject" value={newAllocation.subject} onChange={handleInputChange}>
          <option value="">Select Subject</option>
          {subjects.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
        
        <button onClick={handleAllocate}>Allocate</button>
      </div>

      <div className="allocations-list">
        <h3>Current Allocations</h3>
        <table>
          <thead>
            <tr>
              <th>Staff</th>
              <th>Class</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {allocations.map((alloc, index) => (
              <tr key={index}>
                <td>{alloc.staff}</td>
                <td>{alloc.class}</td>
                <td>{alloc.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Allocation;