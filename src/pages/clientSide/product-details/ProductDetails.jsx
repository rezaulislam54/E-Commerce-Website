import { Helmet } from "react-helmet-async";
// import { FaCircleCheck } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import ProductReview from "./ProductReview";
import Product from "../home-page/product";
import { useEffect, useState } from "react";
// import { IoIosCheckmark } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

const ProductDetails = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])
  const products = useLoaderData();
  const { id } = useParams();
  const product = products?.find((pro) => pro.id === +id);
  const [Productimg, setproductimg] = useState(product.product_images[0]);
  const [index, setindex] = useState(0);
  const [color, setcolor] = useState(0);

  const {
    product_title,
    product_price,
    product_images,
    product_discount_price,
    product_rating,
    product_discount_percent,
    product_review,
  } = product;

  return (
    <div className="container mx-auto md:px-10 my-12">
      <Helmet>
        <title>SHOP.CO | Product Details</title>
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-5  ">
        <div className="space-y-4 *:w-full *:h-[142px] ">
          <img
            onClick={() => setproductimg(product_images[0])}
            className="bg-[#F0EEED] rounded-xl cursor-pointer"
            src={product_images[0]}
          />
          <img
            onClick={() => setproductimg(product_images[1])}
            className="bg-[#F0EEED] rounded-xl cursor-pointer"
            src={product_images[1]}
          />
          <img
            onClick={() => setproductimg(product_images[2])}
            className="bg-[#F0EEED] rounded-xl cursor-pointer"
            src={product_images[2]}
          />
          {/* <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726511359/Frame_33_yevjec.png" /> */}
        </div>

        <div className="col-span-3 size-96 bg-[#F0EEED] rounded-xl flex items-center justify-center">
          <img src={Productimg} />
        </div>

        <div className="col-span-5 ml-4">
          <h2 className="text-5xl font-bold mb-2">{product_title}</h2>
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
          <span className="ml-2">{product_rating}/5</span>
          <h2 className="text-2xl space-x-3 font-bold my-2">
            {product_price}
            <span className="line-through ml-1 text-[#0000004D]">
              ${product_discount_price}
            </span>
            <span className="bg-[#FF33331A] rounded-full px-2 text-[16px]">
              -{product_discount_percent}%
            </span>
          </h2>

          <p>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className=" border-y p-3 my-4 pl-0">
            <p className="mb-3">Select Colors</p>
            <div className="flex gap-2">
              <p
                onClick={() => setcolor(0)}
                className="flex items-center justify-center bg-[#FF0000] rounded-full h-7 w-7"
              >
                <FaCheck
                  className={`${color === 0 ? "text-white" : "text-[#FF0000]"}`}
                />
              </p>
              <p
                onClick={() => setcolor(1)}
                className="flex items-center justify-center bg-[#6046f2] rounded-full h-7 w-7"
              >
                <FaCheck
                  className={`${color === 1 ? "text-white" : "text-[#6046f2]"}`}
                />
              </p>
              <p
                onClick={() => setcolor(2)}
                className="flex items-center justify-center bg-[#314F4A] rounded-full h-7 w-7"
              >
                <FaCheck
                  className={`${color === 2 ? "text-white" : "text-[#314F4A]"}`}
                />
              </p>
              <p
                onClick={() => setcolor(3)}
                className="flex items-center justify-center bg-[#000000] rounded-full h-7 w-7"
              >
                <FaCheck
                  className={`${color === 3 ? "text-white" : "text-[#000000]"}`}
                />
              </p>
            </div>
          </div>

          <div className="*:mr-3 border-b  px-3 pb-4 my-2 pl-0">
            <h1 className="mb-3">Choose Size</h1>
            <span
              onClick={() => setindex(0)}
              className={`${
                index === 0 ? "bg-[#000000] text-white" : "bg-[#FF33331A]"
              } rounded-full px-3 py-1 text-[16px] cursor-pointer`}
            >
              Small
            </span>
            <span
              onClick={() => setindex(1)}
              className={`${
                index === 1 ? "bg-[#000000] text-white" : "bg-[#FF33331A]"
              } rounded-full px-3 py-1 text-[16px] cursor-pointer`}
            >
              Medium
            </span>
            <span
              onClick={() => setindex(2)}
              className={`${
                index === 2 ? "bg-[#000000] text-white" : "bg-[#FF33331A]"
              } rounded-full px-3 py-1 text-[16px] cursor-pointer`}
            >
              Large
            </span>
            <span
              onClick={() => setindex(3)}
              className={`${
                index === 3 ? "bg-[#000000] text-white" : "bg-[#FF33331A]"
              } rounded-full px-3 py-1 text-[16px] cursor-pointer`}
            >
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

      {/* revew and rating */}
      <div>
        <div className=" text-xl font-medium my-10 border-b pb-2 text-center grid col-span-1 md:grid-cols-2 lg:grid-cols-3">
          <h2>Product Details</h2>
          <h2>Rating & Reviews</h2>
          <h2>FAQs</h2>
        </div>

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

      {/* You might also like section */}

      <div className="my-16">
        <h2 className="text-center text-5xl font-bold">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5 lg:px-0">
          {products?.slice(5, 9)?.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
