import React, { useState } from 'react';
import "../../styles/student.css";

function Settings() {
  const [settings, setSettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: true,
    theme: 'light'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (settings.newPassword !== settings.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    alert('Settings saved successfully!');
    console.log(settings);
  };

  return (
    <div className="student-settings">
      <h2>Settings</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Current Password:</label>
          <input
            type="password"
            name="currentPassword"
            value={settings.currentPassword}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            name="newPassword"
            value={settings.newPassword}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label>Confirm New Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={settings.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleInputChange}
            />
            Enable Notifications
          </label>
        </div>
        
        <div className="form-group">
          <label>Theme:</label>
          <select name="theme" value={settings.theme} onChange={handleInputChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;