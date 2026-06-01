import React, { useState } from 'react';
import './SubscriptionForm.css';

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', plan: 'free', preferences: [] });
  const [submitted, setSubmitted] = useState(false);

  const plans = [
    { id: 'free', name: 'Free', price: '\u20B90/month', features: ['Daily Bible Verse', 'Weekly Sermon Summary', 'Event Notifications'] },
    { id: 'basic', name: 'Basic', price: '\u20B999/month', features: ['All Free features', 'Daily Devotional Content', 'Prayer Request Submissions', 'Sermon Audio Access'] },
    { id: 'premium', name: 'Premium', price: '\u20B9249/month', features: ['All Basic features', 'Full Sermon Video Library', 'Exclusive Bible Study Materials', 'Personal Prayer Support', 'Ministry Updates & Reports'] }
  ];

  const contentPreferences = ['Daily Devotionals', 'Bible Verse of the Day', 'Sermon Highlights', 'Prayer Points', 'Church News & Events', 'Youth Content', 'Family Devotions', 'Worship Music Updates'];

  const handleChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); };

  const handlePreferenceChange = (pref) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(pref) ? prev.preferences.filter(p => p !== pref) : [...prev.preferences, pref]
    }));
  };

  const handleSubmit = (e) => { e.preventDefault(); console.log('Subscription data:', formData); setSubmitted(true); };

  if (submitted) {
    return (
      <div className="subscription-success">
        <div className="success-icon">&#10003;</div>
        <h2>Thank You for Subscribing!</h2>
        <p>You will start receiving daily content based on your preferences.</p>
        <p>Check your email for a confirmation message.</p>
        <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Subscribe Another</button>
      </div>
    );
  }

  return (
    <form className="subscription-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <h3>Choose Your Plan</h3>
        <div className="plans-grid">
          {plans.map(plan => (
            <div key={plan.id} className={`plan-card ${formData.plan === plan.id ? 'selected' : ''}`} onClick={() => setFormData(prev => ({ ...prev, plan: plan.id }))}>
              <h4>{plan.name}</h4>
              <p className="plan-price">{plan.price}</p>
              <ul>{plan.features.map((feature, idx) => (<li key={idx}>&#10003; {feature}</li>))}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="form-section">
        <h3>Your Information</h3>
        <div className="form-grid">
          <div className="form-group"><label>Full Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required /></div>
          <div className="form-group"><label>Email Address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required /></div>
          <div className="form-group"><label>Phone Number</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" /></div>
        </div>
      </div>
      <div className="form-section">
        <h3>Content Preferences</h3>
        <p className="form-hint">Select what you would like to receive daily:</p>
        <div className="preferences-grid">
          {contentPreferences.map(pref => (
            <label key={pref} className="preference-item">
              <input type="checkbox" checked={formData.preferences.includes(pref)} onChange={() => handlePreferenceChange(pref)} />
              <span>{pref}</span>
            </label>
          ))}
        </div>
      </div>
      <button type="submit" className="btn btn-primary submit-btn">Subscribe Now</button>
    </form>
  );
};

export default SubscriptionForm;
