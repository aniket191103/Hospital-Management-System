import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="Hospital Banner" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who Are We?</h3>
        <p>
          Welcome to "We Do Care," a leading healthcare provider dedicated to delivering exceptional medical services with compassion and precision. Our hospital is a beacon of hope and healing, where we combine advanced medical technology with personalized patient care.
        </p>
        <p>
          Our mission is to offer comprehensive healthcare solutions that address the diverse needs of our community. From preventive care to complex surgeries, our skilled team of doctors, nurses, and specialists work together to provide top-notch medical care in a supportive and caring environment.
        </p>
        <p>
          At "We Do Care," we believe that healthcare is not just about treating illnesses but about promoting overall wellness. Our facilities are equipped with cutting-edge technology, and we utilize the latest medical practices to ensure the highest standards of care. We are committed to ongoing education and innovation to keep our services at the forefront of medical advancements.
        </p>
        <p>
          Our hospital is designed with your comfort and convenience in mind. We offer a range of services including emergency care, maternity care, surgical services, and outpatient care, all tailored to meet your individual needs. Our dedicated staff is here to guide you through every step of your healthcare journey, ensuring that you receive the attention and care you deserve.
        </p>
        <p>
          We understand that healthcare experiences can be stressful, and we strive to make your visit as smooth and positive as possible. Our focus is not only on treating medical conditions but also on providing emotional support and building lasting relationships with our patients and their families.
        </p>
        <p>
          Thank you for choosing "We Do Care." We are honored to be a part of your healthcare journey and look forward to serving you with excellence and compassion.
        </p>
      </div>
    </div>
  );
};

export default Biography;
