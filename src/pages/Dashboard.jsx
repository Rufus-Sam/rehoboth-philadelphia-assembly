import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useSubscriptionStore } from '../stores/subscriptionStore';
import { PLANS } from '../config/constants';
import { FaUser, FaCreditCard, FaCalendarAlt, FaCrown } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const { user, profile } = useAuthStore();
  const { subscription, payments, fetchSubscription, fetchPayments } = useSubscriptionStore();

  useEffect(() => {
    fetchSubscription();
    fetchPayments();
  }, [fetchSubscription, fetchPayments]);

  const currentPlan = subscription ? PLANS[subscription.plan_id] : PLANS.free;

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome, {profile?.full_name || user?.name || 'Member'}</h1>
          <p>Manage your subscription and account</p>
        </div>

        <div className="dashboard-grid">
          <div className="dash-card">
            <div className="dash-card-icon"><FaUser /></div>
            <h3>Profile</h3>
            <p>{user?.email}</p>
            <Link to="/profile" className="btn btn-outline btn-sm">Edit Profile</Link>
          </div>

          <div className="dash-card">
            <div className="dash-card-icon"><FaCrown /></div>
            <h3>Current Plan</h3>
            <p className="plan-name">{currentPlan?.name || 'Free'}</p>
            <p className="plan-price">
              {currentPlan?.price > 0 ? `₹${currentPlan.price}/${currentPlan.interval === 'monthly' ? 'mo' : 'yr'}` : 'No charge'}
            </p>
            {subscription?.status && (
              <span className={`status-badge status-${subscription.status}`}>
                {subscription.status}
              </span>
            )}
            <Link to="/subscribe" className="btn btn-primary btn-sm">
              {subscription?.plan_id === 'free' || !subscription ? 'Upgrade' : 'Change Plan'}
            </Link>
          </div>

          <div className="dash-card">
            <div className="dash-card-icon"><FaCreditCard /></div>
            <h3>Payments</h3>
            <p>{payments.length} transaction{payments.length !== 1 ? 's' : ''}</p>
            {payments.length > 0 && (
              <p className="last-payment">
                Last: ₹{(payments[0]?.amount / 100).toFixed(0)} on{' '}
                {new Date(payments[0]?.created_at).toLocaleDateString('en-IN')}
              </p>
            )}
          </div>

          <div className="dash-card">
            <div className="dash-card-icon"><FaCalendarAlt /></div>
            <h3>Next Charge</h3>
            {subscription?.current_period_end ? (
              <p>{new Date(subscription.current_period_end).toLocaleDateString('en-IN')}</p>
            ) : (
              <p>No upcoming charges</p>
            )}
          </div>
        </div>

        {payments.length > 0 && (
          <div className="payment-history">
            <h2>Payment History</h2>
            <table className="payments-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.slice(0, 10).map((payment) => (
                  <tr key={payment.id}>
                    <td>{new Date(payment.created_at).toLocaleDateString('en-IN')}</td>
                    <td>₹{(payment.amount / 100).toFixed(0)}</td>
                    <td>{payment.type}</td>
                    <td><span className={`status-badge status-${payment.status}`}>{payment.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
