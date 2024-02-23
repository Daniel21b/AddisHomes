import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#buy">Buy</a></li>
          <li><a href="#rent">Rent</a></li>
          <li><a href="#sell">Sell</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Welcome to  Real Estate Platform</h1>
        <p>Find your perfect home</p>
      </header>
      <section className="property-listing">
        <h2>Featured Properties</h2>
        <div className="properties">
          {/* Placeholder for property cards */}
          <div className="property-card">Property 1</div>
          <div className="property-card">Property 2</div>
          <div className="property-card">Property 3</div>
        </div>
      </section>
      <footer className="App-footer">
        <p>© 2024 Real Estate Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
