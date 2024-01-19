import ReviewCard from "../Components/ReviewCard"
import { reviews } from "../Constants"


const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center font-bold text-4xl">
                What Our
                <span className="text-coral-red"> Customers </span>
                Say?
            </h3>

            <p className="info-text m-auto mt-4 max-w-lg text-center ">Discover what our customers are saying! Read real, heartfelt reviews about our products and experience firsthand the satisfaction that comes with choosing quality and style.</p>

            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.customerName}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews