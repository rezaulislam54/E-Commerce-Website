import { RiDeleteBinFill } from "react-icons/ri";

const SingleCart = ({ product}) => {
    const { product_title, product_price, product_images, product_size } =
      product;
  return (
    <div className="flex justify-between items-center w-full gap-5 border p-3 rounded-xl">
      <div className="w-36 bg-[#FF33331A] rounded-lg">
        <img src={product_images[0]} />
      </div>
      <div className="flex-grow w-full">
        <div className="flex justify-between text-[20px] font-bold">
          <h2>{product_title}</h2>
          <RiDeleteBinFill />
        </div>
        <p>
          <span className="font-medium">Size:</span> {product_size[2]}
        </p>
        <p>
          <span className="font-medium">Color:</span> White
        </p>
        <div className="flex justify-between mt-2">
          <h2 className="text-2xl font-bold">${product_price}</h2>
          <h2 className="text-center bg-[#FF33331A] font-bold rounded-full px-3 py-1 text-[16px]">
            - <span className="mx-5">1</span>+
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;