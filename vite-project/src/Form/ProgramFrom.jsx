import React, { useState } from "react";

const GymProgramForm = () => {
  const [formData, setFormData] = useState({
    programName: "",
    description: "",
    duration: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldPrograms = JSON.parse(localStorage.getItem("programs") || "[]");

    const newProgram = {
      id: Date.now(),
      name: formData.programName,
      description: formData.description,
      duration: formData.duration,
      price: formData.price,
    };

    localStorage.setItem("programs", JSON.stringify([...oldPrograms, newProgram]));

    alert("Program Added!");

    setFormData({
      programName: "",
      description: "",
      duration: "",
      price: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Program Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="programName" value={formData.programName} onChange={handleChange} placeholder="Program Name" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <input name="duration" value={formData.duration} onChange={handleChange} placeholder="Duration" required />
        <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <button type="submit">Add Program</button>
      </form>
    </div>
  );
};

export default GymProgramForm;