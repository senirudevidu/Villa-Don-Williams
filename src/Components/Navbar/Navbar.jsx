import { useState, useEffect } from "react";
import "./Navbar.css";
import Button from "../Button/Button.jsx";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src="./logo3.png" alt="logo" />
      </div>
      <div className="nav-items">
        <a href="#rooms">Rooms</a>
        <a href="#gallery">Gallery</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className={`nav-items mobile ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#rooms" onClick={() => setIsMobileMenuOpen(false)}>
          Rooms
        </a>
        <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>
          Gallery
        </a>
        <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>
          Reviews
        </a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
          Contact Us
        </a>
      </div>
      <div className="btns">
        <Button className="booking-com-btn" text="Booking.com" />
        <Button className="airbnb-btn" text="Airbnb" />
      </div>
    </nav>
  );
}
export default Navbar;
