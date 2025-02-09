import { useContext } from "react";
import { AiTwotoneControl } from "react-icons/ai";
import { FaAngleRight, FaAngleUp } from "react-icons/fa6";
import { AuthContext } from "../../authProvider/AuthContextProvider";
import Product from "../clientSide/home-page/product";

const CategoryPage = () => {
  const { products } = useContext(AuthContext);
  // const [products , setProducts] = useState([])
  // setProducts(data)

  return (
    <div className="container mx-auto px-3 lg:px-0">
      <div className="breadcrumbs text-sm px-5 py-5">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Casual</a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5 h-max justify-center lg:justify-start">
        {/* leftSide */}
        <div className="col-span-1 h-fit hidden lg:block lg:col-span-4 border-2 border-[#F0EEED] rounded-xl px-8 py-5 space-y-4">
          {/* filters */}
          <div className="text-3xl flex items-center justify-between ">
            <h2 className="font-bold">Filters</h2>
            <AiTwotoneControl />
          </div>
          <hr />
          <div className="text-xl opacity-80 space-y-2">
            <div className="flex justify-between items-center">
              <h2>T-shirts</h2>
              <FaAngleRight />
            </div>
            <div className="flex justify-between items-center">
              <h2>Shorts</h2>
              <FaAngleRight />
            </div>
            <div className="flex justify-between items-center">
              <h2>Shirts</h2>
              <FaAngleRight />
            </div>
            <div className="flex justify-between items-center">
              <h2>Hoodie</h2>
              <FaAngleRight />
            </div>
            <div className="flex justify-between items-center">
              <h2>Jeans</h2>
              <FaAngleRight />
            </div>
          </div>
          <hr />
          {/* price */}
          <div className="">
            <div className="text-xl flex justify-between items-center">
              <h2 className="text-3xl font-bold">Price</h2>
              <FaAngleUp />
            </div>
            <input type="range" name="" id="" className="w-full mt-3" />
          </div>
          <hr />

          {/* color */}
          <div>
            <div className="text-xl flex justify-between items-center">
              <h2 className="text-3xl font-bold">Color</h2>
              <FaAngleUp />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <input
                type="color"
                name=""
                id=""
                value={`#00C12B`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#EF4444`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#F5DD06`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#F57906`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#06CAF5`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#063AF5`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#7D06F5`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#F506A4`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#FFFFFF`}
                className=" "
              />
              <input
                type="color"
                name=""
                id=""
                value={`#000000`}
                className=" "
              />
            </div>
          </div>
          <hr />

          {/* size */}
          <div>
            <div className="text-xl flex justify-between items-center">
              <h2 className="text-3xl font-bold">Price</h2>
              <FaAngleUp />
            </div>
            <div className="flex  flex-wrap gap-3 mt-5 ">
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                XX-Small
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                X-Small
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                Small
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                Medium
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                Large
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                X-Large
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                Xx-Large
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                3X-Large
              </button>
              <button className="bg-[#F0F0F0] px-5 py-2.5 opacity-80 rounded-[40px] hover:bg-black hover:text-white">
                4X-Large
              </button>
            </div>
          </div>
          <hr />

          {/* dress */}
          <div>
            <div className="text-xl flex justify-between items-center">
              <h2 className="text-3xl font-bold">Dress Style</h2>
              <FaAngleUp />
            </div>

            <div className="text-xl opacity-80 space-y-2 mt-5">
              <div className="flex justify-between items-center">
                <h2>Causal</h2>
                <FaAngleRight />
              </div>
              <div className="flex justify-between items-center">
                <h2>Formal</h2>
                <FaAngleRight />
              </div>
              <div className="flex justify-between items-center">
                <h2>Party</h2>
                <FaAngleRight />
              </div>
              <div className="flex justify-between items-center">
                <h2>Gym</h2>
                <FaAngleRight />
              </div>
            </div>

            <button className="bg-black text-white w-full py-2.5 mt-3 rounded-[40px] text-2xl">
              Apply Filter
            </button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Causal</h2>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                Sort By
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Price</a>
                </li>
                <li>
                  <a>Rating</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-3" />
          <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-5">
            {products?.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
