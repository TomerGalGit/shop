import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext.js";
import "./LogIn.css";
import VideoLog from '../../Assets/CINEMATIC Surfing _ Fujifilm XT3 _ San Diego, CA.mp4'
import Navbar from "../Navbar/Navbar.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isLoggedIn, login, logout } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost/shop-project/backend/api.php",
        new URLSearchParams({
          username,
          password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true,
        }
      );

      console.log(response.data);

      if (response.data.message === "User logged in successfully.") {
        console.log("Login successful");
        login(); 
        navigate("/");
      } else {
        console.error(
          "Login failed. Please check your credentials.",
          response.data.debug_info
        );
        setErrorMessage("❌Incorrect Username or Password");
        setTimeout(() => {
          setErrorMessage("");
        }, 4000);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <Navbar />
    <div className="login">
      <video
        id="video-log"
        autoPlay
        muted
        loop
        src= {VideoLog}
        type="video/mp4"
      ></video>
      <h4 id="loginH">Log In</h4>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="reg-btns" id="login-btn" onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <button className="reg-btns" id="signup-btn" onClick={handleSignUpClick}>
        Sign Up
      </button>
    </div>
    </div>
  );
};

export default Login;
