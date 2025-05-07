import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Common/LoginForm';
import '../styles/admin.css';

function AdminLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // Hardcoded admin credentials
  const adminCredentials = {
    username: 'admin',
    password: 'admin123'
  };

  const handleLogin = (credentials) => {
    if (credentials.username === adminCredentials.username && 
        credentials.password === adminCredentials.password) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="admin-auth-container">
      <h2>Admin Login</h2>
      {error && <p className="error">{error}</p>}
      <LoginForm onSubmit={handleLogin} />
      <p>Don't have an account? <a href="/admin/signup">Sign up</a></p>
    </div>
  );
}

export default AdminLogin;