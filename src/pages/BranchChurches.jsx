import React from 'react';
import BranchCard from '../components/BranchCard';
import './BranchChurches.css';

const BranchChurches = () => {
  const branches = [
    { id: 1, name: 'Rehoboth Philadelphia Assembly - Erode', location: 'Erode, Tamil Nadu', pastor: 'Branch Pastor', timing: '9:00 AM - 11:00 AM', members: '80+', established: '2015' },
    { id: 2, name: 'Rehoboth Philadelphia Assembly - Thirumangalam', location: 'Thirumangalam, Tamil Nadu', pastor: 'Branch Pastor', timing: '10:00 AM - 12:00 PM', members: '60+', established: '2018' }
  ];

  return (
    <div className="branches-page">
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1>Branch Churches</h1>
          <p>Find a Rehoboth Philadelphia Assembly near you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Branch Churches</h2>
          <p className="section-subtitle">Spreading the Gospel across Tamil Nadu through church planting</p>
          <div className="grid-2">
            {branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
          <div className="branches-summary">
            <div className="summary-item"><span className="summary-number">2</span><span className="summary-label">Branch Churches</span></div>
            <div className="summary-item"><span className="summary-number">140+</span><span className="summary-label">Total Members</span></div>
            <div className="summary-item"><span className="summary-number">2</span><span className="summary-label">Pastors</span></div>
            <div className="summary-item"><span className="summary-number">2015</span><span className="summary-label">First Branch Est.</span></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BranchChurches;
