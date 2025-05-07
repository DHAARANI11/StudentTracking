import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Common/LoginForm';
import '../styles/student.css';

// Hardcoded student credentials
const studentCredentials = [
  { username: 'alice', password: 'alice123', name: 'Alice Johnson', class: 'Class 1' },
  { username: 'bob', password: 'bob123', name: 'Bob Smith', class: 'Class 3' },
  { username: 'charlie', password: 'charlie123', name: 'Charlie Brown', class: 'Class 5' }
];

function StudentLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = (credentials) => {
    const student = studentCredentials.find(
      s => s.username === credentials.username && s.password === credentials.password
    );
    
    if (student) {
      // Store student data in localStorage for dashboard use
      localStorage.setItem('studentData', JSON.stringify(student));
      navigate('/student/dashboard');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="student-auth-container">
      <h2>Student Login</h2>
      {error && <p className="error">{error}</p>}
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default StudentLogin;