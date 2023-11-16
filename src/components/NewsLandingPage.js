// Inside your NewsLandingPage component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NewsLandingPage = () => {
  const [newsList, setNewsList] = useState([
    // Initial dummy data
    { id: 1, title: 'Home', content: 'Content of the first news' },
    // Add more news articles here
  ]);

  return (
    <div>
      <h2>Home Section</h2>
      <p></p>

      <div className="box-container">
        <div className="box">
          <Link to="/page1">
            <img
              src="image1.jpg"
              alt="Milky Way Galaxy"
            />
          </Link>
          <h2>Milky Way Galaxy.</h2>
          <h4>Click on image for more information</h4>
          
        </div>
        <div className="box">
          <Link to="/page2">
            <img
              src="image2.jpg"
              alt="Solar System"
            />
          </Link>
          <h2>Solar System.</h2>
          <h4>Click on image for more information</h4>
        </div>
        <div className="box">
          <Link to="/page3">
            <img
              src="image3.jpg"
              alt="Universe Calendar"
            />
          </Link>
          <h2>Universe Calendar.</h2>
          <h4>Click on image for more information</h4>
        </div>
      </div>
    </div>
  );
};

export default NewsLandingPage;
