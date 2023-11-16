import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Astrohub</h1>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Mission Statement</h2>
        <p style={styles.paragraph}>
          Astrohub is dedicated to bringing the wonders of space closer to everyone. 
          Our mission is to provide accessible, accurate, and engaging information 
          about space exploration, astronomy, and cosmology. We strive to inspire 
          our audience with the latest news and insights while fostering a community 
          passionate about the mysteries of the universe.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Key Features</h2>
        <ul style={styles.list}>
          <li>Latest News on Space Exploration: Stay updated with the most recent developments in space travel and exploration.</li>
          <li>Interactive Astronomy Guides: Engaging content that makes learning about the cosmos fun and easy.</li>
          <li>Deep Dives into Cosmology: Explore the origins and structure of the universe with in-depth articles.</li>
          <li>User-Friendly Interface: A seamless browsing experience, ensuring information is always at your fingertips.</li>
          <li>Community Engagement: Connect with fellow space enthusiasts through forums and online events.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Our Team</h2>
        <ul style={styles.list}>
          <li style={styles.bold}>Moises - Project Manager</li>
          <li style={styles.bold}>Devanshi - Frontend Developer</li>
          <li style={styles.bold}>Anand - Frontend Developer</li>
          <li style={styles.bold}>Arshil - Backend Developer</li>
          <li style={styles.bold}>Shivam - Frontend Developer</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundImage: 'url("https://wallpapertag.com/wallpaper/full/1/a/1/350829-widescreen-website-background-1920x1080-windows-xp.jpg")', // Replace with the URL of your background image
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the alpha value for background transparency
  },
  title: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #555',
    paddingBottom: '10px',
  },
  section: {
    marginBottom: '40px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '20px',
  },
  subTitle: {
    fontSize: '24px',
    color: '#555',
    marginBottom: '15px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#777',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#777',
  },
  bold: {
    fontWeight: 'bold',
  },
};

export default AboutUs;
