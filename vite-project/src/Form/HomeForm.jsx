import React, { useState } from "react";
import { FaSave, FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import "../App.css";

const GymHomeForm = () => {
  const [formData, setFormData] = useState({
    welcomeMessage: "Welcome to PowerFit Gym!",
    description: "Your journey to fitness starts here!",
    bannerUrl: "",
  });
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  // Cloudinary config - replace with your actual credentials
  const cloudName = "dxx694knf";
  const uploadPreset = "ml_default";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setUploadError("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      setFormData(prev => ({ ...prev, bannerUrl: res.data.secure_url }));
    } catch (err) {
      console.error("Upload error:", err);
      setUploadError("Image upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.bannerUrl) {
      alert("Please upload a banner image before saving.");
      return;
    }
    alert("Home page settings saved successfully!");
    // Here you would typically send the data to your backend
  };

  return (
    <div className="gym-form-container">
      <div className="form-header">
        <h2><FaCloudUploadAlt /> Home Page Settings</h2>
      </div>

      <form onSubmit={handleSubmit} className="gym-settings-form">
        <div className="form-group">
          <label htmlFor="welcomeMessage">Welcome Message</label>
          <input
            id="welcomeMessage"
            type="text"
            name="welcomeMessage"
            value={formData.welcomeMessage}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            required
            className="form-textarea"
          />
        </div>

        <div className="form-group">
          <label htmlFor="bannerUpload">Banner Image</label>
          <div className="upload-container">
            <input
              id="bannerUpload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input"
            />
            <label htmlFor="bannerUpload" className="file-label">
              Choose File
            </label>
            {uploading && <span className="upload-status">Uploading...</span>}
            {uploadError && <span className="error-message">{uploadError}</span>}
          </div>
        </div>

        {formData.bannerUrl && (
          <div className="banner-preview-container">
            <img 
              src={formData.bannerUrl} 
              alt="Banner Preview" 
              className="banner-preview"
            />
          </div>
        )}

        <button 
          type="submit" 
          className="submit-btn"
          disabled={uploading || !formData.bannerUrl}
        >
          <FaSave /> Save Settings
        </button>
      </form>
    </div>
  );
};

export default GymHomeForm;