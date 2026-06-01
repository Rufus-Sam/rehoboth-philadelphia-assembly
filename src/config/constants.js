export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
export const UPI_ID = process.env.REACT_APP_UPI_ID || '';
export const SITE_URL = process.env.REACT_APP_SITE_URL || 'http://localhost:3000';

export const PLANS = {
  free: { id: 'free', name: 'Free', price: 0, interval: null },
  basic_monthly: { id: 'basic_monthly', name: 'Basic', price: 99, interval: 'monthly' },
  basic_yearly: { id: 'basic_yearly', name: 'Basic', price: 999, interval: 'yearly' },
  premium_monthly: { id: 'premium_monthly', name: 'Premium', price: 249, interval: 'monthly' },
  premium_yearly: { id: 'premium_yearly', name: 'Premium', price: 2499, interval: 'yearly' },
};

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
};
