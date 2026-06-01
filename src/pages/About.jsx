import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1>About Us</h1>
          <p>Know our story, our pastor, and our vision</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="about-story">
            <p>Rehoboth Philadelphia Assembly was established with a vision to spread the Gospel of Jesus Christ and build a community of believers who worship God in spirit and truth. Over the years, God has been faithful in growing this ministry from a small prayer group to a thriving church family with branch churches in Erode and Thirumangalam.</p>
            <p>Our church believes in the full gospel &#8212; the saving, healing, baptizing, and soon-coming King Jesus Christ. We are committed to making disciples of all nations and building the Kingdom of God through prayer, worship, and service.</p>
          </div>
        </div>
      </section>

      <section className="section pastor-section">
        <div className="container">
          <h2 className="section-title">Our Pastor & Family</h2>
          <div className="pastor-grid">
            <div className="pastor-image">
              <div className="pastor-placeholder">
                <span>&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;</span>
                <p>Pastor & Family</p>
              </div>
            </div>
            <div className="pastor-info">
              <h3>Senior Pastor</h3>
              <p className="pastor-title">Rehoboth Philadelphia Assembly</p>
              <p className="pastor-bio">Our Senior Pastor has been serving the Lord faithfully for many years. With a deep passion for the Word of God and a heart for the lost, he leads the congregation with wisdom and compassion. His vision is to see lives transformed by the power of the Gospel and to raise up leaders for the Kingdom of God.</p>
              <p className="pastor-bio">Together with his family, they lead the church with dedication, overseeing the main church and branch churches in Erode and Thirumangalam. Their commitment to prayer, discipleship, and community outreach has been the foundation of the church growth.</p>
              <div className="pastor-verse">
                <blockquote>&#8220;For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.&#8221; &#8212; Jeremiah 29:11</blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-section">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-card"><h3>&#127919; Our Vision</h3><p>To be a Spirit-filled church that transforms lives, builds families, and impacts communities for the glory of God.</p></div>
            <div className="vision-card"><h3>&#128591; Our Mission</h3><p>To worship God, win the lost, disciple believers, and send workers into the harvest field through the power of the Holy Spirit.</p></div>
            <div className="vision-card"><h3>&#128214; Our Beliefs</h3><p>We believe in the Bible as the inspired Word of God, salvation through Jesus Christ, baptism in the Holy Spirit, divine healing, and the second coming of Christ.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
