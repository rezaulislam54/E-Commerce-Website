import * as motion from "framer-motion/client";

const DressStyle = () => {
  return (
    <div className="my-10">
      <div className="container mx-auto bg-[#F0F0F0] rounded-xl py-14 px-10">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "IntegralCF, sans-serif" }}
          className="text-center font-extrabold text-[32px] leading-[36px] md:text-5xl mb-6 md:mb-10 capitalize"
        >
          BROWSE BY DRESS STYLE
        </motion.h2>

        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-10 "
        >
          <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726501157/image_11_yu83yf.png')] bg-center  lg:bg-right w-full p-5 rounded-xl lg:col-span-4 lg:h-[280px] h-[200px]">
            <h2 className="text-2xl font-bold">Casual</h2>
          </div>
          <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726501374/image_13_sxanh8.png')] bg-center lg:bg-left-top lg:col-span-8  w-full  p-5 rounded-xl  lg:h-[280px] h-[200px]">
            <h2 className="text-2xl font-bold">Formal</h2>
          </div>
          <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726501928/image_12_x4lydb.png')] bg-center lg:bg-left-top lg:col-span-8  p-5 rounded-xl  lg:h-[280px] h-[200px]">
            <h2 className="text-2xl font-bold">Party</h2>
          </div>
          <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726501973/image_14_i2gzzo.png')]  lg:col-span-4  p-5 rounded-xl  lg:h-[280px] h-[200px]">
            <h2 className="text-2xl font-bold">Gym</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DressStyle;
