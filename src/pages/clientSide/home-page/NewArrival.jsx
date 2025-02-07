import { useNavigation } from "react-router-dom";
import Product from "./product";
import Spinar from "../../../components/Spinar";
import * as motion from "framer-motion/client";
import { useContext } from "react";
import { AuthContext } from "../../../authProvider/AuthContextProvider";

const NewArrival = () => {
  const { products } = useContext(AuthContext);
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Spinar />;
  return (
    <div className="container mx-auto my-20">
      <motion.h2
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "IntegralCF, sans-serif" }}
        className="text-center font-extrabold text-[32px] leading-[36px] md:text-5xl mb-6 md:mb-10 capitalize"
      >
        NEW ARRIVALS
      </motion.h2>

      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5 lg:px-0"
      >
        {products.slice(0, 8)?.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </motion.div>
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
