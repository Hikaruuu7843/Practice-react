import React from 'react';
import Sidepanelbtn from './Sidepanelbtn';
import Menu from './Menu';
import Navleft from './Navleft';
import Navright from './Navright';
import Loginbtn from './Loginbtn';
const Navcontent = () => {
  const lStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
    width: '44%',
    padding: '5vh 2px',
  };
  const rStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
    width: '45%',
    padding: '5vh 0',
  };
  const logoStyle = {
    width: '10%',
    backgroundColor: 'green',
  };
  const imgStyle = {
    width: '12vh',
    aspectRation: '3/2',
    objectFit: 'contain',
    mixBlendMode: 'color-burn',
  };
  return (
    <>
      <div className="left" style={lStyle}>
        <ul className="left-ul">
          <Sidepanelbtn />
          <Navleft text={<Menu />} />
          <Navleft text="Offers" />
          <Navleft text="Restaurants" />
          <Navleft text="Careers" />
        </ul>
      </div>

      <div className="logo">
        <img
          src="https://media.istockphoto.com/id/1038355632/vector/hamburger-icon.jpg?s=612x612&w=0&k=20&c=0lwYqfJxkss5KKmDPAFZRJ9_2-z3h1tRAfFyAKpVEYU="
          alt=""
          style={imgStyle}
        />
      </div>

      <div className="right" style={rStyle}>
        <ul className="right-ul">
          <Navright text="More" />
          <Navright text="For item availability" />
          <Navright text="Choose your location" />
          <Loginbtn />
        </ul>
      </div>
    </>
  );
};

export default Navcontent;
