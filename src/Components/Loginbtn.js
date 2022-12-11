import React from 'react';
const Loginbtn = () => {
  const style = {
    backgroundColor: 'transparent',
    width: '9vh',
    height: '3vh',
    textAlign: 'center',
    fontFamily: 'insaniburger',
    color: 'rgb(80, 35, 20)',
    fontSize: '1.08em',
    marginTop: '-2px',
  };
  return (
    <p className="login-btn" style={style}>
      Login
    </p>
  );
};
export default Loginbtn;
