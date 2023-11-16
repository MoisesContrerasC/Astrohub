import React from 'react';
import { useLocation } from 'react-router-dom';

const NewsDetails = () => {
  const location = useLocation();
  const news = location.state.news; // Passed from NewsLandingPage

  return (
    <div>
      {news ? (
        <>
          <h1>{news.title}</h1>
          <p>{news.content}</p>
        </>
      ) : (
        <p>News article not found.</p>
      )}
    </div>
  );
};

export default NewsDetails;
