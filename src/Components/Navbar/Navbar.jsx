import "./Navbar.css";
import Button from "../Button/Button.jsx";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./logo3.png" alt="logo" />
      </div>
      <div className="nav-items">
        <a href="#rooms">Rooms</a>
        <a href="#gallery">Gallery</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="btns">
        <Button className="booking-com-btn" text="Booking.com" />
        <Button className="airbnb-btn" text="Airbnb" />
      </div>
    </nav>
  );
}
export default Navbar;
