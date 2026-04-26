import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const UpdateHomeForm = () => {
  const { id } = useParams();   // ✅ URL से id ले रहे हैं
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    welcomeMessage: '',
    description: '',
    bannerImage: null,
  });

  // ✅ Data fetch करके form prefill
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/gym-home/${id}`)
      .then(res => {
        setFormData({
          welcomeMessage: res.data.welcomeMessage || '',
          description: res.data.description || '',
          bannerImage: null,
        });
      })
      .catch(err => console.error(err));
  }, [id]);

  // ✅ Input handle
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'bannerImage') {
      setFormData(prev => ({ ...prev, bannerImage: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // ✅ Submit update
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('welcomeMessage', formData.welcomeMessage);
    data.append('description', formData.description);

    if (formData.bannerImage) {
      data.append('bannerImage', formData.bannerImage);
    }

    axios.put(`${import.meta.env.VITE_API_URL}/api/gym-home/${id}`, data)
      .then(() => {
        alert('✅ Updated Successfully');
        navigate('/dashboard/hometable');   // ✅ redirect
      })
      .catch(err => {
        alert('❌ Update failed');
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      
      {/* ✅ Back Button */}
      <Link to="/dashboard/hometable">
        <button type="button">Back</button>
      </Link>

      <div>
        <label>Welcome Message:</label>
        <input
          type="text"
          name="welcomeMessage"
          value={formData.welcomeMessage}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Banner Image:</label>
        <input
          type="file"
          name="bannerImage"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateHomeForm;