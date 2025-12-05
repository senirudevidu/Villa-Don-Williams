import "./DirectCall.css";
import DroneImg from "../../assets/drone.png";
import Button from "../Button/Button.jsx";

function DirectCall() {
  return (
    <section className="direct-call-section">
      <div className="direct-container">
        <div className="left-container">
          <h2 className="direct-call-title">Your Stay Awaits</h2>
          <p className="direct-call-desc">
            Enjoy exclusive benefits and the best rates by booking directly
            through our website or contacting us via phone.
          </p>
          <div className="direct-call-buttons">
            <Button className="direct-booking-btn" text="Book Now" />
            <Button className="contact-us-btn" text="Call" />
          </div>
        </div>

        <div className="right-container">
          <img src={DroneImg} alt="Drone" />
        </div>
      </div>
    </section>
  );
}
export default DirectCall;
