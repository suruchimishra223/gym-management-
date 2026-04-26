import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaArrowLeft } from "react-icons/fa";
import "../App.css";

const GymHomeManager = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    welcome: "",
    description: "",
    banner: ""
  });
  const [editMode, setEditMode] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("gymEntries")) || [];
    setEntries(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("gymEntries", JSON.stringify(entries));
  }, [entries]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!formData.welcome || !formData.description || !formData.banner) return;

    const newEntry = {
      ...formData,
      id: Date.now()
    };
    setEntries([...entries, newEntry]);
    setFormData({ id: null, welcome: "", description: "", banner: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    const filtered = entries.filter((item) => item.id !== id);
    setEntries(filtered);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditMode(true);
    setShowForm(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updated = entries.map((entry) =>
      entry.id === formData.id ? formData : entry
    );
    setEntries(updated);
    setFormData({ id: null, welcome: "", description: "", banner: "" });
    setEditMode(false);
    setShowForm(false);
  };

  const handleBack = () => {
    setShowForm(false);
    setFormData({ id: null, welcome: "", description: "", banner: "" });
    setEditMode(false);
  };

  return (
    <div className="manager-container">
      <h2>🏋️ Gym Home Content Manager</h2>

      {showForm ? (
        <>
          <button onClick={handleBack} className="back-btn">
            <FaArrowLeft /> Back to Table
          </button>
          <form onSubmit={editMode ? handleUpdate : handleCreate}>
            <input
              type="text"
              name="welcome"
              placeholder="Welcome Message"
              value={formData.welcome}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="banner"
              placeholder="Banner Image URL"
              value={formData.banner}
              onChange={handleChange}
              required
            />

            <button type="submit">
              {editMode ? "Update Entry" : "Create Entry"}
            </button>
          </form>
        </>
      ) : (
        <>
          <button onClick={() => setShowForm(true)} className="create-btn">
            + Create New Entry
          </button>

          <table>
            <thead>
              <tr>
                <th>Welcome</th>
                <th>Description</th>
                <th>Banner</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.welcome}</td>
                  <td>{entry.description}</td>
                  <td>
                    <img
                      src={entry.banner}
                      alt="Banner"
                      width="100"
                      style={{ borderRadius: "8px" }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => handleEdit(entry)}
                      title="Edit"
                      className="icon-btn edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      title="Delete"
                      className="icon-btn delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default GymHomeManager;
