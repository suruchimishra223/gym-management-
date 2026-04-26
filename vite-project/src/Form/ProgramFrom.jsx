import React, { useState } from "react";
import "../App.css";

const GymProgramForm = () => {
  const [formData, setFormData] = useState({
    programName: "",
    description: "",
    duration: "",
    price: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (errors[e.target.name]) {
      const newErrors = { ...errors };
      delete newErrors[e.target.name];
      setErrors(newErrors);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.programName.trim()) newErrors.programName = "Program Name is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.duration.trim()) newErrors.duration = "Duration is required";
    if (!formData.price.trim()) newErrors.price = "Price is required";
    else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) 
      newErrors.price = "Price must be a positive number";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        alert(`Program Added!\nName: ${formData.programName}\nDescription: ${formData.description}\nDuration: ${formData.duration}\nPrice: ₹${formData.price}`);
        setFormData({
          programName: "",
          description: "",
          duration: "",
          price: "",
        });
        setErrors({});
        setIsSubmitting(false);
      }, 1000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <div className="icon-circle">
          <svg className="plus-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h2>Create Gym Program</h2>
        <p>Fill out the form to add a new gym program</p>
      </div>

      <form onSubmit={handleSubmit} className="form-body">
        {/* Program Name */}
        <div className="form-group">
          <label>Program Name <span className="required">*</span></label>
          <input
            type="text"
            name="programName"
            value={formData.programName}
            onChange={handleChange}
            className={errors.programName ? "input-error" : ""}
            placeholder="e.g. Weight Loss Plan"
          />
          {errors.programName && <p className="error-text">{errors.programName}</p>}
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description <span className="required">*</span></label>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className={errors.description ? "input-error" : ""}
            placeholder="e.g. A program focusing on fat loss with cardio and strength training."
          />
          {errors.description && <p className="error-text">{errors.description}</p>}
        </div>

        {/* Duration */}
        <div className="form-group">
          <label>Duration <span className="required">*</span></label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className={errors.duration ? "input-error" : ""}
            placeholder="e.g. 8 weeks"
          />
          {errors.duration && <p className="error-text">{errors.duration}</p>}
        </div>

        {/* Price */}
        <div className="form-group">
          <label>Price <span className="required">*</span></label>
          <div className="price-input">
            <span className="currency">₹</span>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={errors.price ? "input-error" : ""}
              placeholder="e.g. 1500"
            />
          </div>
          {errors.price && <p className="error-text">{errors.price}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="loading">Processing...</span>
          ) : (
            "Create Program"
          )}
        </button>
      </form>
    </div>
  );
};

export default GymProgramForm;
