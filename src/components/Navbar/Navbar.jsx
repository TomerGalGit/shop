
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="vertical-navbar">
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/about" className="navbar-item">
        About
      </Link>
      <Link to="/log-in" className="navbar-item">
        Log In
      </Link>
      <Link to="/sign-up" className="navbar-item">
        Sign Up
      </Link>

      <Link to="/shop" className="navbar-item">
        Shop
      </Link>
      <Link to="https://www.instagram.com" className="navbar-item">
        <img
          src="../Assets/Images/instaIconGrey.png"
          id="navInsta"
          alt="Instagram Icon"
        />
      </Link>
      <Link to="https://www.twitter.com">
        <img
          src="../Assets/Images/twitterIconGrey.png"
          id="navTwitter"
          alt="twitter Icon"
        />
      </Link>
      <Link to="/shop-add" className="navbar-item">
        + Add Listing
      </Link>
    </div>
  );
};

export default Navbar;
