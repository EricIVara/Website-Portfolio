// src/App.js
import React from 'react';
import './global.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection/MainSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
    </div>
  );
}

export default App;
