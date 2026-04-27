import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // ✅ Redirect to Login page
    navigate('/login');
  };

  return (
    <div className="dashboard-main">
      <input type="checkbox" id="sidebar-toggle" className="sidebar-toggle" />
      <aside className="sidebar">
        <div className="logo">
          <h2>🏋️‍♂️ GYM</h2>
        </div>
<ul className="sidebar-menu">
  <li>
    <Link to="/dashboard/home" className="sidebar-link">🏠 Home View</Link>
  </li>

  <li>
    <Link to="/dashboard/homeform" className="sidebar-link">✏️ Home Form</Link>
  </li>

  <li>
    <Link to="/dashboard/hometable" className="sidebar-link">📊 Home Table</Link>
  </li>

  <li>
    <Link to="/dashboard/about" className="sidebar-link">📄 About</Link>
  </li>

  {/* ✅ PROGRAM SECTION */}
  <li>
    <Link to="/dashboard/program" className="sidebar-link">💪 Program</Link>
  </li>

  <li>
    <Link to="/dashboard/programform" className="sidebar-link">✏️ Program Form</Link>
  </li>

  {/* 🔥 ADD THIS */}
  <li>
    <Link to="/dashboard/programtable" className="sidebar-link">📊 Program Table</Link>
  </li>

  {/* ✅ MEMBERSHIP */}
  <li>
    <Link to="/dashboard/membership" className="sidebar-link">🏆 Membership</Link>
  </li>

  <li>
    <Link to="/dashboard/membershipform" className="sidebar-link">✏️ Membership Form</Link>
  </li>

  {/* 🔥 ADD THIS */}
  <li>
    <Link to="/dashboard/membershiptable" className="sidebar-link">📊 Membership Table</Link>
  </li>

  {/* CONTACT */}
  <li>
    <Link to="/dashboard/contact" className="sidebar-link">📧 Contact</Link>
  </li>
</ul>

        {/* ✅ Logout Button */}
        <button onClick={handleLogout} className="logout-btn">
          🚪 Logout
        </button>

        <label htmlFor="sidebar-toggle" className="sidebar-toggle-label">
          <span className="hamburger"></span>
        </label>
      </aside>

      <section className="content">
        <Outlet />
      </section>
    </div>
  );
}

export default Dashboard;