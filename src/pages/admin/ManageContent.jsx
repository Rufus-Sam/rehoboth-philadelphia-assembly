import React, { useState, useEffect } from 'react';
import { apiAdapter } from '../../adapters/api';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const ManageContent = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', body: '', content_type: 'devotional', date: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const data = await apiAdapter.get('/api/admin/daily-content');
      setContent(data);
    } catch {}
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await apiAdapter.put(`/api/admin/daily-content/${editId}`, form);
      } else {
        await apiAdapter.post('/api/admin/daily-content', form);
      }
      setShowForm(false);
      setForm({ title: '', body: '', content_type: 'devotional', date: '' });
      setEditId(null);
      fetchContent();
    } catch {}
  };

  const handleEdit = (item) => {
    setForm({ title: item.title, body: item.body, content_type: item.content_type, date: item.date });
    setEditId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this content?')) return;
    try {
      await apiAdapter.del(`/api/admin/daily-content/${id}`);
      setContent(content.filter(c => c.id !== id));
    } catch {}
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Daily Content</h1>
        <button className="btn btn-primary btn-sm" onClick={() => { setShowForm(!showForm); setEditId(null); }}>
          <FaPlus /> Add Content
        </button>
      </div>

      {showForm && (
        <div className="admin-card">
          <form onSubmit={handleSubmit} className="auth-form">
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
              style={{ padding: '0.75rem', borderRadius: 8, border: '2px solid #e5e7eb' }}
            />
            <select
              value={form.content_type}
              onChange={(e) => setForm({ ...form, content_type: e.target.value })}
              style={{ padding: '0.75rem', borderRadius: 8, border: '2px solid #e5e7eb' }}
            >
              <option value="devotional">Devotional</option>
              <option value="verse">Bible Verse</option>
              <option value="prayer_point">Prayer Point</option>
              <option value="announcement">Announcement</option>
            </select>
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              style={{ padding: '0.75rem', borderRadius: 8, border: '2px solid #e5e7eb' }}
            />
            <textarea
              placeholder="Content body"
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
              required
              rows={5}
              style={{ padding: '0.75rem', borderRadius: 8, border: '2px solid #e5e7eb', resize: 'vertical' }}
            />
            <button type="submit" className="btn btn-primary">{editId ? 'Update' : 'Create'}</button>
          </form>
        </div>
      )}

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Title</th>
              <th>Sent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {content.map(item => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.content_type}</td>
                <td>{item.title}</td>
                <td><span className={`status-badge ${item.is_sent ? 'status-active' : 'status-pending'}`}>{item.is_sent ? 'Sent' : 'Pending'}</span></td>
                <td>
                  <button className="btn btn-outline btn-sm" onClick={() => handleEdit(item)} style={{ marginRight: '0.5rem' }}>
                    <FaEdit />
                  </button>
                  <button className="btn btn-outline btn-sm" onClick={() => handleDelete(item.id)}>
                    <FaTrash />
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

export default ManageContent;
