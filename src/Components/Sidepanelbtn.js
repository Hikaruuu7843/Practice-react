import React from 'react';
import { FaTimesCircle, FaCartPlus } from 'react-icons/fa';
import { useState } from 'react';
import Sidepanel from './Sidepanel';

const Sidepanelbtn = () => {
  var [show, setShow] = useState(false);
  const style = {
    marginTop: '-5px',
    cursor: 'pointer',
  };
  const onclick = () => {
    setShow((e) => {
      return e == false ? (show = true) : (show = false);
    });
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      {show ? (
        <FaTimesCircle onClick={onclick} size={25} style={style} />
      ) : (
        <FaCartPlus onClick={onclick} size={25} style={style} />
      )}
      <div className={show ? 'sidepanel active' : 'sidepanel'}>
        <Sidepanel />
      </div>
    </>
  );
};
export default Sidepanelbtn;
