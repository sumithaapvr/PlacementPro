import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Features from './components/Features';
import './App.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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

             
              <div className="main-content">
                <div className="main-image"></div>
                <div className="content-section">
                  <h1>Chart Your Success with Placement Stories!</h1>
                  <p>
                  PlacementPro offers real-time senior experiences and genuine feedback <br /> 
                  for each interview round, helping you prepare for placements with confidence.
                  </p>
                  <div className="blinking-text">Gain real placement insights — your path to success starts with PlacementPro!</div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Router>
  );
};

export default App;

