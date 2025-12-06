import "./ReviewCard.css";
function ReviewCard(props) {
  const animationDelay = props.index * 0.15;
  const reverseDelay = (5 - props.index) * 0.1;

  return (
    <div
      className={`review-card ${
        props.isVisible ? "animate-in" : "animate-out"
      }`}
      style={{
        animationDelay: props.isVisible
          ? `${animationDelay}s`
          : `${reverseDelay}s`,
      }}
    >
      <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
      <h2 className="card-title">{props.title}</h2>
      <p className="card-content">{props.content}</p>
      <h3 className="card-author">{props.author}</h3>
      <p className="card-category-country">
        {props.category},{props.country}
      </p>
    </div>
  );
}
export default ReviewCard;
