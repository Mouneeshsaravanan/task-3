import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar_title">
        Mouneesh Cart
        </div>
        <ul className="navbar_links">
          <li className="nav_link"><Link className="nav_links" to="/Home">Home</Link></li>
          <li className="nav_link"><Link className="nav_links" to="/products">Products</Link></li>
          <li className="nav_link"><Link className="nav_links" to="/cart">Cart</Link></li>
          <li className="nav_link"><Link className="nav_links" to="/Account">About</Link></li>
        </ul>
      </nav>
      {/* <p>Home Page</p> */}
    </div>
  );
};

export default Navbar;
