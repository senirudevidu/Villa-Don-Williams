import "./ContactComponent.css";
import Button from "../Button/Button";

function ContactComponent(props) {
  const Icon = props.icon;

  return (
    <div className="contact-component">
      <Icon className="contact-icon" />
      <div className="contact-details">
        <h2 className="contact-title">{props.title}</h2>
        <p className="contact-content">{props.content}</p>
      </div>
      <Button text={props.action} className={props.buttonClass} />
    </div>
  );
}

export default ContactComponent;
