import ReviewCard from "./ReviewCard.jsx";
import "./Reviews.css";

function Reviews() {
  const reviewData = [
    {
      title: "Best stay ever !!! Can’t recommend more",
      content:
        "Everything!! The place was incredibly big with all the we needed- a kitchen and great facilities. We didn’t miss a thing. Good shower with really hot water. But the highlight was the treatment we got- every little thing we needed we got immediately with great care, presents and the best host ever. Definitely the best treatment I ever got at a homestay\\hostel. Planned to stay for 2 nights but enjoyed so much we stayed for 5. Also, amazing price and value for money. One of our best stays in Sri Lanka, will definitely come back!!!",
      author: "Anna S.",
      category: "Couple",
      country: "Poland",
    },
    {
      title: "Amazing stay at Villa Don Williams",
      content:
        "We had an amazing stay at Villa Don Williams! The villa is beautiful, spacious, and well-equipped with everything we needed for a comfortable stay. The staff were incredibly friendly and attentive, making us feel right at home. The location is perfect, with stunning views and easy access to nearby attractions. We especially enjoyed the delicious meals prepared by the villa's chef. Overall, it was a fantastic experience, and we would highly recommend Villa Don Williams to anyone looking for a relaxing and luxurious getaway.",
      author: "John D.",
      category: "Family",
      country: "USA",
    },
    {
      title: "A perfect getaway at Villa Don Williams",
      content:
        "The villa provided everything we needed for a relaxing and enjoyable vacation. The staff were attentive and made us feel at home. We loved the peaceful surroundings and the beautiful views. Highly recommend for anyone looking to unwind and recharge.",
      author: "Emily R.",
      category: "Solo Traveler",
      country: "Canada",
    },
  ];
  return (
    <section className="review" id="review">
      <h1 className="review-title">Guest Voices</h1>
      <h5 className="review-desc">
        Travelers who stayed here share their thoughts
      </h5>
      <div className="review-cards-carousel">
        {reviewData.map((review, index) => (
          <ReviewCard
            key={index}
            title={review.title}
            content={review.content}
            author={review.author}
            category={review.category}
            country={review.country}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
