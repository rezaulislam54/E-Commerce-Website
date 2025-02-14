import { useContext, useState } from "react";
// import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthContextProvider";
import Swal from "sweetalert2";
import { FaRegCircleUser } from "react-icons/fa6";
import { VscDashboard, VscSignOut } from "react-icons/vsc";

const Navbar = () => {
  const { user, LognOut } = useContext(AuthContext);
  // const [show, setshow] = useState(false);
  const [close, setclose] = useState(false);

  const handleLogout = () => {
    LognOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "User LogOut Successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const navlinkmenu = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/new"}>New Arrivals</Link>
      </li>
      <li>
        <Link to={"/category"}>Brand</Link>
      </li>
      {/* <li>
        <Link to={"/category"}>Category</Link>
      </li> */}
    </>
  );
  return (
    <div className="bg-base-100 shadow-lg">
      <div className="navbar justify-between  container mx-auto md:px-10 px-3 py-2">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow"
            >
              <li>
                <select>
                  <option>Shope</option>
                  <option>t-Shirt</option>
                  <option>Shirts</option>
                  <option>Hoodie</option>
                  <option>Jeans</option>
                </select>
              </li>

              {navlinkmenu}
            </ul>
          </div>
          <Link
            to="/"
            style={{ fontFamily: "IntegralCF, sans-serif" }}
            className=" text-3xl font-extrabold"
          >
            SHOP.CO
          </Link>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details className="z-30">
                <summary>Shope</summary>
                <ul className="grid grid-cols-2 gap-2 w-[600px] border rounded-md p-3">
                  <li>
                    <div className=" inline-table font-semibold">
                      Men&apos;s clothes <br />
                      <span className="font-normal">
                        In attractive and spectacular colors and designs
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className=" inline-table font-semibold">
                      Womenapos;s clothes <br />
                      <span className="font-normal">
                        Ladies, your style and tastes are important to us
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className=" inline-table font-semibold">
                      Kids clothes <br />
                      <span className="font-normal">
                        For all ages, with happy and beautiful colors
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className=" inline-table font-semibold">
                      Bags and Shoes <br />
                      <span className="font-normal">
                        Suitable for men, women and all tastes and styles
                      </span>
                    </div>
                  </li>
                </ul>
              </details>
            </li>

            {navlinkmenu}
          </ul>
        </div>
        <div className=" space-x-12 md:space-x-4">
          <fieldset className="w-full space-y-1 text-gray-100">
            <label htmlFor="Search" className="hidden">
              Search
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <IoSearch className="w-5 h-5 md:w-4 text-gray-500" />
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search for products..."
                className="hidden md:block w-full py-2 pl-10 text-sm rounded-full sm:w-auto focus:outline-none bg-gray-200 text-black focus:border-violet-400"
              />
            </div>
          </fieldset>
          <div className="flex text-xl gap-x-3 items-center">
            {user ? (
              <div className="flex justify-center items-center gap-4">
                <Link to={"/cart"}>
                  <LuShoppingCart />
                </Link>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={`${user.email}`}
                >
                  <FaRegCircleUser />
                </div>
                <div className=" dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={() => setclose(!close)}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-8 rounded-full">
                      {user.photoURL ? (
                        <img alt="" src={user?.photoURL} />
                      ) : (
                        <img
                          alt="Tailwind CSS Navbar component"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                      )}
                    </div>
                  </div>
                  {close && (
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content  z-[1000] divide-y-[1px] divide-[#2c333f] overflow-hidden rounded-md border-[1px] border-[#2c333f] bg-[#161d29]  md:-mr-11 w-36 p-2 shadow"
                    >
                      <li>
                        <Link
                          to={"/dashboard"}
                          onClick={() => setclose(false)}
                          className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-[#afb2bf] hover:bg-[#2c333f] hover:text-[#dbddea]"
                        >
                          <VscDashboard className="text-lg" />
                          Dashboard
                        </Link>
                      </li>
                      {/* <li>
                        <a>Settings</a>
                      </li> */}
                      <li>
                        <div
                          onClick={(() => setclose(false), handleLogout)}
                          className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-[#afb2bf] hover:bg-[#2c333f] hover:text-[#dbddea]"
                        >
                          <VscSignOut className="text-lg" />
                          Logout
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className=" px-4 rounded-md bg-black text-white">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
