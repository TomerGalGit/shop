// ShopPage.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./ShopPage.css";
import { useAuth } from "../../src/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

const ShopPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  const [products, setProducts] = useState([]);
  const [buyingProduct, setBuyingProduct] = useState(null);
  const [modalInfo, setModalInfo] = useState(null);
  const modalRef = useRef(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost/shop-project/backend/api.php"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const handleBuyNow = (product) => {
    setBuyingProduct(product);
    setModalInfo({
      name: product.name,
      price: product.price,
      description: product.description,
      ownerName: product.ownerName,
      ownerTel: product.ownerTel,
    });

    const modalContainer = document.querySelector(".products-container");
    if (modalContainer) {
      modalContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const contactSeller = () => {
    alert(`Calling ${modalInfo.ownerTel}`);
  };

  const closeModal = () => {
    setBuyingProduct(null);
    setModalInfo(null);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="product-list">
        <h4 id="ourBoards">Our Boards</h4>
        <div className="products-container">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="card">
                <img
                  src={product.picture}
                  alt={product.name}
                  className="product-image"
                />
                <div className="card__content">
                  <p className="card__title">{product.name}</p>
                  <p
                    className="card__description"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {product.description}
                  </p>
                  <p className="card__price">${product.price}</p>
                </div>
                <div
                  className="button"
                  onClick={() => handleBuyNow(product)}
                  data-tooltip={`Price: -$${product.price}`}
                >
                  <div className="button-wrapper">
                    <div className="text">View Details</div>
                    <span className="icon">
                      <svg
                        viewBox="0 0 16 16"
                        className="bi bi-cart2"
                        fill="currentColor"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
        {buyingProduct && (
          <div className="background-modal" ref={modalRef}>
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <img
                  src={buyingProduct.picture}
                  alt={buyingProduct.name}
                  className="modal-image"
                />
                <div className="modal-info">
                  <p className="modal-info__title">{modalInfo.name}</p>
                  <p
                    className="modal-info__description"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    <strong></strong> {modalInfo.description}
                  </p>
                  <p className="modal-info__owner">
                    <strong>Owner:</strong> {modalInfo.ownerName}
                  </p>
                  <p className="modal-info__owner-tel">
                    <strong>Contact:</strong> {modalInfo.ownerTel}
                  </p>
                  <p className="modal-info__price">
                    <strong>${modalInfo.price}</strong>
                  </p>
                  <button className="cta" onClick={contactSeller}>
                    <span className="hover-underline-animation">
                      {" "}
                      Contact Seller{" "}
                    </span>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="10"
                      viewBox="0 0 46 16"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        transform="translate(30)"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;