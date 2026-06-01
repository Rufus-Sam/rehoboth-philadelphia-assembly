import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../stores/authStore';
import { apiAdapter } from '../adapters/api';
import { FaUser, FaPhone, FaSave } from 'react-icons/fa';
import './Dashboard.css';

const Profile = () => {
  const { user, profile } = useAuthStore();
  const [form, setForm] = useState({ full_name: '', phone: '' });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (profile) {
      setForm({ full_name: profile.full_name || '', phone: profile.phone || '' });
    }
  }, [profile]);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      await apiAdapter.put('/api/users/profile', form);
      setMessage('Profile updated successfully');
    } catch (err) {
      setMessage('Failed to update profile');
    }
    setSaving(false);
  };

  return (
    <div className="dashboard-page">
      <div className="container" style={{ maxWidth: 600 }}>
        <div className="dashboard-header">
          <h1>Your Profile</h1>
          <p>{user?.email}</p>
        </div>

        <div className="dash-card" style={{ textAlign: 'left' }}>
          {message && <div className={`auth-error`} style={{ background: message.includes('success') ? '#dcfce7' : '#fef2f2', color: message.includes('success') ? '#16a34a' : '#dc2626' }}>{message}</div>}
          <form onSubmit={handleSave} className="auth-form">
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Full Name"
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
              />
            </div>
            <div className="input-group">
              <FaPhone className="input-icon" />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full" disabled={saving}>
              <FaSave /> {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
