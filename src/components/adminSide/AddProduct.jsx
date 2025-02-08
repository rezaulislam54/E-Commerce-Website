
const AddProduct = () => {
    return (
      <div className="container w-full max-w-3xl  mx-auto space-y-6 rounded-md shadow">
        <div className="bg-gray-900 rounded-lg p-8 my-10">
          <h2 className="text-xl mb-6 text-start font-bold text-white">
            Add New Product
          </h2>
          <form
          //   onSubmit={submitFrom}
          >
            <div className="md:flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2  text-white" htmlFor="name">
                  Product Name
                </label>
                <input
                  className="w-full p-2 autoexpand  bg-gray-700 rounded  focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 text-white"
                  type="text"
                  placeholder=" Product Name"
                  id="name"
                  required
                  name="title"
                />

                <label className="block mt-4 mb-2 text-white" htmlFor="price">
                  Product Price
                </label>
                <input
                  className="w-full p-2 autoexpand  bg-gray-700 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 text-white"
                  type="text"
                  placeholder="Enter Product Price"
                  id="price"
                  required
                  name="price"
                />
              </div>

              {/* Right side */}
              <div className="flex-1">
                <label className="block mb-2 text-white" htmlFor="image">
                  Product Discount Price
                </label>
                <input
                  className="w-full p-2 autoexpand bg-gray-700 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 text-white"
                  type="text"
                  placeholder="Enter Product Discount Price "
                  id="type"
                  name="type"
                  required
                />
                <label className="block mb-2 mt-4 text-white" htmlFor="type">
                  Product Photo
                </label>
                <input
                  className="w-full p-2 autoexpand bg-gray-700 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 text-white"
                  type="text"
                  placeholder="Enter Product Photo URL"
                  id="img"
                  name="img"
                  required
                />
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="w-full">
                <label className="block mb-2 mt-4 text-white" htmlFor="image">
                  Product Rating
                </label>
                <input
                  className="w-full p-2 autoexpand bg-gray-700 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 text-white"
                  type="text"
                  placeholder="Enter Product Rating "
                  id="type"
                  name="type"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 mt-4 text-white" htmlFor="type">
                  Product Photo
                </label>
                <input
                  className="w-full p-2 autoexpand bg-gray-700 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 text-white"
                  type="text"
                  placeholder="Enter Product Photo URL"
                  id="img"
                  name="img"
                  required
                />
              </div>
            </div>

            <label className="block mb-2 mt-4 text-white" htmlFor="type">
              Product Description
            </label>
            <textarea
              className="w-full p-2 autoexpand bg-gray-700 rounded outline-none focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 text-white"
              name="description"
              required
              rows={4}
              placeholder="Product Description"
              id="description"
            ></textarea>

            <input
              className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Add Product"
            />
          </form>
        </div>
      </div>
    );
};

export default AddProduct;