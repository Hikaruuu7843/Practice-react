import React from 'react';
import Navcontent from './Components/Navcontent';
const Navbar = () => {
  const style = {
    display: 'flex',
    backgroundColor: 'transparent',
    position: 'fixed',
    width: '100%',
    height: '12vh',
    justifyContent: 'space-between',
    border: '1px solid black',
    zIndex: '1',
    backgroundColor: 'rgb(245, 235, 220)',
  };
  return (
    <div className="navigation" style={style}>
      <Navcontent />
    </div>
  );
};
export default Navbar;
