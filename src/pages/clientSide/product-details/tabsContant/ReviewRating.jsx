import ProductReview from "../ProductReview";

const ReviewRating = ({ product_review }) => {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h2>
          <span className="text-[24px] font-bold mr-1">All Reviews</span> (
          {product_review.length})
        </h2>
        <div className="flex items-center">
          <h2>
            <ul className="menu menu-horizontal px-1">
              <li>
                <details className="z-30">
                  <summary>Shope</summary>
                  <ul>
                    <li>
                      <a>t-Shirt</a>
                    </li>
                    <li>
                      <a>Shirts</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </h2>
          <button className="bg-[#000000] text-white rounded-full px-5 py-1 text-[16px]">
            Write a Review
          </button>
        </div>
      </div>

      {/* review section */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {product_review?.map((review, index) => (
          <ProductReview key={index} review={review}></ProductReview>
        ))}
      </div>

      <div className="text-center my-6">
        <button className="border py-2 px-6 rounded-full shadow-sm ">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewRating;