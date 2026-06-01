import React, { useState, useEffect } from 'react';
import { apiAdapter } from '../../adapters/api';

const ManagePayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await apiAdapter.get('/api/admin/payments');
        setPayments(data);
      } catch {}
      setLoading(false);
    };
    fetch();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Payments</h1>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>User</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Status</th>
              <th>Razorpay ID</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.id}>
                <td>{new Date(payment.created_at).toLocaleDateString('en-IN')}</td>
                <td>{payment.user_email || payment.user_id}</td>
                <td>₹{(payment.amount / 100).toFixed(0)}</td>
                <td>{payment.type}</td>
                <td><span className={`status-badge status-${payment.status}`}>{payment.status}</span></td>
                <td style={{ fontSize: '0.8rem', color: '#666' }}>{payment.razorpay_payment_id || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePayments;
