import "./Footer.css";
import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import ContactComponent from "./ContactComponent.jsx";
function Footer() {
  const [frameWidth, setFrameWidth] = useState(450);
  const [frameHeight, setFrameHeight] = useState(350);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 822) {
        setFrameWidth(300);
        setFrameHeight(250);
      } else if (window.innerWidth <= 392) {
        setFrameWidth(250);
        setFrameHeight(200);
      }
    };

    handleResize(); // Call once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const map = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.1318754743343!2d80.43540159999999!3d5.9765721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae115fc77d661c1%3A0xa15e8215fc691827!2sVilla%20Don%20Williams%20Weligama!5e0!3m2!1sen!2slk!4v1764931786909!5m2!1sen!2slk`;

  return (
    <footer className="footer">
      <div className="upper-footer">
        <h1 className="footer-title">Get in Touch</h1>
        <p className="footer-description">
          We are here to help you with any inquiries or support you may need.
        </p>
      </div>

      <div className="middle-footer">
        <div className="footer-left">
          <ContactComponent
            icon={FaPhone}
            title="Phone"
            content="+94 70 2222 676"
            action="Call Now >"
            buttonClass="callnow-btn"
          />
          <ContactComponent
            icon={FiMapPin}
            title="Location"
            content="Polwaththa Road,Weligama,Matara,Sri Lanka"
            action="Get Directions >"
            buttonClass="location-btn"
          />
        </div>

        <div className="footer-right">
          <iframe
            src={map}
            width={frameWidth}
            height={frameHeight}
            style={{
              border: 0,
              borderRadius: "15px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="lower-footer">
        <p className="footer-copyright">
          © 2025 Villa Don Williams | All rights reserved.
        </p>
        <p className="footer-designer">
          Designed & Developed by SenDev Solutions
        </p>
      </div>
    </footer>
  );
}
export default Footer;
