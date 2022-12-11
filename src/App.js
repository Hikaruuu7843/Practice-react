import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Featured from './Featured';
export default function App() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="featured">
        <Featured />
      </div>
    </>
  );
}
