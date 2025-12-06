import "./LocationCard.css";

function LocationCard(props) {
  const Icon = props.icon;
  return (
    <div className="location-card">
      <div className="card-icon">
        <Icon size={50} />
      </div>
      <h4 className="card-heading">{props.heading}</h4>
      <h2 className="card-title">{props.title}</h2>
      <p className="card-description">{props.description}</p>
    </div>
  );
}
export default LocationCard;
