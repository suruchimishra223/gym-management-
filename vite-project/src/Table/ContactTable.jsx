import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaUser, FaDumbbell, FaCalendarAlt } from "react-icons/fa";
import "../App.css";

const GymHomeTable = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "John Doe",
      membership: "Premium",
      trainer: "Mark Johnson",
      joinDate: "2023-01-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Smith",
      membership: "Basic",
      trainer: "Lisa Ray",
      joinDate: "2023-02-20",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Chen",
      membership: "Student",
      trainer: "Mark Johnson",
      joinDate: "2023-03-10",
      status: "Inactive",
    },
  ]);

  const handleCreate = () => {
    const newMember = {
      id: members.length + 1,
      name: "New Member",
      membership: "Basic",
      trainer: "Not Assigned",
      joinDate: new Date().toISOString().split('T')[0],
      status: "Active",
    };
    setMembers([...members, newMember]);
  };

  const handleEdit = (id) => {
    const member = members.find((m) => m.id === id);
    alert(`Edit Member: ${member.name}\nTrainer: ${member.trainer}`);
  };

  const handleDelete = (id) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  return (
    <div className="gym-table-container">
      <div className="table-header">
        <h2><FaUser /> Gym Members</h2>
        <button className="create-btn" onClick={handleCreate}>
          <FaPlus /> Add Member
        </button>
      </div>

      <div className="table-responsive">
        <table className="gym-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Member Name</th>
              <th><FaDumbbell /> Membership</th>
              <th>Trainer</th>
              <th><FaCalendarAlt /> Join Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className={member.status.toLowerCase()}>
                <td data-label="ID">{member.id}</td>
                <td data-label="Member Name">{member.name}</td>
                <td data-label="Membership">{member.membership}</td>
                <td data-label="Trainer">{member.trainer}</td>
                <td data-label="Join Date">{member.joinDate}</td>
                <td data-label="Status">
                  <span className={`status-badge ${member.status.toLowerCase()}`}>
                    {member.status}
                  </span>
                </td>
                <td data-label="Actions">
                  <button 
                    className="action-btn edit-btn" 
                    onClick={() => handleEdit(member.id)}
                  >
                    <FaEdit />
                  </button>
                  <button 
                    className="action-btn delete-btn" 
                    onClick={() => handleDelete(member.id)}
                  >
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

export default GymHomeTable;