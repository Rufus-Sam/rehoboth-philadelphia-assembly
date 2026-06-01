import React from 'react';
import './MinistryCard.css';

const MinistryCard = ({ ministry }) => {
  return (
    <div className="ministry-card">
      <div className="ministry-icon">{ministry.icon}</div>
      <h3>{ministry.title}</h3>
      <p>{ministry.description}</p>
      <div className="ministry-details">
        <span className="ministry-leader">&#128100; {ministry.leader}</span>
        <span className="ministry-schedule">&#128197; {ministry.schedule}</span>
      </div>
    </div>
  );
};

export default MinistryCard;
