import React, { useState } from 'react';
import "../../styles/common.css";

function LoginForm({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">{/* Form container */}
      <div className="form-group">{/* Username field */}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">{/* Password field */}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          required
          className="form-input"
        />
      </div>

      <button type="submit" className="login-btn">Login</button>{/* Submit button */}
    </form>
  );
}

export default LoginForm;
