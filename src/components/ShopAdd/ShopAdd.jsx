import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ShopAdd.css";
import Navbar from "../Navbar/Navbar";
import BannerVid from "../../Assets/1,000 m2 Surf Shop Opens in Ericeira.mp4";

const ShopAdd = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    ownerName: "",
    ownerTel: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("picture", product.picture);
      formData.append("ownerName", product.ownerName);
      formData.append("ownerTel", product.ownerTel);
      
      formData.append("addProduct", "true");
  
      const response = await axios.post(
        "http://localhost/shop-project/backend/api.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log("Response from server:", response.data);
  
      navigate("/shop"); 
    } catch (error) {
      console.error("Error adding product:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };
  return (
    <div>
      <Navbar />
      <video
        id="banner-vid"
        autoPlay
        muted
        loop
        src={BannerVid}
        type="video/mp4"
      ></video>
      <div className="shop-add">
        <div className="status-indicator"></div>
        <h4 id="createH">Create a Listing</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Product Description:</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="price">Product Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="picture">Product Picture URL:</label>
            <input
              type="text"
              id="picture"
              name="picture"
              value={product.picture}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ownerName">Owner Name:</label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={product.ownerName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ownerTel">Owner Phone Number:</label>
            <input
              type="tel"
              id="ownerTel"
              name="ownerTel"
              value={product.ownerTel}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default ShopAdd;
