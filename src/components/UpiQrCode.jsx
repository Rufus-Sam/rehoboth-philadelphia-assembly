import React from 'react';
import { UPI_ID } from '../config/constants';

const UpiQrCode = ({ amount, name = 'Rehoboth Philadelphia Assembly' }) => {
  const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(name)}${amount ? `&am=${amount}` : ''}&cu=INR`;

  return (
    <div className="upi-qr-section">
      <h3>Scan to Pay via UPI</h3>
      <p className="upi-subtitle">Free — no transaction charges</p>
      <div className="qr-container">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`}
          alt="UPI QR Code"
          className="qr-image"
        />
      </div>
      <p className="upi-id">UPI ID: <strong>{UPI_ID}</strong></p>
      {amount && <p className="upi-amount">Amount: ₹{amount}</p>}
      <p className="upi-note">Scan with any UPI app — Google Pay, PhonePe, Paytm</p>
    </div>
  );
};

export default UpiQrCode;
