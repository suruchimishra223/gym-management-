import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setLoggedIn(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Basic validation
    if (!email || !email.includes('@')) {
      setError('Valid email is required');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/user/login', { email, password });
      if (response.data.token) {
        setLoggedIn(true);
        setError('');
        setFormData({ email: '', password: '' });

        // आप चाहें तो token localStorage में स्टोर कर सकते हैं
        localStorage.setItem('token', response.data.token);

        // लॉगिन के बाद आप यूजर को redirect भी कर सकते हैं (React Router के साथ)
      } else {
        setError('Login failed');
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Server error. Please try again later.');
      }
      setLoggedIn(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Gym Login</h2>
      {loggedIn && <p className="success">Login successful!</p>}
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          autoComplete="username"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
