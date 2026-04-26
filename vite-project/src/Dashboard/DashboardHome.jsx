import React, { useEffect, useState } from "react";

const DashboardHome = () => {
  const [stats, setStats] = useState({
    totalMembers: 1245,
    totalMessages: 89,
    activePlans: 843,
    totalRevenue: 1250000
  });
  const [recentMessages, setRecentMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adminName, setAdminName] = useState("Admin");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.name) setAdminName(user.name);
    
    // Mock data
    setTimeout(() => {
      setRecentMessages([
        { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Interested in membership', date: '2024-01-15' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'Question about personal training', date: '2024-01-14' },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading Dashboard...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', padding: '25px', borderRadius: '12px', marginBottom: '25px' }}>
        <h2>Welcome back, {adminName}! 👋</h2>
        <p>Here's what's happening with your fitness club today.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '12px' }}>
          <h3>👥 Total Members</h3>
          <h2>{stats.totalMembers}</h2>
        </div>
        <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '12px' }}>
          <h3>📧 New Messages</h3>
          <h2>{stats.totalMessages}</h2>
        </div>
        <div style={{ background: '#fff8e1', padding: '20px', borderRadius: '12px' }}>
          <h3>💪 Active Plans</h3>
          <h2>{stats.activePlans}</h2>
        </div>
        <div style={{ background: '#fce4ec', padding: '20px', borderRadius: '12px' }}>
          <h3>💰 Total Revenue</h3>
          <h2>₹12.5L</h2>
        </div>
      </div>

      <h2>📧 Recent Messages</h2>
      <table style={{ width: '100%', background: 'white', borderRadius: '12px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ background: '#1a1a2e', color: 'white' }}>
            <th style={{ padding: '12px' }}>Name</th>
            <th style={{ padding: '12px' }}>Email</th>
            <th style={{ padding: '12px' }}>Message</th>
            <th style={{ padding: '12px' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {recentMessages.map(msg => (
            <tr key={msg.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px' }}>{msg.name}</td>
              <td style={{ padding: '12px' }}>{msg.email}</td>
              <td style={{ padding: '12px' }}>{msg.message}</td>
              <td style={{ padding: '12px' }}>{msg.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardHome;