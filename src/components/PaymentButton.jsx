import React from 'react';
import { usePayment } from '../hooks/usePayment';

const PaymentButton = ({ amount, planId, type = 'subscription', label, onSuccess, onError, className }) => {
  const { initiatePayment, loading } = usePayment();

  const handleClick = async () => {
    try {
      const result = await initiatePayment({ amount, planId, type });
      onSuccess?.(result);
    } catch (err) {
      onError?.(err);
    }
  };

  return (
    <button
      className={className || 'btn btn-primary'}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? 'Processing...' : label || `Pay ₹${amount}`}
    </button>
  );
};

export default PaymentButton;
