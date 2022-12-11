import React from 'react';
import Featuredcontents from './Components/Featuredcontents';
const Featured = () => {
  const images = [
    {
      image:
        'https://www.food4life.org.uk/multisite/wp-content/uploads/sites/2/2022/06/1109-x-627-christmas-burger-landscape-lightsjpg.jpg',
      id: '1',
    },
    {
      image:
        'https://datzrestaurantgroup.com/wp-content/uploads/2022/02/Philly-Burger-1.jpg',
      id: '2',
    },
    {
      image:
        'https://media.9news.com/assets/KUSA/images/575552175/575552175_750x422.png',
      id: '3',
    },
  ];
  return (
    <>
      <Featuredcontents images={images} key={images.id} />
    </>
  );
};

export default Featured;
