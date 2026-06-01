import { useState } from 'react';
import { apiAdapter } from '../adapters/api';

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const initiatePayment = async ({ amount, planId, type = 'subscription' }) => {
    setLoading(true);
    setError(null);
    try {
      const order = await apiAdapter.post('/api/payments/create-order', {
        amount,
        planId,
        type,
      });

      return new Promise((resolve, reject) => {
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount: order.amount,
          currency: order.currency || 'INR',
          name: 'Rehoboth Philadelphia Assembly',
          description: type === 'donation' ? 'Donation' : `Subscription: ${planId}`,
          order_id: order.id,
          handler: async (response) => {
            try {
              const verification = await apiAdapter.post('/api/payments/verify', {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                planId,
                type,
              });
              setLoading(false);
              resolve(verification);
            } catch (err) {
              setLoading(false);
              setError(err.message);
              reject(err);
            }
          },
          modal: {
            ondismiss: () => {
              setLoading(false);
              reject(new Error('Payment cancelled'));
            },
          },
          theme: { color: '#1a237e' },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      });
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw err;
    }
  };

  const initiateDonation = (amount) => {
    return initiatePayment({ amount, planId: 'donation', type: 'donation' });
  };

  return { initiatePayment, initiateDonation, loading, error };
};
