import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'student' // Default role
  });
  const [error, setError] = useState('');

  // Hardcoded user database
  const userDatabase = {
    // Students
    'dhaarani': { password: 'd123', role: 'student', name: 'Dhaarani M' },
    'dharshini': { password: 'd123', role: 'student', name: 'Dharshini M' },

    // Faculty
    'john': { password: 'j123', role: 'faculty', name: 'John Doe' },
    'jane': { password: 'j123', role: 'faculty', name: 'Jane Smith' },

    // Admin
    'admin': { password: 'admin123', role: 'admin', name: 'Administrator' }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const user = userDatabase[formData.username];

    if (!user) {
      setError('Username not found');
      return;
    }

    if (user.password !== formData.password) {
      setError('Incorrect password');
      return;
    }

    if (formData.role && user.role !== formData.role) {
      setError(`This account is for ${user.role}s, not ${formData.role}s`);
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify({
      username: formData.username,
      name: user.name,
      role: user.role
    }));

    // Navigate based on role
    if (user.role === 'admin') {
      navigate('/admin/dashboard');
    } else if (user.role === 'faculty') {
      navigate('/staff/dashboard');
    } else {
      navigate('/student/dashboard');
    }
  };

  return (
    <div className="admin-auth-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">Login</h1>
          <p className="login-subtitle">Access your educational resources</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              className="form-input"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group role-selection">
            <label className="role-label">I am a:</label>
            <div className="role-options">
              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={formData.role === 'student'}
                  onChange={handleInputChange}
                />
                <span className="role-text">Student</span>
              </label>

              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="faculty"
                  checked={formData.role === 'faculty'}
                  onChange={handleInputChange}
                />
                <span className="role-text">Faculty</span>
              </label>

              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={formData.role === 'admin'}
                  onChange={handleInputChange}
                />
                <span className="role-text">Admin</span>
              </label>
            </div>
          </div>

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        <div className="login-footer">
          <p className="footer-text">
            Forgot password? <a className="footer-link" href="/reset-password">Reset here</a>
          </p>
          <p className="footer-text">
            Need help? Contact <a className="footer-link" href="mailto:support@school.edu">support@school.edu</a>
          </p>
        </div>
      </div>

    </div>
  );
}

export default Login;
