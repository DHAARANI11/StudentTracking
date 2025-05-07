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
    'alice': { password: 'alice123', role: 'student', name: 'Alice Johnson' },
    'bob': { password: 'bob123', role: 'student', name: 'Bob Smith' },
    
    // Faculty
    'john': { password: 'math123', role: 'faculty', name: 'John Doe' },
    'jane': { password: 'science123', role: 'faculty', name: 'Jane Smith' }
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

    // Check if user exists
    const user = userDatabase[formData.username];
    
    if (!user) {
      setError('Username not found');
      return;
    }

    // Check password
    if (user.password !== formData.password) {
      setError('Incorrect password');
      return;
    }

    // Check role (if explicitly selected)
    if (formData.role && user.role !== formData.role) {
      setError(`This account is for ${user.role}s, not ${formData.role}s`);
      return;
    }

    // Store user data and redirect
    localStorage.setItem('currentUser', JSON.stringify({
      username: formData.username,
      name: user.name,
      role: user.role
    }));

    // Redirect based on role
    if (user.role === 'faculty') {
      navigate('/staff/dashboard');
    } else {
      navigate('/student/dashboard');
    }
  };

  return (
    <div className="login-container"> {/* Main container */}
      <div className="login-card"> {/* Card container */}
        <div className="login-header"> {/* Header section */}
          <h1 className="login-title">School Portal Login</h1>
          <p className="login-subtitle">Access your educational resources</p>
        </div>

        {error && <div className="error-message">{error}</div>} {/* Error display */}

        <form className="login-form" onSubmit={handleSubmit}> {/* Form container */}
          <div className="form-group"> {/* Username input group */}
            <label className="form-label" htmlFor="username">Username</label>
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

          <div className="form-group"> {/* Password input group */}
            <label className="form-label" htmlFor="password">Password</label>
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

          <div className="form-group role-selection"> {/* Role selection */}
            <label className="role-label">I am a:</label>
            <div className="role-options">
              <label className="role-option">
                <input
                  className="role-radio"
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
                  className="role-radio"
                  type="radio"
                  name="role"
                  value="faculty"
                  checked={formData.role === 'faculty'}
                  onChange={handleInputChange}
                />
                <span className="role-text">Faculty</span>
              </label>
            </div>
          </div>

          <button type="submit" className="login-button"> {/* Submit button */}
            Log In
          </button>
        </form>

        <div className="login-footer"> {/* Footer links */}
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