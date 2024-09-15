// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import chapter components from the `chapters` folder
import Chapter1 from './chapters/Chapter1';
// import Chapter2 from './chapters/Chapter2';
// import Chapter3 from './chapters/Chapter3';

const App = () => {
  return (
    <Router>
      <div className="hacker-container">
        <h1>The Sentinel of the Cyber Castle</h1>
        <div className="links">
          <Link to="/chapter1">> Chapter 1</Link>
          {/* <Link to="/chapter2">> Chapter 2</Link>
          <Link to="/chapter3">> Chapter 3</Link> */}
        </div>

        <Routes>
          <Route path="/chapter1" element={<Chapter1 />} />
          {/* <Route path="/chapter2" element={<Chapter2 />} />
          <Route path="/chapter3" element={<Chapter3 />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;