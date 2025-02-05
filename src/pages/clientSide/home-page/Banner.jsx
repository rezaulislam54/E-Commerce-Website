import * as motion from "framer-motion/client";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
// import AnimatedCounter from "/components/ui/AnimatedCounter";

const Banner = () => {
  return (
    <header className="bg-[#F2F0F1] h-screen pt-10 md:pt-16 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <motion.h2
            initial={{ y: "100px", opacity: 0, rotate: 10 }}
            whileInView={{ y: "0", opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "IntegralCF, sans-serif" }}
            className={[
              "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 font-extrabold",
            ]}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </motion.h2>
          <motion.p
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]"
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </motion.p>
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link
              to="/"
              className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse"
            >
              Shop Now
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]"
          >
            <div className="flex flex-col">
              <span className="inline-block">
                <CountUp
                  start={0}
                  end={200}
                  duration={6}
                  delay={1}
                  className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2"
                ></CountUp>
                <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                  +
                </span>
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                International Brands
              </span>
            </div>
            <div
              className="ml-6 md:ml-0  border h-12 md:h-full bg-black/10"
              orientation="vertical"
            ></div>
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="inline-block">
                <CountUp
                  start={0}
                  end={2000}
                  duration={6}
                  delay={1}
                  className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2"
                ></CountUp>
                <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                  +
                </span>
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>
            <div
              className="hidden sm:block sm:h-12 border md:h-full ml-6 md:ml-0 bg-black/10"
              orientation="vertical"
            ></div>
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="inline-block">
                <CountUp
                  start={0}
                  end={3000}
                  duration={6}
                  delay={1}
                  className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2"
                ></CountUp>
                <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                  +
                </span>
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                Happy Customers
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]"
          ></motion.div>
        </section>
        <motion.section
          initial={{ y: "100px", opacity: 0, rotate: 10 }}
          whileInView={{ y: "0", opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]"
        >
          <img
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1725988965/Vector_2x_jhytqm.png"
            height={104}
            width={104}
            alt="big star"
            className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]"
          />
          <img
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1725988965/Vector_2x_jhytqm.png"
            height={56}
            width={56}
            alt="small star"
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]"
          />
        </motion.section>
      </div>
    </header>
  );
};

export default Banner;
