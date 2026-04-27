import React, { useState } from "react";
import "../App.css";

const GymMembershipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "",
    startDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("members") || "[]");

    const newMember = {
      ...formData,
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem("members", JSON.stringify([...oldData, newMember]));

    alert("Member Added!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      membershipType: "",
      startDate: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Membership Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />

        <select name="membershipType" value={formData.membershipType} onChange={handleChange} required>
          <option value="">Select Plan</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>

        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />

        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default GymMembershipForm;