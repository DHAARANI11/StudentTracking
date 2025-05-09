import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/Common/SignupForm';
import '../styles/admin.css';

function AdminSignup() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSignup = (data) => {
    // Simulate signup - in a real app, this would be an API call
    if (data.password === data.confirmPassword) {
      navigate('/admin/login');
    } else {
      setError('Passwords do not match');
    }
  };

  return (
    <div className="admin-auth-container">
      <h2>Admin Signup</h2>
      {error && <p className="error">{error}</p>}
      <SignupForm onSubmit={handleSignup} />
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default AdminSignup;
