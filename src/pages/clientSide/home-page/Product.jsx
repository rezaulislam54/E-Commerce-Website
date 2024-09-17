import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
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
      <Link to="/product-details">
        <div className="">
          <div className="bg-[#F0EEED] p-5 rounded-[20px] h-[310px]">
            <img src={product_images[0]} alt="" />
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
                {" "}
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
      </Link>
    </div>
  );
};

export default Product;
