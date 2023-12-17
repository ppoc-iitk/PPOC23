// components/Navbar.js
import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <nav>
    <div className="logo"><img src="https://i.postimg.cc/gcCFhZKw/logo-2.png"/></div>
    <input type="checkbox" id="click" />
    <label htmlFor="click" className="menu-btn">
       <i><FontAwesomeIcon icon={faBars} /></i>
    </label>
    <ul>
      <li>
        <a className="active" href="#">
          Home
        </a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Events</a>
      </li>
      <li>
        <a href="#">Workshops</a>
      </li>
      <li>
        <a href="#">Past Speakers</a>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;