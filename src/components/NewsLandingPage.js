import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsLandingPage = () => {
  const [newsList, setNewsList] = useState([
    // Initial dummy data
    { id: 1, title: 'Home', content: 'Content of the first news' },
    // Add more news articles here
  ]);

  const styles = {
    container: {
      textAlign: 'center',
      color: 'white',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    boxContent: {
      marginBottom: '10px',
      textAlign: 'center', // Center the text within the box
    },
    boxImage: {
      width: '100%', // Set width to 100% to ensure the image takes the full width of the box
      maxWidth: '600px', // Adjust the maximum width of the image as needed
      height: 'auto',
      borderRadius: '8px',
      objectFit: 'cover',
    },
  };

  return (
    <div className="news-landing-page">
      <img src="background2.jpg" alt="background" className="background-image" />
      <div className="content">
        <h1 style={styles.container}>Astro Hub</h1>

        <div className="box-container">
          {/* Milky Way Galaxy Box */}
          <div style={styles.box}>
            <div style={styles.boxContent}>
              <h2>Milky Way Galaxy</h2>
              <Link to="/page1">
                <img
                  src="image1.jpg"
                  alt="Milky Way Galaxy"
                  className="box-image"
                  style={styles.boxImage}
                />
              </Link>
              <h4>Click on the image for more information</h4>
            </div>
            <div className="box-info">
              {/* Milky Way Galaxy Content */}
              <p>
                The Milky Way is a barred spiral galaxy that includes the Solar
                System. It is estimated to contain 100-400 billion stars and at
                least that number of planets. The galaxy’s appearance from Earth
                is a hazy band of light formed from stars that cannot be
                individually distinguished by the naked eye. The term Milky Way
                is a translation of the Latin via lactea, from the Greek γαλαξίας
                κύκλος (galaxías kýklos), meaning “milky circle.” The Milky Way
                has a dark matter component and several satellite galaxies. It is
                part of the Local Group of galaxies and the Virgo Supercluster.
                The Galactic Center of the Milky Way is located at a radius of
                about 27,000 light-years from the Solar System, on the inner
                edge of the Orion Arm, one of the spiral-shaped concentrations
                of gas and dust. The Milky Way is approximately 100,000
                light-years in diameter.
              </p>
            </div>
          </div>

          {/* Solar System Box */}
          <div style={styles.box}>
            <div style={styles.boxContent}>
              <h2>Solar System</h2>
              <Link to="/page2">
                <img
                  src="image2.jpg"
                  alt="Solar System"
                  className="box-image"
                  style={styles.boxImage}
                />
              </Link>
              <h4>Click on the image for more information</h4>
            </div>
            <div className="box-info">
              {/* Solar System Content */}
              <p>
                The universe is a vast expanse containing all of space, time,
                matter, and energy. It encompasses galaxies, stars, planets,
                moons, and various celestial bodies. Our solar system is a tiny
                part of this immense cosmos, consisting of the Sun, eight
                planets, their moons, and other objects. Each planet in our
                solar system, including Earth, has distinct characteristics,
                compositions, and unique features. For instance, Earth is the
                only known planet supporting life, while others like Jupiter and
                Saturn are gas giants with prominent ring systems. The study of
                the universe and planets involves disciplines such as astronomy
                and astrophysics, unlocking the mysteries of our cosmic
                surroundings and expanding our understanding of the cosmos.
              </p>
            </div>
          </div>

          {/* Universe Calendar Box */}
          <div style={styles.box}>
            <div style={styles.boxContent}>
              <h2>Universe Calendar</h2>
              <img
                src="universe-calendar.jpg"
                alt="Universe Calendar"
                className="box-image"
                style={styles.boxImage}
              />
              <h4>Explore events and celestial phenomena</h4>
            </div>
            <div className="box-info">
              {/* Universe Calendar Content */}
              <p>
                Stay tuned for our Universe Calendar, where you can explore
                upcoming celestial events, planetary alignments, and other
                astronomical phenomena. Discover the wonders of the cosmos and
                mark your calendar for captivating moments in space!
              </p>
              <Link to="https://www.scienceabc.com/nature/universe/cosmic-calendar-universe-365-big-bang-compress-history.html">
                Explore Universe Calendar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLandingPage;
