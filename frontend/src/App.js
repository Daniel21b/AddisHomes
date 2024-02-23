import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging, faUserPlus } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-right">
          <FontAwesomeIcon icon={faUserPlus} className="icon register-icon" />
        </div>
      </header>
      <div className="background-image">
        <div className="search-container">
          <h1>Real Estate, Apartments, Houses</h1>
          <div className="search-box">
            <input type="text" placeholder="What?" />
            <input type="text" placeholder="Where?" />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="construction-notice">
          <FontAwesomeIcon icon={faPersonDigging} className="construction-icon" />
          <p>Addis Homes  Site is still Under Construction - We'll be operational soon. Stay tuned!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
