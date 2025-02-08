import { RiDeleteBinFill } from "react-icons/ri";

const SingleCart = ({
  product,
  handleProductDelete,
  handleIncrease,
  handleDecrease,
}) => {
  const { _id, prodId, productName, price, quantity, product_size, photo } =
    product;

  console.log(prodId);

  return (
    <div className="flex justify-between items-center w-full gap-5 border p-3 rounded-xl">
      <div className="w-36 bg-[#FF33331A] rounded-lg">
        <img src={photo} />
      </div>
      <div className="flex-grow w-full">
        <div className="flex relative justify-between text-[20px] font-bold">
          <h2>{productName}</h2>
          <div className="lg:flex hidden  mr-16 gap-x-0  lg:gap-x-16 ">
            <span className="font-medium">Quantity</span>
            <span className="font-medium">total</span>
          </div>
          <div className="lg:flex absolute -bottom-16 xl:left-[270px] lg:left-44 hidden gap-x-0  lg:gap-x-28 ">
            <span className="font-medium">{quantity}</span>
            <span className="font-medium">{price}</span>
          </div>
          <RiDeleteBinFill
            onClick={() => handleProductDelete(_id)}
            className="cursor-pointer"
          />
        </div>
        <p>
          <span className="font-medium">Size:</span> {product_size[2]}
        </p>
        <p>
          <span className="font-medium">Color:</span> White
        </p>

        <div className="flex justify-between mt-2">
          <h2 className="text-2xl font-bold">${price}</h2>
          <h2 className="text-center bg-[#FF33331A] font-bold rounded-full px-3 py-1 text-[16px]">
            <span
              onClick={() => handleDecrease(prodId)}
              className="cursor-pointer"
            >
              -
            </span>
            <span className="mx-5">{quantity}</span>
            <span
              onClick={() => handleIncrease(prodId)}
              className="cursor-pointer"
            >
              +
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;