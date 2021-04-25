import React from 'react';
import headerImg from '../../assets/cover/header-img.png';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Samantha Brown</h1>
      <img src={headerImg} alt="background"></img>
      {props.children}
    </header>
  );
}

export default Header;
