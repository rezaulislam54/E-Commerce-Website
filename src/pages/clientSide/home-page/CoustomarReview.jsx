// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-stars";
import { FaCircleCheck } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../../App.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import * as motion from "framer-motion/client";

const CoustomarReview = () => {
  return (
    <div className="container mx-auto">
      <div className=" pt-5">
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
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 px-10">
            <div className="border-2 rounded-lg px-4 py-12">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
            <div className="border-2 rounded-lg p-4">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 px-10">
            <div className="border-2 rounded-lg px-4 py-6">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
            <div className="border-2 rounded-lg p-4">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 px-10">
            <div className="border-2 rounded-lg px-4 py-6">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
            <div className="border-2 rounded-lg p-4">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 px-10">
            <div className="border-2 rounded-lg px-4 py-6">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
            <div className="border-2 rounded-lg p-4">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 px-10">
            <div className="border-2 rounded-lg px-4 py-6">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
            <div className="border-2 rounded-lg p-4">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 px-10">
            <div className="border-2 rounded-lg px-4 py-6">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
            <div className="border-2 rounded-lg p-4">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 px-10">
            <div className="border-2 rounded-lg px-4 py-6">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
            <div className="border-2 rounded-lg p-4">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 px-10">
            <div className="border-2 rounded-lg px-4 py-6">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
            <div className="border-2 rounded-lg p-4">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 px-10">
            <div className="border-2 rounded-lg px-4 py-6">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
            <div className="border-2 rounded-lg p-4">
              <ReactStars
                count={5}
                size={30}
                color1={"#FFD90F"}
                color2={"#FFD90F"}
              />
              <div className="flex items-center gap-2 text-2xl font-bold">
                <h2>Sarah M.</h2>
                <FaCircleCheck className="text-green-700"></FaCircleCheck>
              </div>
              <p>
                &quot;I&apos;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&apos;ve bought has exceeded my
                expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CoustomarReview;
