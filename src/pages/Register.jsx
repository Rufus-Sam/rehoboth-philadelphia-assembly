import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { FaGoogle, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import './Login.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('register');
  const [localError, setLocalError] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);
  const { signUp, verifyOtp, resendOtp, signInWithGoogle, error, clearError } = useAuthStore();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLocalError('');
    if (password !== confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setLocalError('Password must be at least 6 characters');
      return;
    }
    try {
      await signUp(email, password, { full_name: name });
      setStep('verify');
    } catch {}
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLocalError('');
    if (otp.length !== 6) {
      setLocalError('Please enter the 6-digit code');
      return;
    }
    try {
      await verifyOtp(email, otp);
      navigate('/dashboard', { replace: true });
    } catch {}
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    try {
      await resendOtp(email);
      setResendCooldown(60);
      const interval = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch {}
  };

  const handleGoogleSignUp = async () => {
    clearError();
    await signInWithGoogle();
  };

  if (step === 'verify') {
    return (
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-header">
            <span className="auth-icon">&#10013;</span>
            <h1>Verify Email</h1>
            <p>Enter the 6-digit code sent to <strong>{email}</strong></p>
          </div>

          {(error || localError) && <div className="auth-error">{localError || error}</div>}

          <form onSubmit={handleVerifyOtp} className="auth-form">
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="text"
                placeholder="Enter 6-digit code"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
                autoFocus
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full">Verify & Continue</button>
          </form>

          <div className="auth-footer">
            <p>
              Didn't receive the code?{' '}
              <button
                onClick={handleResendOtp}
                disabled={resendCooldown > 0}
                style={{
                  background: 'none',
                  border: 'none',
                  color: resendCooldown > 0 ? '#999' : '#1a237e',
                  cursor: resendCooldown > 0 ? 'default' : 'pointer',
                  fontWeight: 500,
                  padding: 0,
                  fontSize: 'inherit',
                }}
              >
                {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend code'}
              </button>
            </p>
            <p>
              <button
                onClick={() => setStep('register')}
                style={{ background: 'none', border: 'none', color: '#1a237e', cursor: 'pointer', fontWeight: 500, padding: 0, fontSize: 'inherit' }}
              >
                Back to registration
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <span className="auth-icon">&#10013;</span>
          <h1>Join Us</h1>
          <p>Create your account</p>
        </div>

        {(error || localError) && <div className="auth-error">{localError || error}</div>}

        <button className="btn-google" onClick={handleGoogleSignUp}>
          <FaGoogle /> Sign up with Google
        </button>

        <div className="auth-divider"><span>or</span></div>

        <form onSubmit={handleRegister} className="auth-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full">Create Account</button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
