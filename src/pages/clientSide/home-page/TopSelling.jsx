import { useLoaderData } from "react-router-dom";
import Product from "./product";

const TopSelling = () => {
  const products = useLoaderData();
  return (
    <div className="container mx-auto my-20">
      <h2 className="text-center text-5xl font-bold">TOP SELLING</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5 lg:px-0">
        {products?.slice(8, 12).map((product) => (
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

export default TopSelling;
