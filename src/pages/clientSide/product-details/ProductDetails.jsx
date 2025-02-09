import { Helmet } from "react-helmet-async";
// import { FaCircleCheck } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import Product from "../home-page/product";
import { useContext, useEffect, useState } from "react";
// import { IoIosCheckmark } from "react-icons/io";
// import { AiOutlineCheck } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { AuthContext } from "../../../authProvider/AuthContextProvider";
import Swal from "sweetalert2";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReviewRating from "./tabsContant/ReviewRating";
import ProductDetailsTab from "./tabsContant/ProductDetailsTab";
import FaqContant from "./tabsContant/FaqContant";

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = useLoaderData();
  const navigate = useNavigate();
  const [Productimg, setproductimg] = useState(product.product_images[0]);
  const [index, setindex] = useState(0);
  const [color, setcolor] = useState(0);
  const [totalquantity, settotalquantity] = useState(1);
  const { user, products } = useContext(AuthContext);
  const email = user?.email;

  const {
    _id,
    product_title,
    product_price,
    product_images,
    product_discount_price,
    product_rating,
    product_discount_percent,
    product_review,
    product_size,
  } = product;

  const image = product_images[0];
  console.log(image);

  const handleIncrease = () => {
    settotalquantity(totalquantity + 1);
  };

  const handleDecrease = () => {
    if (totalquantity > 1) {
      settotalquantity(totalquantity - 1);
    }
  };

  const handleAddToCard = () => {
    const info = {
      productName: product_title,
      price: product_price,
      quantity: totalquantity,
      product_size: product_size,
      photo: image,
      email: email,
      prodId: _id,
    };
    console.log(info);

    if (user) {
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Product Add to Cart Successfully!",
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Error!",
        text: "please Login then try again!",
        icon: "error",
        confirmButtonText: "Ok",
      });
      navigate("/login");
    }
  };

  return (
    <div className="container mx-auto md:px-10 my-12">
      <Helmet>
        <title>SHOP.CO | Product Details</title>
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-5  ">
        <div className="space-y-4 *:w-full *:h-[142px] ">
          <img
            onClick={() => setproductimg(product_images[0])}
            className="bg-[#F0EEED] rounded-xl  cursor-pointer"
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

        <div className="col-span-3 size-auto bg-[#F0EEED] rounded-xl flex items-center justify-center">
          <img className="size-80" src={Productimg} />
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
              <span onClick={handleDecrease} className="cursor-pointer">
                -{" "}
              </span>
              <span className="mx-7">{totalquantity}</span>
              <span onClick={handleIncrease} className="cursor-pointer">
                +
              </span>
            </span>
            <button
              onClick={handleAddToCard}
              className="bg-[#000000] text-white rounded-full px-32 py-1 text-[16px]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* revew and rating */}
      <div className="mt-8">
        <Tabs>
          <TabList>
            <div className="flex justify-evenly">
              <Tab>Product Details</Tab>
              <Tab>Rating & Reviews</Tab>
              <Tab>FAQs</Tab>
            </div>
          </TabList>

          <TabPanel>
            <ProductDetailsTab></ProductDetailsTab>
          </TabPanel>
          <TabPanel>
            <ReviewRating product_review={product_review}></ReviewRating>
          </TabPanel>
          <TabPanel>
            <FaqContant></FaqContant>{" "}
          </TabPanel>
        </Tabs>
      </div>

      {/* You might also like section */}

      <div className="my-16">
        <h2 className="text-center text-5xl font-bold">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5 lg:px-0">
          {products?.slice(5, 9)?.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
