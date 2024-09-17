import { Helmet } from 'react-helmet-async'
import { FaCircleCheck } from "react-icons/fa6";

const ProductDetails = () => {
  return (
    <div className="container mx-auto md:px-10 my-12">
      <Helmet>
        <title>SHOP.CO | Product Details</title>
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-5  ">
        <div className="space-y-4 *:w-full *:h-[142px] ">
          <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726501766/image_1_dnex7v.png" />
          <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726511284/Frame_32_yzi1mo.png" />
          <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726511359/Frame_33_yevjec.png" />
        </div>

        <div className="col-span-3">
          <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726501766/image_1_dnex7v.png" />
        </div>

        <div className="col-span-5 ml-4">
          <h2 className="text-5xl font-bold mb-2">One Life Graphic T-shirt</h2>
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
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span className="ml-2">4.5/5</span>
          <h2 className="text-2xl space-x-3 font-bold my-2">
            $260{" "}
            <span className="line-through ml-1 text-[#0000004D]">$300</span>
            <span className="bg-[#FF33331A] rounded-full px-2 text-[16px]">
              -40%
            </span>
          </h2>

          <p>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className=" border-y p-3 my-4 pl-0">
            <p className="mb-3">Select Colors</p>
            <div className="flex gap-2">
              <FaCircleCheck className="text-[27px]" />
              <p className="bg-[#314F4A] rounded-full h-7 w-7"></p>
              <p className="bg-[#314F4A] rounded-full h-7 w-7"></p>
            </div>
          </div>

          <div className="*:mr-3 border-b  px-3 pb-4 my-2 pl-0">
            <h1 className="mb-3">Choose Size</h1>
            <span className="bg-[#FF33331A] rounded-full px-3 py-1 text-[16px]">
              Small
            </span>
            <span className="bg-[#FF33331A] rounded-full px-3 py-1 text-[16px]">
              Medium
            </span>
            <span className="bg-[#000000] text-white rounded-full px-3 py-1 text-[16px]">
              Large
            </span>
            <span className="bg-[#FF33331A] rounded-full px-3 py-1 text-[16px]">
              X-Large
            </span>
          </div>

          <div className=" p-4 my-3 pl-0 *:mr-3">
            <span className="bg-[#FF33331A] font-bold rounded-full px-3 py-1 text-[16px]">
              - <span className="mx-7">1</span>+
            </span>
            <button className="bg-[#000000] text-white rounded-full px-32 py-1 text-[16px]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails