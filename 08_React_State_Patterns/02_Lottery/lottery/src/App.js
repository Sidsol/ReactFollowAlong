import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './Ball';
import Lottery from './Lottery.js';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Mini Daily' numBalls={4} />
    </div>
  );
}

export default App;
