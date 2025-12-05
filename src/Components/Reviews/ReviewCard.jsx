import "./ReviewCard.css";
function ReviewCard(props) {
  return (
    <div className="review-card">
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
