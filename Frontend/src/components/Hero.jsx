import React from "react";

const Hero = ({ tittle, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{tittle}</h1>
        <p>
          At "We Do Care," we believe in creating a nurturing environment where
          every patient receives the highest quality care and attention. Our
          commitment to compassionate and personalized healthcare begins the
          moment you walk through our doors.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} className="animated-image" />
        <span>
          <img src="/Vector.png" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
