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
        <p className="logo-text">Villa Don Williams</p>
      </div>
      <div className="nav-items">
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
        <Button
          className="booking-com-btn"
          text="Booking.com"
          onClick={() =>
            window.open("https://www.booking.com/Share-YLIM4ob", "_blank")
          }
        />
        <Button
          className="airbnb-btn"
          text="Airbnb"
          onClick={() =>
            window.open(
              "https://www.airbnb.com/rooms/1546322398423397665?check_in=2026-01-29&check_out=2026-01-30&guests=1&adults=1&s=67&unique_share_id=79f4e870-9037-4275-a759-2464024c71ce",
              "_blank"
            )
          }
        />
      </div>
    </nav>
  );
}
export default Navbar;
