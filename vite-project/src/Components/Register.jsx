import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    phone: '',
    gender: '',
    membership: '',
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.includes('@')) errs.email = "Valid email is required";
    if (!formData.password || formData.password.length < 6)
      errs.password = "Password must be at least 6 characters";
    if (!formData.age || Number(formData.age) < 16)
      errs.age = "Age must be 16 or above";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      errs.phone = "Valid 10-digit phone number required";
    if (!formData.gender) errs.gender = "Gender is required";
    if (!formData.membership) errs.membership = "Membership type is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({});
    setServerError('');
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setServerError('');
    setSuccessMessage('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const payload = {
        ...formData,
        age: Number(formData.age),
      };

      // ✅ SAHI URL - "users" with 's'
      const response = await axios.post('http://localhost:4000/api/users/register', payload);

      setSuccessMessage(response.data.message || 'Registration successful!');
      setFormData({
        name: '',
        email: '',
        password: '',
        age: '',
        phone: '',
        gender: '',
        membership: '',
      });
      setErrors({});
    } catch (error) {
      if (error.response && error.response.data) {
        setServerError(error.response.data.message || 'Registration failed!');
      } else {
        setServerError('Registration failed!');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      {successMessage && <p className="success">{successMessage}</p>}
      {serverError && <p className="error">{serverError}</p>}

      <form onSubmit={handleSubmit}>
        {['name', 'email', 'password', 'age', 'phone'].map((field) => (
          <div className="form-group" key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type={field === 'password' ? 'password' : field === 'age' ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
            {errors[field] && <div className="error">{errors[field]}</div>}
          </div>
        ))}

        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div className="error">{errors.gender}</div>}
        </div>

        <div className="form-group">
          <label>Membership:</label>
          <select name="membership" value={formData.membership} onChange={handleChange}>
            <option value="">Select membership</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
          </select>
          {errors.membership && <div className="error">{errors.membership}</div>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;