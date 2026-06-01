import React from 'react';
import './BranchCard.css';

const BranchCard = ({ branch }) => {
  return (
    <div className="branch-card">
      <div className="branch-header">
        <div className="branch-number">{branch.id}</div>
        <h3>{branch.name}</h3>
      </div>
      <div className="branch-body">
        <p className="branch-location">&#128205; {branch.location}</p>
        <p className="branch-pastor">&#128100; Pastor: {branch.pastor}</p>
        <p className="branch-timing">&#128336; Sunday: {branch.timing}</p>
        <p className="branch-members">&#128101; Members: {branch.members}</p>
      </div>
      <div className="branch-footer">
        <span className="branch-established">Est. {branch.established}</span>
      </div>
    </div>
  );
};

export default BranchCard;
