import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export const HomePage = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <section>
      <div id="page1">
        <div id="menu">
          <Link to="/" className="menu-item">
            Home
          </Link>
          {isLoggedIn ? (
            <button onClick={logout} className="logout menu-item">
              Log Out
            </button>
          ) : (
            <Link to="/log-in" className="loginbtn menu-item">
              Log In
            </Link>
          )}
          <Link to="/shop" className="menu-item">
            Shop
          </Link>
        </div>

        <div id="social-icons">
          <Link to="https://www.twitter.com">
            <img src="../Assets/Images/twitterIcon.png" alt="twitter Icon" />
          </Link>
          <Link to="https://www.instagram.com">
            <img src="../Assets/Images/instaIcon.png" alt="Instagram Icon" />
          </Link>
        </div>
        <video
          id="background-video"
          autoPlay
          loop
          muted
          src="../Assets/Aerial view of sand beach. Top view sea waves. Drone footage.mp4"
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className="image-container">
          <img
            src="../Assets/Images/New Project (4).png"
            alt="Surfboard"
            id="logo-board"
          />
        </div>
        <h1>Tomer Gal</h1>
        <h2>Surf Boards</h2>
      </div>
    </section>
  );
};

export default HomePage;
