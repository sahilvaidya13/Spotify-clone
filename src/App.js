import React from 'react';
import './style.css';
import Navbar from './components/Navbar/Navbar';
export default function App() {
  return (
    <div>
      <Navbar />
      <div class="sp-img">
        <h1 class="t1">Listening is</h1>
        <h1 class="t2">everything</h1>
        <h4 class="t3">
          Millions of songs and podcasts. No credit card needed.
        </h4>
        <button class="main-btn">GET SPOTIFY FREE</button>
      </div>
    </div>
  );
}
