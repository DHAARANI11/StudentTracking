import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Common/LoginForm';
import '../styles/staff.css';

// Hardcoded staff credentials
const staffCredentials = [
  { username: 'john', password: 'john123', name: 'John Doe', subject: 'Math' },
  { username: 'jane', password: 'science123', name: 'Jane Smith', subject: 'Science' },
  { username: 'robert', password: 'english123', name: 'Robert Johnson', subject: 'English' }
];

function StaffLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = (credentials) => {
    const staff = staffCredentials.find(
      s => s.username === credentials.username && s.password === credentials.password
    );
    
    if (staff) {
      // Store staff data in localStorage for dashboard use
      localStorage.setItem('staffData', JSON.stringify(staff));
      navigate('/staff/dashboard');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="staff-auth-container">
      <h2>Staff Login</h2>
      {error && <p className="error">{error}</p>}
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default StaffLogin;