// App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewsLandingPage from './components/NewsLandingPage';
import NewsDetails from './components/NewsDetails';
import NewsSubmission from './components/NewsSubmission';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import LoginPage from './components/LoginPage';
import logo from './logo.ico';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" width="80" height="60" />
        </Link>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/submit-news">Submit News</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ContactUs">Contact Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/AboutUs">About Us</Link></li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/login">Register/Login</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<NewsLandingPage />} />
        <Route path="/submit-news" element={<NewsSubmission />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
