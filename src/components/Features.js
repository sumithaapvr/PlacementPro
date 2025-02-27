import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Features.css';
const Features = () => {
  return (
            <div>
              
              <nav className="navbar">
                <div className="navbar-container">
                  <div className="logo">
                    <h1>PlacementPro</h1>
                  </div>
                  <div className="auth-buttons">
                    <Link to="/"><h1>Home</h1></Link>
                    <Link to="/features"><h1>Features</h1></Link>
                    <h1>Drive</h1>
                    <h1>Contribute</h1>
                  </div>
                </div>
              </nav> 
              <div className="values-container">
                <div className="value-card-wrapper">
                  <div className="value-card">
                    <h3>Real-Time Experiences</h3>
                    <p>Access live updates on senior placement experiences.</p>
                  </div>
                  <div className="value-card">
                    <h3>Interview Strategies</h3>
                    <p>Learn key tips to ace each round of interviews.</p>
                  </div>
                  <div className="value-card">
                    <h3>Company-Specific Tips</h3>
                    <p>Get tailored advice for excelling at top companies.</p>
                  </div>
                  <div className="value-card">
                    <h3>Contribute Your Insights</h3>
                    <p>Share your own placement experience to help future candidates.</p>
                  </div>
                  <div className="value-card">
                    <h3>Mock Interviews & Student Feedback</h3>
                    <p>Practice with mock interviews and share your feedback to help others succeed.</p>
                  </div>
                </div>
              </div>
            </div>
  );
};

export default Features;

