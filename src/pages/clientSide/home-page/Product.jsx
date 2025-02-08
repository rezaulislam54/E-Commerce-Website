import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const {
    _id,
    product_images,
    product_title,
    product_rating,
    product_price,
    product_discount_price,
  } = product;

  const star = {
    position: "relative", //+
    overflow: "hidden", //+
    cursor: "pointer", //+
    display: "block", //+
    float: "left", //+
    color: "#FFD700",
    fontSize: "20px;", //+
  };

  return (
    <div>
      <div
        onClick={() => navigate(`/product/${_id}`)}
        className="cursor-pointer"
      >
        <div className="">
          <div className="bg-[#F0EEED] flex items-center justify-center p-5 rounded-[20px] h-[310px]">
            <img
              className="hover:scale-110 transition-all duration-500"
              src={product_images[0]}
              alt=""
            />
          </div>
          <h2 className="text-xl font-bold pt-5"> {product_title} </h2>

          <div className="flex items-center gap-4">
            <div>
              <span
                className="text-2xl"
                data-index="0"
                data-forhalf="★"
                style={star}
              >
                ★
              </span>
              <span
                className="text-2xl"
                data-index="2"
                data-forhalf="★"
                style={star}
              >
                ★
              </span>
              <span
                className="text-2xl"
                data-index="0"
                data-forhalf="★"
                style={star}
              >
                ★
              </span>
              <span
                className="text-2xl"
                data-index="0"
                data-forhalf="★"
                style={star}
              >
                ★
              </span>
              <span
                className="text-2xl"
                data-index="0"
                data-forhalf="★"
                style={star}
              >
                ★
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-center text-xl pt-2">
                {product_rating} /5
              </span>
            </div>
          </div>
          <h2 className="text-2xl font-bold">
            <span>Price</span> ${product_price}
            <span className="line-through ml-4 text-[#00000066]">
              ${product_discount_price}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
