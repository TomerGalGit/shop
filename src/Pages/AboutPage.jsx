import React from "react";
import "./AboutPage.css"; 
import Pic2 from "../Assets/Images/login (1).png";
import Pic1 from "../Assets/Images/reg.png";
import Pic3 from "../Assets/Images/shop.png";
import Pic4 from "../Assets/Images/img (3).webp";
import Navbar from "../components/Navbar/Navbar";

const AboutPage = () => {
  return (
      <div>
        <Navbar />
        <h1 id="AboutH">About The Project</h1>
        <p id="AboutT">Welcome to TomerGal SurfBoards, The site provides a platform for surfers to rent, buy and sell surfboards easily, just browse our board market <br></br>until you find something you like. If you did find a board click on it to reveal the owner details.
        See below how easy it is to start making money<br></br> from your dust collecting boards.</p>
    <div className="about-container">
      <div className="step">
        <img src={Pic1} alt="Step 1" className="step-image" />
        <div className="image-overlay">
          <p className="image-text">Create an account by clicking Sign Up.</p>
        </div>
      </div>
      <div className="arrow">
        <span>&rarr;</span>
      </div>
      <div className="step">
        <img src={Pic2} alt="Step 2" className="step-image" />
        <div className="image-overlay">
          <p className="image-text">
            After creating an account log in to your new account.
          </p>
        </div>
      </div>
      <div className="arrow">
        <span>&rarr;</span>
      </div>
      <div className="step">
        <img src={Pic3} alt="Step 3" className="step-image" />
        <div className="image-overlay">
          <p className="image-text">
            Explore other surfboards in the shop or post your own boards for
            sell or rent and make some money.
          </p>
        </div>
      </div>
      <div className="arrow">
        <span>&rarr;</span>
      </div>
      <div className="step">
        <img src={Pic4} alt="Step 4" className="step-image" />
        <div className="image-overlay">
          <p className="image-text">
            Go surfing with new boards while making money renting your own to
            others.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
