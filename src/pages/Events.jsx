import React from 'react';
import EventCard from '../components/EventCard';
import './Events.css';

const Events = () => {
  const weeklyEvents = [
    { day: 'SUN', month: '', title: 'Sunday Worship Service (First)', time: '8:00 AM - 9:30 AM', location: 'Main Sanctuary', description: 'Morning worship with praise, prayer, and the Word of God.', type: 'weekly' },
    { day: 'SUN', month: '', title: 'Sunday School', time: '9:30 AM - 10:30 AM', location: 'Classrooms', description: 'Age-wise Bible study classes for children, youth, and adults.', type: 'weekly' },
    { day: 'SUN', month: '', title: 'Sunday Worship Service (Second)', time: '10:30 AM - 12:30 PM', location: 'Main Sanctuary', description: 'Main worship service with choir, sermon, and communion (first Sunday).', type: 'weekly' },
    { day: 'WED', month: '', title: 'Midweek Prayer Meeting', time: '7:00 PM - 8:30 PM', location: 'Prayer Hall', description: 'Corporate prayer and intercession for the church and nation.', type: 'weekly' },
    { day: 'FRI', month: '', title: 'Youth Fellowship', time: '6:30 PM - 8:00 PM', location: 'Youth Hall', description: 'Worship, games, Bible study, and fellowship for young people.', type: 'weekly' },
    { day: 'SAT', month: '', title: 'Women Fellowship', time: '5:00 PM - 6:30 PM', location: 'Fellowship Hall', description: 'Prayer, sharing, and encouragement for women of the church.', type: 'weekly' },
    { day: 'SAT', month: '', title: 'Fasting Prayer (1st Saturday)', time: '10:00 AM - 1:00 PM', location: 'Main Sanctuary', description: 'Monthly fasting and prayer (First Saturday of every month).', type: 'monthly' },
  ];

  const specialEvents = [
    { day: '15', month: 'JUN', title: 'Vacation Bible School', time: '9:00 AM - 12:00 PM', location: 'Church Campus', description: 'A week-long Bible camp for children ages 5-14 with games, crafts, and Bible stories.', type: 'special' },
    { day: '20', month: 'JUL', title: 'Youth Camp 2026', time: 'Full Day', location: 'Camp Grounds', description: 'Annual youth retreat with worship, workshops, and outdoor activities.', type: 'annual' },
    { day: '10', month: 'AUG', title: 'Church Anniversary', time: '9:00 AM onwards', location: 'Main Sanctuary', description: 'Celebrating years of Gods faithfulness with special guests and worship.', type: 'annual' },
    { day: '25', month: 'DEC', title: 'Christmas Celebration', time: '6:00 PM', location: 'Main Sanctuary', description: 'Christmas Eve service with carols, drama, and celebration of Christs birth.', type: 'annual' },
  ];

  return (
    <div className="events-page">
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1>Events and Timings</h1>
          <p>Join us for worship, prayer, and fellowship</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Weekly Services</h2>
          <p className="section-subtitle">Our regular weekly gatherings</p>
          <div className="events-list">
            {weeklyEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section special-events-section">
        <div className="container">
          <h2 className="section-title">Upcoming Special Events</h2>
          <p className="section-subtitle">Mark your calendars for these special occasions</p>
          <div className="events-list">
            {specialEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
