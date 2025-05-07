import React, { useState } from 'react';
import "../../styles/student.css";


function Profile() {
  const [profile, setProfile] = useState({
    name: 'Alice Johnson',
    studentId: 'STU2023001',
    class: 'Class 1',
    email: 'alice.johnson@school.com',
    phone: '9876543210',
    address: '123 Main St, Cityville'
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    setEditMode(false);
    // In a real app, you would save to the backend here
  };

  return (
    <div className="student-profile">
      <h2>My Profile</h2>
      
      <div className="profile-info">
        {editMode ? (
          <>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={profile.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Student ID:</label>
              <input type="text" name="studentId" value={profile.studentId} readOnly />
            </div>
            <div className="form-group">
              <label>Class:</label>
              <input type="text" name="class" value={profile.class} readOnly />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={profile.email} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input type="tel" name="phone" value={profile.phone} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea name="address" value={profile.address} onChange={handleInputChange} />
            </div>
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Student ID:</strong> {profile.studentId}</p>
            <p><strong>Class:</strong> {profile.class}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <p><strong>Address:</strong> {profile.address}</p>
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;