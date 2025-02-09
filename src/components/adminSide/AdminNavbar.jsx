import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthContextProvider";

const AdminNavbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          SHOP.CO
        </Link>
      </div>
      <div className="flex-none gap-2 mr-5">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
