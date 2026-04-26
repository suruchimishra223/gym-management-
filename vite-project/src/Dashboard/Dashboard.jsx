// Dashboard.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  function logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <div className="dashboard-main">
      <input type="checkbox" id="sidebar-toggle" className="sidebar-toggle" />
      <aside className="sidebar">
        <div className="logo">
          <h2>🏋️‍♂️ GYM</h2>
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/dashboard" className="sidebar-link">🏠 Home</Link></li>
          <li><Link to="/dashboard/about" className="sidebar-link">📄 About</Link></li>
          <li><Link to="/dashboard/program" className="sidebar-link">💪 Program</Link></li>           {/* ✅ MATCHES */}
          <li><Link to="/dashboard/membership" className="sidebar-link">🏆 Membership</Link></li>     {/* ✅ MATCHES */}
          <li><Link to="/dashboard/contact" className="sidebar-link">📧 Contact</Link></li>           {/* ✅ MATCHES */}
        </ul>
        <button onClick={logout} className="logout-btn">Logout</button>
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