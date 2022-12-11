import React from 'react';
import { useState } from 'react';
const Menucontent = ({ text }) => {
  const [pop, setPop] = useState(false);
  const menus = [
    {
      id: '1',
      label: 'First Burger',
    },
    {
      id: '2',
      label: 'Second Burger',
    },
    {
      id: '3',
      label: 'Fifth Burger',
    },
    {
      id: '4',
      label: 'Fourth Burger',
    },
    {
      id: '5',
      label: 'Fifth Burger',
    },
    {
      id: '6',
      label: 'Sixth Burger',
    },
  ];
  const style = {
    width: '95vh',
    height: '50vh',
    backgroundColor: 'red',
    position: 'absolute',
    top: '27vh',
    left: '54vh',
  };
  return (
    <>
      <div>
        {menus.map((menu) => (
          <li>{menu.label}</li>
        ))}
      </div>
      <section style={style}>
        <div>
          <h3>Test</h3>
        </div>
      </section>
    </>
  );
};
export default Menucontent;
