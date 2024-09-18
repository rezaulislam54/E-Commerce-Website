import { IoIosCheckmark } from "react-icons/io";

const ProductReview = ({ review }) => {
  const { author, description, posted_date } = review;
  return (
    <div className="border shadow-lg p-5 rounded-xl">
      <div className="flex justify-between">
        <div className="rating rating-sm">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold my-2"> {author}</h2>
          <h2 className="bg-[#01AB31] h-5 w-5 rounded-full flex items-center justify-center text-2xl text-white">
            <IoIosCheckmark />
          </h2>
        </div>
        <p className="flex-grow">{description}</p>
        <h1 className="mt-3">
          Posted on <span>{posted_date}</span>
        </h1>
      </div>
    </div>
  );
};

export default ProductReview;
