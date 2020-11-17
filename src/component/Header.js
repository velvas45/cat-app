import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Logo from "assets/img/logo.png";
import "assets/css/Header.css";

function Header() {
  return (
    <div className='header'>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Text>
          <img
            alt=''
            src={Logo}
            width='40'
            height='40'
            className='d-inline-block align-top'
          />
          Cat App
        </Navbar.Text>
      </Navbar>
    </div>
  );
}

export default Header;
