import React, { useState } from 'react';

function SignupForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    instituteName:'',
    proof: null,
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        required
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        onChange={handleChange}
      />
      <label htmlFor="instituteName">Name of the institution:</label>
      <input
        type="text"
        name="instituteName"
        placeholder="Name of the institution"
        required
        onChange={handleChange}
      />
     <label htmlFor="file">Upload document:</label>
      <input
        type="file"
        name="proof"
        accept=".pdf,.jpg,.png"
        required
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={handleChange}
      />
      <label htmlFor="password">Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        required
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
