import React from 'react';
import { Link } from 'react-router-dom';

import './App.css'

const Welcome = () => {
  return (
    <Link to="/home">      
       <div className="card-container">
      <div className="neon-border">
        <div className="card-content">
          <h2>Tech recruiter looking</h2>
          <h4>For your new unicorn?...</h4>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Welcome;
