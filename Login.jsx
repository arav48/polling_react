import React, { useState } from 'react';
import './Login.css'; // Make sure to adjust the path based on your project structure
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  // State for storing form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., make an API call to authenticate the user
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <button type="button" onClick={()=> navigate ('/home')}>
          Log In
        </button>
        <h4>OR</h4>
        <button type="button" onClick={()=> navigate ('/sign')}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
