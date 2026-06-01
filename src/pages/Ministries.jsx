import React from 'react';
import MinistryCard from '../components/MinistryCard';
import './Ministries.css';

const Ministries = () => {
  const ministries = [
    { icon: '\u{1F3B5}', title: 'Worship Ministry', description: 'Leading the congregation in praise and worship through music, choir, and creative arts.', leader: 'Worship Team', schedule: 'Practice: Saturdays 4 PM' },
    { icon: '\u{1F466}', title: 'Children Ministry', description: 'Nurturing young hearts with Bible stories, activities, and age-appropriate spiritual formation.', leader: 'Children Team', schedule: 'Sundays 9:30 AM' },
    { icon: '\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}', title: 'Youth Ministry', description: 'Empowering young people to live for Christ through fellowship, discipleship, and outreach.', leader: 'Youth Team', schedule: 'Fridays 6:30 PM' },
    { icon: '\u{1F469}', title: 'Women Ministry', description: 'Encouraging and equipping women to grow in faith, prayer, and service to God and community.', leader: 'Women Team', schedule: 'Saturdays 5:00 PM' },
    { icon: '\u{1F468}', title: 'Men Fellowship', description: 'Building godly men through Bible study, accountability, prayer, and community service.', leader: 'Men Team', schedule: '2nd Sunday Monthly' },
    { icon: '\u{1F64F}', title: 'Prayer Ministry', description: 'Interceding for the church, community, and nations through organized prayer chains and meetings.', leader: 'Prayer Team', schedule: 'Daily 5:30 AM' },
    { icon: '\u{1F4D6}', title: 'Bible Study Ministry', description: 'In-depth study of Gods Word through small groups, seminars, and teaching sessions.', leader: 'Teaching Team', schedule: 'Wednesdays 7 PM' },
    { icon: '\u{1F30D}', title: 'Missions and Evangelism', description: 'Reaching the unreached through street evangelism, village ministry, and supporting missionaries.', leader: 'Missions Team', schedule: 'Monthly Outreach' },
    { icon: '\u{1F91D}', title: 'Social Service Ministry', description: 'Serving the community through food distribution, medical camps, education support, and disaster relief.', leader: 'Service Team', schedule: 'As Scheduled' },
    { icon: '\u{1F4FA}', title: 'Media Ministry', description: 'Managing live streaming, YouTube channel, social media, and audio/video production for the church.', leader: 'Media Team', schedule: 'All Services' },
    { icon: '\u{1F3EB}', title: 'Sunday School Ministry', description: 'Systematic Bible teaching for all age groups with trained teachers and structured curriculum.', leader: 'Sunday School Team', schedule: 'Sundays 9:30 AM' },
    { icon: '\u{1F492}', title: 'Marriage and Family Ministry', description: 'Strengthening marriages and families through counseling, retreats, and fellowship programs.', leader: 'Family Team', schedule: 'Quarterly Retreats' }
  ];

  return (
    <div className="ministries-page">
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1>Our Ministries</h1>
          <p>Serving God and community through various ministries</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Ministry Areas</h2>
          <p className="section-subtitle">There is a place for everyone to serve and grow</p>
          <div className="grid-3">
            {ministries.map((ministry, index) => (
              <MinistryCard key={index} ministry={ministry} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;
