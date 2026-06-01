import React, { useState, useEffect } from 'react';
import { apiAdapter } from '../../adapters/api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ users: 0, activeSubscriptions: 0, revenue: 0, pendingPayments: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await apiAdapter.get('/api/admin/stats');
        setStats(data);
      } catch {}
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="admin-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <div className="stat-value">{stats.users}</div>
        </div>
        <div className="stat-card">
          <h3>Active Subscriptions</h3>
          <div className="stat-value">{stats.activeSubscriptions}</div>
        </div>
        <div className="stat-card">
          <h3>Monthly Revenue</h3>
          <div className="stat-value">₹{(stats.revenue / 100).toLocaleString('en-IN')}</div>
        </div>
        <div className="stat-card">
          <h3>Pending Payments</h3>
          <div className="stat-value">{stats.pendingPayments}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
