import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import AdminNavbar from "../components/adminSide/AdminNavbar";
import { FaCartPlus, FaRegUserCircle } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LiaUserEditSolid } from "react-icons/lia";
import { TbLogout } from "react-icons/tb";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthContextProvider";
import { BiAddToQueue } from "react-icons/bi";

const DashboardLayoutes = () => {
  const [show, setShow] = useState(false);
  const { user, LognOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    LognOut().then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <div className="min-h-screen flex">
        <div
          className={`bg-theme_primary text-white ${show ? "w-1/4" : "w-16"}`}
          id="sidebar"
        >
          <div className="p-5 flex justify-between text-2xl cursor-pointer">
            <div className="">
              {show || <GiHamburgerMenu onClick={() => setShow(true)} />}
            </div>
            <div className="font-bold">
              {show && <RxCross1 onClick={() => setShow(false)} />}
            </div>
          </div>

          <div className="pt-10">
            {/* user profile */}
            <Link
              to={`/dashboard`}
              className="flex gap-3 items-center px-5 py-3 text-2xl hover:bg-white hover:text-black cursor-pointer"
            >
              <div
                className="tooltip  tooltip-right"
                data-tip={`${show ? "" : "User Profile"}`}
              >
                <FaRegUserCircle />
              </div>
              <p className={`${show ? "" : "hidden"}`}>User Profile</p>
            </Link>
            {/* update Profile */}
            <Link
              to={`/dashboard/update-user`}
              className="flex gap-3 items-center px-5 py-3 text-2xl hover:bg-white hover:text-black cursor-pointer"
            >
              <div
                className="tooltip  tooltip-right"
                data-tip={`${show ? "" : "update Profile"}`}
              >
                <LiaUserEditSolid />
              </div>
              <p className={`${show ? "" : "hidden"}`}>update Profile</p>
            </Link>

            {/* Add Product  */}
            <Link
              to={"/dashboard/add-product"}
              className="flex gap-3 items-center px-5 py-3 text-2xl hover:bg-white hover:text-black cursor-pointer"
            >
              <div
                className="tooltip  tooltip-right"
                data-tip={`${show ? "" : "Add Product"}`}
              >
                <BiAddToQueue />
              </div>
              <p className={`${show ? "" : "hidden"}`}>Add Product</p>
            </Link>

            {/* Cart */}
            <Link
              to={"/dashboard/cart"}
              className="flex gap-3 items-center px-5 py-3 text-2xl hover:bg-white hover:text-black cursor-pointer"
            >
              <div
                className="tooltip  tooltip-right"
                data-tip={`${show ? "" : "My Cart"}`}
              >
                <FaCartPlus />
              </div>
              <p className={`${show ? "" : "hidden"}`}>My Cart</p>
            </Link>

            {/* manage product */}
            <div className="flex gap-3 items-center px-5 py-3 text-2xl hover:bg-white hover:text-black cursor-pointer">
              <div
                className="tooltip  tooltip-right"
                data-tip={`${show ? "" : "Manage Product"}`}
              >
                <MdManageHistory />
              </div>
              <p className={`${show ? "" : "hidden"}`}>Manage Product</p>
            </div>

            {/* payment */}
            <div className="flex gap-3 items-center px-5 py-3 text-2xl hover:bg-white hover:text-black cursor-pointer">
              <div
                className="tooltip  tooltip-right"
                data-tip={`${show ? "" : "Payment"}`}
              >
                <RiSecurePaymentLine />
              </div>
              <p className={`${show ? "" : "hidden"}`}>Payment</p>
            </div>
            {/* logout */}
            <div
              onClick={handleLogout}
              className="flex gap-3 items-center px-5 py-3 text-2xl hover:bg-white hover:text-black cursor-pointer"
            >
              <div
                className="tooltip  tooltip-right"
                data-tip={`${show ? "" : "Logout"}`}
              >
                <TbLogout />
              </div>
              <p className={`${show ? "" : "hidden"}`}>Logout</p>
            </div>
          </div>
        </div>
        <div className=" flex-1" id="mainArea">
          <div className=" shadow-md">
            <AdminNavbar />
          </div>

          {/* outlet */}
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayoutes;
