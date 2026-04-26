import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import "../App.css";

const GymProgramTable = () => {
  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: "Weight Training",
      description: "Strength building with weights and resistance machines.",
      duration: "3 Months",
      price: "₹2500",
    },
    {
      id: 2,
      name: "Cardio Program",
      description: "Improve stamina and burn calories with cardio workouts.",
      duration: "1 Month",
      price: "₹1000",
    },
  ]);

  const [modalData, setModalData] = useState(null);

  const openCreateModal = () => {
    setModalData({
      id: null,
      name: "",
      description: "",
      duration: "",
      price: "",
    });
  };

  const handleEdit = (program) => {
    setModalData({ ...program });
  };

  const handleDelete = (id) => {
    setPrograms(programs.filter((p) => p.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalData.id === null) {
      // Create
      const newProgram = {
        ...modalData,
        id: programs.length + 1,
      };
      setPrograms([...programs, newProgram]);
    } else {
      // Update
      setPrograms((prev) =>
        prev.map((p) => (p.id === modalData.id ? modalData : p))
      );
    }
    setModalData(null);
  };

  return (
    <div className="program-table-container">
      {/* Add New Button at Top */}
      <div style={{ textAlign: "right", marginBottom: "10px" }}>

        <button className="create-btn" onClick={openCreateModal}>
          <FaPlus /> Add New Program
        </button>
 

      </div>

      <div className="program-header">
        <h2>Gym Programs</h2>
      </div>

      <div className="table-container">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Program Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.duration}</td>
                <td>{p.price}</td>
                <td>
                  <button
                    className="action-btn edit-btn"
                    onClick={() => handleEdit(p)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(p.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Create/Edit */}
      {modalData && (
        <div className="modal">
          <div className="modal-content">
            <h3>{modalData.id ? "Edit Program" : "Add New Program"}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={modalData.name}
                onChange={handleChange}
                placeholder="Program Name"
                required
              />
              <textarea
                name="description"
                value={modalData.description}
                onChange={handleChange}
                placeholder="Description"
                required
              />
              <input
                type="text"
                name="duration"
                value={modalData.duration}
                onChange={handleChange}
                placeholder="Duration"
                required
              />
              <input
                type="text"
                name="price"
                value={modalData.price}
                onChange={handleChange}
                placeholder="Price"
                required
              />
              <div className="modal-actions">
                <button type="submit">{modalData.id ? "Update" : "Add"}</button>
                <button type="button" onClick={() => setModalData(null)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GymProgramTable;
