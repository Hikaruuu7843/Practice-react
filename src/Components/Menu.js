import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Menucontent from './Menucontent';
const Menu = ({ display, showDisplay }) => {
  var [show, setShow] = useState(false);
  const menuHover = (e) => {
    setShow(show == false ? (show = true) : (show = true));
    e.target.style.color = 'rgb(136, 53, 26)';
    showDisplay(display == true ? (display = false) : (display = false));
  };
  const menuOut = (e) => {
    setShow(show == true ? (show = false) : (show = false));
    e.target.style.color = 'rgb(80, 35, 20)';
  };

  const selectHover = (e) => {
    setShow(show == false ? (show = true) : (show = true));
  };
  const selectOut = (e) => {
    setShow(show == true ? (show = false) : (show = false));
  };
  return (
    <>
      <div>
        <p
          onMouseOver={menuHover}
          onMouseOut={menuOut}
          style={{ backgroundColor: 'transparent', height: '7vh' }}
        >
          Menu
        </p>
      </div>
      <section
        className={show == false ? 'section' : 'section active'}
        onMouseOver={selectHover}
        onMouseOut={selectOut}
      >
        <div style={{ width: '20vh', textAlign: 'center', paddingTop: '10px' }}>
          <label style={{ color: 'white' }}>Burgers</label>
          <ul className="menu-content">
            <Menucontent />
          </ul>
        </div>
        <div style={{ width: '20vh', textAlign: 'center', paddingTop: '10px' }}>
          <label style={{ color: 'white' }}>Burgers</label>
          <ul className="menu-content">
            <Menucontent />
          </ul>
        </div>
        <div style={{ width: '20vh', textAlign: 'center', paddingTop: '10px' }}>
          <label style={{ color: 'white' }}>Burgers</label>
          <ul className="menu-content">
            <Menucontent />
          </ul>
        </div>
        <div style={{ width: '20vh', textAlign: 'center', paddingTop: '10px' }}>
          <label style={{ color: 'white' }}>Burgers</label>
          <ul className="menu-content">
            <Menucontent />
          </ul>
        </div>
        <div style={{ width: '20vh', textAlign: 'center', paddingTop: '10px' }}>
          <label style={{ color: 'white' }}>Burgers</label>
          <ul className="menu-content">
            <Menucontent />
          </ul>
        </div>
      </section>
    </>
  );
};
export default Menu;
