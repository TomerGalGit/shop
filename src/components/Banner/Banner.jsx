import React, { useState, useEffect } from "react";
import './Banner.css'

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://wallpapers.com/images/featured/surfing-ufbtbg8ygpasle68.jpg",
    "https://png.pngtree.com/background/20230519/original/pngtree-an-island-of-surfboards-standing-on-a-beach-picture-image_2656883.jpg",
    "https://wallpapercosmos.com/w/full/4/7/e/1110359-3072x2048-desktop-hd-surfing-wallpaper.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="banner-slider">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
    </div>
  );
};

export default Banner;
