import React, { useState, useEffect } from "react";

const GymProgramTable = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("programs") || "[]");
    setPrograms(data);
  }, []);

  return (
    <div>
      <h2>Program Table</h2>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.duration}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GymProgramTable;