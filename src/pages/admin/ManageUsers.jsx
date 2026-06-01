import React, { useState, useEffect } from 'react';
import { apiAdapter } from '../../adapters/api';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await apiAdapter.get('/api/admin/users');
      setUsers(data);
    } catch {}
    setLoading(false);
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      await apiAdapter.put(`/api/admin/users/${userId}/role`, { role: newRole });
      setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
    } catch {}
  };

  const handleToggleStatus = async (userId, isActive) => {
    try {
      await apiAdapter.put(`/api/admin/users/${userId}/status`, { is_active: !isActive });
      setUsers(users.map(u => u.id === userId ? { ...u, is_active: !isActive } : u));
    } catch {}
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Manage Users</h1>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.full_name || '—'}</td>
                <td>{user.email}</td>
                <td>
                  <select
                    className="role-select"
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td>
                  <span className={`status-badge ${user.is_active ? 'status-active' : 'status-cancelled'}`}>
                    {user.is_active ? 'Active' : 'Disabled'}
                  </span>
                </td>
                <td>{new Date(user.created_at).toLocaleDateString('en-IN')}</td>
                <td>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => handleToggleStatus(user.id, user.is_active)}
                  >
                    {user.is_active ? 'Disable' : 'Enable'}
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

export default ManageUsers;
