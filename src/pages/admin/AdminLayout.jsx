import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaCreditCard, FaCalendarAlt, FaNewspaper } from 'react-icons/fa';
import './Admin.css';

const AdminLayout = () => {
  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <h2 className="admin-title">Admin Panel</h2>
        <nav className="admin-nav">
          <NavLink to="/admin" end className={({ isActive }) => isActive ? 'admin-link active' : 'admin-link'}>
            <FaTachometerAlt /> Dashboard
          </NavLink>
          <NavLink to="/admin/users" className={({ isActive }) => isActive ? 'admin-link active' : 'admin-link'}>
            <FaUsers /> Users
          </NavLink>
          <NavLink to="/admin/subscriptions" className={({ isActive }) => isActive ? 'admin-link active' : 'admin-link'}>
            <FaCalendarAlt /> Subscriptions
          </NavLink>
          <NavLink to="/admin/payments" className={({ isActive }) => isActive ? 'admin-link active' : 'admin-link'}>
            <FaCreditCard /> Payments
          </NavLink>
          <NavLink to="/admin/content" className={({ isActive }) => isActive ? 'admin-link active' : 'admin-link'}>
            <FaNewspaper /> Content
          </NavLink>
        </nav>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
