import "./Footer.css";
import { FaPhone } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import ContactComponent from "./ContactComponent.jsx";
function Footer() {
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

        <div className="footer-right"></div>
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
