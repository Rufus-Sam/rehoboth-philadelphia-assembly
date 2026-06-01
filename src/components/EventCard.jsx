import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-date-badge">
        <span className="event-day">{event.day}</span>
        <span className="event-month">{event.month}</span>
      </div>
      <div className="event-info">
        <h3>{event.title}</h3>
        <p className="event-time">&#128336; {event.time}</p>
        <p className="event-location">&#128205; {event.location}</p>
        <p className="event-description">{event.description}</p>
      </div>
      <div className={`event-type-badge ${event.type}`}>{event.type}</div>
    </div>
  );
};

export default EventCard;
