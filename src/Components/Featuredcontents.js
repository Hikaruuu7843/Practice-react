import React from 'react';
import { useState } from 'react';
import {
  FaCircle,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
const Featuredcontents = ({ images }) => {
  const [slide, setSlide] = useState(0);
  const length = images.length;

  const rightClick = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
    console.log(slide);
  };
  const leftClick = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
    console.log(slide);
  };
  const goIndex = (goToIndex) => {
    setSlide(goToIndex);
  };
  if (!Array.isArray(images) || images.length <= 0) return null;
  const styleDots = {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
    width: '12vh',
    margin: '8px auto',
  };
  const dots = {
    fontSize: '0.6em',
    color: 'rgb(80, 35, 20)',
    opacity: '0.9',
    cursor: 'pointer',
  };
  const styleArrow = {
    color: 'rgb(80, 35, 20)',
    marginTop: '17%',
    cursor: 'pointer',
  };
  return (
    <>
      <section className="content-images">
        <FaArrowAltCircleLeft
          size={30}
          style={styleArrow}
          onClick={leftClick}
          className="arrow"
        />
        {images.map((imgs, index) => {
          return (
            <div
              className={index === slide ? 'slide active' : 'slide'}
              key={index}
            >
              {index === slide && (
                <motion.img
                  src={imgs.image}
                  alt=""
                  initial={{ x: 25, opacity: 0.8 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="featured-images"
                />
              )}
            </div>
          );
        })}
        <FaArrowAltCircleRight
          size={30}
          style={styleArrow}
          onClick={rightClick}
          className="arrow"
        />
      </section>
      <div className="dots" style={styleDots}>
        {images.map((current, setCurrent) => (
          <div key={setCurrent} onClick={() => goIndex(setCurrent)}>
            <FaCircle style={dots} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Featuredcontents;
