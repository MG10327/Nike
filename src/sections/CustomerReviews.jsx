import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className="font-palanquin text-center text-4xl font-bold">What Our <span className="text-coral-red">Customers</span> Say</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from out satisfied customers about their exceptional experiences with us.</p>

      <div className="mt-24 flex flex-1 justify-evenly">
        {reviews.map((review, index) =>
          <ReviewCard
            key={index} // This is one of those rare cases where passing the index as a key makes sense since everything in the review objects can be duplicated on a real live site. For example the same person can submit two reviews which would make these keys no longer unique.
            imgURL={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        )}
      </div>
    </section>
  );
};

export default CustomerReviews;