import React, { useState } from 'react';
import "../../styles/staff.css";


function Profile() {
  const [profile, setProfile] = useState({
    name: 'Jane Smith',
    email: 'jane.smith@school.com',
    phone: '9876543210',
    subjects: ['Science', 'Biology'],
    qualification: 'M.Sc in Biology',
    experience: '5 years'
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
    <div className="staff-profile">
      <h2>My Profile</h2>
      
      <div className="profile-info">
        {editMode ? (
          <>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={profile.name} onChange={handleInputChange} />
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
              <label>Qualification:</label>
              <input type="text" name="qualification" value={profile.qualification} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Experience:</label>
              <input type="text" name="experience" value={profile.experience} onChange={handleInputChange} />
            </div>
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <p><strong>Subjects:</strong> {profile.subjects.join(', ')}</p>
            <p><strong>Qualification:</strong> {profile.qualification}</p>
            <p><strong>Experience:</strong> {profile.experience}</p>
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;