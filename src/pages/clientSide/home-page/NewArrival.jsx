import { useLoaderData } from "react-router-dom";
import Product from "./product";

const NewArrival = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="w-4/5 mx-auto my-20">
      <h2 className="text-center text-5xl font-bold">NEW ARRIVALS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5 lg:px-0">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      {/* btn */}
      <div className="text-center py-3">
        <button className="px-6 py-3 rounded-[60px] border border-gray-400">
          View All
        </button>
      </div>
      <hr className="mt-10" />
    </div>
  );
};

export default NewArrival;
