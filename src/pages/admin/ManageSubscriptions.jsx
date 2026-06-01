import React, { useState, useEffect } from 'react';
import { apiAdapter } from '../../adapters/api';
import { PLANS } from '../../config/constants';

const ManageSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await apiAdapter.get('/api/admin/subscriptions');
        setSubscriptions(data);
      } catch {}
      setLoading(false);
    };
    fetch();
  }, []);

  const handleCancel = async (subId) => {
    if (!window.confirm('Cancel this subscription?')) return;
    try {
      await apiAdapter.put(`/api/admin/subscriptions/${subId}/cancel`);
      setSubscriptions(subscriptions.map(s => s.id === subId ? { ...s, status: 'cancelled' } : s));
    } catch {}
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Manage Subscriptions</h1>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Next Charge</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map(sub => (
              <tr key={sub.id}>
                <td>{sub.user_email || sub.user_id}</td>
                <td>{PLANS[sub.plan_id]?.name || sub.plan_id}</td>
                <td><span className={`status-badge status-${sub.status}`}>{sub.status}</span></td>
                <td>{sub.next_charge_date ? new Date(sub.next_charge_date).toLocaleDateString('en-IN') : '—'}</td>
                <td>
                  {sub.status === 'active' && (
                    <button className="btn btn-outline btn-sm" onClick={() => handleCancel(sub.id)}>
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSubscriptions;
