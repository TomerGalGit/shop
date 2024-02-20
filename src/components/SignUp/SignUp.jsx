import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import VideoSign from "../../Assets/CINEMATIC Surfing _ Fujifilm XT3 _ San Diego, CA.mp4";
import Navbar from "../Navbar/Navbar";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    try {
      const params = new URLSearchParams();
      params.append("username", username);
      params.append("password", password);
      params.append("email", email);
      params.append("isAdmin", false);
      params.append("register", true);

      const response = await axios.post(
        "http://localhost/shop-project/backend/api.php",
        params,
        { withCredentials: true }
      );

      console.log(response.data);

      if (response.data.message) {
        if (response.data.message === "User registered successfully.") {
          console.log("User registered successfully");
          setSuccessMessage("✅ User registered successfully");

          setTimeout(() => {
            setSuccessMessage("");
            navigate("/log-in");
          }, 3000);
        } else {
          console.log("User already exists", response.data.message);
          setErrorMessage(`❌ ${response.data.message}`);
          setTimeout(() => {
            setErrorMessage("");
          }, 4000);
        }
      } else {
        console.log("Error registering user");
      }
    } catch (error) {
      console.error("Registration failed", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
    <div className="signup">
      <video
        id="video-log"
        autoPlay
        muted
        loop
        src={VideoSign}
        type="video/mp4"
      ></video>
      <h4 id="regH">Register</h4>
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
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={termsChecked}
          onChange={() => setTermsChecked(!termsChecked)}
        />
        <label>I have read and accepted the terms and conditions</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={newsletterChecked}
          onChange={() => setNewsletterChecked(!newsletterChecked)}
        />
        <label>Subscribe to our daily newsletter</label>
      </div>
      <button className="reg-btns" onClick={handleRegister}>
        Register
      </button>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
    </div>
  );
};

export default SignUp;