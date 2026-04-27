import React, { useEffect, useState } from "react";
import { FaUsers, FaDumbbell, FaRupeeSign } from "react-icons/fa";

// ✅ AOS IMPORT
import AOS from "aos";
import "aos/dist/aos.css";

const DashboardHome = () => {
  const [stats, setStats] = useState({
    totalMembers: 0,
    totalPrograms: 0,
    revenue: 0,
  });

  const [members, setMembers] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [adminName, setAdminName] = useState("Admin");

  useEffect(() => {
    // ✅ AOS INIT
    AOS.init({
      duration: 1000,
      once: true,
    });

    const loadData = () => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (user.name) setAdminName(user.name);

      const membersData = JSON.parse(localStorage.getItem("members") || "[]");
      const programsData = JSON.parse(localStorage.getItem("programs") || "[]");

      setMembers(membersData);
      setPrograms(programsData);

      setStats({
        totalMembers: membersData.length,
        totalPrograms: programsData.length,
        revenue: membersData.length * 1000,
      });
    };

    loadData();

    window.addEventListener("storage", loadData);
    return () => window.removeEventListener("storage", loadData);
  }, []);

  return (
    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header} data-aos="fade-down">
        <h2>Welcome, {adminName} 👋</h2>
        <p>Gym Management Dashboard</p>
      </div>

      {/* STATS CARDS */}
      <div style={styles.grid}>
        
        <div data-aos="zoom-in">
          <Card 
            icon={<FaUsers />} 
            title="Members" 
            value={stats.totalMembers} 
            color="linear-gradient(135deg, #616265, #764ba2)" 
          />
        </div>

        <div data-aos="zoom-in" data-aos-delay="100">
          <Card 
            icon={<FaDumbbell />} 
            title="Programs" 
            value={stats.totalPrograms} 
            color="linear-gradient(135deg, #11998e, #2c2e2d)" 
          />
        </div>

        <div data-aos="zoom-in" data-aos-delay="200">
          <Card 
            icon={<FaRupeeSign />} 
            title="Revenue" 
            value={`₹${stats.revenue}`} 
            color="linear-gradient(135deg, #5b5145, #ffd200)" 
          />
        </div>

      </div>

      {/* TABLES */}
      <div style={styles.tables}>

        {/* MEMBERS */}
        <div data-aos="fade-right">
          <TableBox title="Recent Members">
            {members.length > 0 ? (
              members.slice(-5).reverse().map((m) => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td>{m.email}</td>
                  <td>{m.membershipType}</td>
                </tr>
              ))
            ) : (
              <EmptyRow col={3} text="No Members Found" />
            )}
          </TableBox>
        </div>

        {/* PROGRAMS */}
        <div data-aos="fade-left">
          <TableBox title="Programs">
            {programs.length > 0 ? (
              programs.slice(-5).reverse().map((p) => (
                <tr key={p.id}>
                  <td>{p.name || p.programName}</td>
                  <td>{p.duration}</td>
                  <td>₹{p.price}</td>
                </tr>
              ))
            ) : (
              <EmptyRow col={3} text="No Programs Found" />
            )}
          </TableBox>
        </div>

      </div>
    </div>
  );
};

export default DashboardHome;



// 🔹 CARD COMPONENT
const Card = ({ icon, title, value, color }) => (
  <div style={{ ...styles.card, background: color }}>
    <div>
      <p style={styles.cardTitle}>{title}</p>
      <h2 style={styles.cardValue}>{value}</h2>
    </div>
    <div style={styles.iconBox}>{icon}</div>
  </div>
);


// 🔹 TABLE COMPONENT
const TableBox = ({ title, children }) => (
  <div style={styles.box}>
    <h3 style={styles.boxTitle}>{title}</h3>
    <table style={styles.table}>
      <thead>
        <tr style={styles.thead}>
          <th>Name</th>
          <th>Details</th>
          <th>Extra</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);


// 🔹 EMPTY ROW
const EmptyRow = ({ col, text }) => (
  <tr>
    <td colSpan={col} style={styles.empty}>
      {text}
    </td>
  </tr>
);


// 🎨 STYLES
const styles = {
  container: {
    padding: "20px",
    background: "#f4f6f9",
    minHeight: "100vh",
  },

  header: {
    marginBottom: "25px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderRadius: "14px",
    color: "white",
    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
    transition: "0.3s",
    cursor: "pointer",
  },

  cardTitle: {
    fontSize: "14px",
    opacity: 0.85,
  },

  cardValue: {
    fontSize: "26px",
    fontWeight: "bold",
  },

  iconBox: {
    fontSize: "28px",
    background: "rgba(255,255,255,0.2)",
    padding: "12px",
    borderRadius: "12px",
  },

  tables: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  box: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },

  boxTitle: {
    marginBottom: "10px",
    borderBottom: "2px solid #eee",
    paddingBottom: "5px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  thead: {
    background: "#1a1a2e",
    color: "white",
  },

  empty: {
    textAlign: "center",
    padding: "15px",
    color: "#888",
  },
};