import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import "../App.css";

const GymMemberTable = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      fullName: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "9876543210",
      membershipType: "Gold",
      startDate: "2025-05-01",
    },
    {
      id: 2,
      fullName: "Anjali Verma",
      email: "anjali@example.com",
      phone: "9123456780",
      membershipType: "Platinum",
      startDate: "2025-04-15",
    },
  ]);

  const handleCreate = () => {
    const newId = members.length + 1;
    const newMember = {
      id: newId,
      fullName: "New Member",
      email: "new@example.com",
      phone: "9000000000",
      membershipType: "Silver",
      startDate: new Date().toISOString().split("T")[0],
    };
    setMembers([...members, newMember]);
  };

  const handleEdit = (id) => {
    const member = members.find((m) => m.id === id);
    alert(`Edit Member: ${member.fullName}`);
  };

  const handleDelete = (id) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  return (
    <div className="member-table-container">
      <div className="member-header">
        <h2>Gym Membership List</h2>
        <button className="create-btn" onClick={handleCreate}>
          <FaPlus /> Create New
        </button>
      </div>

      <div className="table-container">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Membership Type</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.id}>
                <td data-label="ID">{m.id}</td>
                <td data-label="Full Name">{m.fullName}</td>
                <td data-label="Email Address">{m.email}</td>
                <td data-label="Phone">{m.phone}</td>
                <td data-label="Membership Type">{m.membershipType}</td>
                <td data-label="Start Date">{m.startDate}</td>
                <td data-label="Actions">
                  <button className="action-btn edit-btn" onClick={() => handleEdit(m.id)}>
                    <FaEdit />
                  </button>
                  <button className="action-btn delete-btn" onClick={() => handleDelete(m.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GymMemberTable;
