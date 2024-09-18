import { Link } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="bg-black rounded-xl px-10 py-8 container mx-auto lg:relative lg:top-10 mb-5 lg:mb-0 ">
        <div className="flex justify-between flex-col gap-5 lg:flex-row ">
          <h2 className="text-white text-2xl lg:text-5xl font-bold">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              className="px-10 py-2.5 rounded-[60px]"
              placeholder="Enter Your Email Address"
            />
            <input
              type="text"
              className="px-10 py-2.5 rounded-[60px]"
              placeholder="Subscribe to Newsletter"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F0F0F0]">
        <footer className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-20 lg:gap-5 container mx-auto text-base-content px-10 py-14">
          <div className="col-span-2 lg:col-span-4 space-y-2 text-center lg:text-start">
            <Link to={`/`} className="text-2xl font-bold">
              SHOP.Co
            </Link>
            <p className="w-2/3 mx-auto lg:mx-0">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <AiOutlineTwitter className="border-2 bg-white rounded-full p-2 text-5xl"></AiOutlineTwitter>
              <BsFacebook className="border-2 bg-black text-white rounded-full p-2 text-5xl" />
              <SlSocialInstagram className="border-2 bg-white rounded-full p-2 text-5xl" />
              <IoLogoGithub className="border-2 bg-white rounded-full p-2 text-5xl" />
            </div>
          </div>

          <nav className="col-span-2 lg:col-span-4 gap-20 lg:gap-0 flex lg:justify-around md:justify-evenly">
            <div className="space-y-2">
              <h6 className="footer-title">Company</h6>
              <Link to={`/About`} className="link link-hover block">
                About
              </Link>
              <Link to={`/Features`} className="link link-hover block">
                Features
              </Link>
              <Link to={`/Works`} className="link link-hover block">
                Works
              </Link>
              <Link to={`/Career`} className="link link-hover block">
                Career
              </Link>
            </div>
            <div className="space-y-2">
              <h6 className="footer-title">Help</h6>
              <Link to={`/Customer`} className="link link-hover block">
                Customer Support
              </Link>
              <Link to={`/Delivery`} className="link link-hover block">
                Delivery Details
              </Link>
              <Link to={`/Terms`} className="link link-hover block">
                Terms & Conditions
              </Link>
              <Link to={`/Privacy`} className="link link-hover block">
                Privacy Policy
              </Link>
            </div>
          </nav>
          <nav className="col-span-2 lg:col-span-4 flex gap-20 lg:gap-0 lg:justify-around md:justify-evenly">
            <div className="space-y-2">
              <h6 className="footer-title">FAQ</h6>
              <Link to={`/Account`} className="link link-hover block">
                Account
              </Link>
              <Link to={`/Manage`} className="link link-hover block">
                Manage Deliveries
              </Link>
              <Link to={`/Orders`} className="link link-hover block">
                Orders
              </Link>
              <Link to={`/Payments`} className="link link-hover block">
                Payments
              </Link>
            </div>
            <div className="space-y-2">
              <h6 className="footer-title">Resources</h6>
              <Link to={`/Free`} className="link link-hover block">
                Free eBooks
              </Link>
              <Link to={`/Development`} className="link link-hover block">
                Development Tutorial
              </Link>
              <Link to={`/How`} className="link link-hover block">
                How to - Blog
              </Link>
              <Link to={`/Youtube`} className="link link-hover block">
                Youtube Playlist
              </Link>
            </div>
          </nav>
        </footer>
        <footer className="flex flex-col lg:flex-row gap-5 items-center justify-between container mx-auto bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
          <aside className="grid-flow-col items-center">
            <h2> Shop.co © 2000-2023, All Rights Reserved</h2>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-2 ">
              <div>
                <img
                  src="https://res.cloudinary.com/dqescabbl/image/upload/v1726508246/Badge_4_xtg1jo.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dqescabbl/image/upload/v1726508311/Badge_epq0c4.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dqescabbl/image/upload/v1726508335/Badge_1_he4sfd.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dqescabbl/image/upload/v1726508363/Badge_2_xgkizb.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dqescabbl/image/upload/v1726508381/Badge_3_kv0fgp.png"
                  alt=""
                />
              </div>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
