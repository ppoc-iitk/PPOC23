import React from "react";
import './Navbar2.css';
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Blogs</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
