import CountUp from "react-countup";

const Banner = () => {
  return (
    <div className="bg-[#F2F0F1]">
      <div className=" container mx-auto md:flex md:gap-x-6">
        <div className="md:px-10 px-3 py-14">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-4xl font-bold">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h2>
            <p className="">
              Browse through our diverse range of meticulously crafted garments,
              designed <br className="hidden md:block" /> to bring out your
              individuality and cater to your sense of style.
            </p>
            <button className=" w-full  md:w-auto bg-[#000000] py-2.5 px-8 text-white font-semibold rounded-full">
              Shop Now
            </button>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-start gap-x-16 md:gap-x-10 pt-5 md:pt-10">
            <div>
              <CountUp start={0} end={200} duration={5} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <h2 className="text-2xl font-bold" ref={countUpRef}></h2>
                    <p className="text-xl">International Brands</p>
                  </div>
                )}
              </CountUp>
            </div>
            <div>
              <CountUp start={0} end={2000} duration={5} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <h2 className="text-2xl font-bold" ref={countUpRef}>
                      +
                    </h2>
                    <p className="text-xl">High-Quality Products</p>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="hidden">
              <CountUp start={0} end={30000} duration={5} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <h2 className="text-2xl font-bold" ref={countUpRef}></h2>
                    <p className="text-xl"> Happy Customers</p>
                  </div>
                )}
              </CountUp>
            </div>
            <div className="pt-5 md:pt-0 md:block">
              <CountUp start={0} end={30000} duration={5} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <h2 className="text-2xl font-bold" ref={countUpRef}></h2>
                    <p className="text-xl"> Happy Customers</p>
                  </div>
                )}
              </CountUp>
            </div>
          </div>
        </div>

        <div
          className="relative "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            className="md:pt-8 "
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726063596/Rectangle_2__1_-removebg-preview_u96hfh.png"
            alt=""
          />
          <img
            className="absolute md:top-20 md:right-2 top-4 right-4 size-24"
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1725988965/Vector_2x_jhytqm.png"
          />
          <img
            className="absolute md:top-60 md:left-6 top-36 left-10 size-16"
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1725988965/Vector_2x_jhytqm.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
