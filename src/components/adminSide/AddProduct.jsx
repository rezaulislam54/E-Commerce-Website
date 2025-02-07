
const AddProduct = () => {
    return (
      <div className="container w-full max-w-3xl  mx-auto space-y-6 rounded-md shadow">
        <div className="bg-[#F3F3F3] rounded-lg p-8 my-10">
          <h2 className="text-xl pt-4 mb-4 text-center font-bold dark:text-black">
            Add New Service
          </h2>
          <form
          //   onSubmit={submitFrom}
          >
            <div className="md:flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="name">
                  Service Name
                </label>
                <input
                  className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder=" Service Name"
                  id="name"
                  required
                  name="title"
                />

                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="price"
                >
                  Service Price
                </label>
                <input
                  className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Enter Service Price"
                  id="price"
                  required
                  name="price"
                />
              </div>

              {/* Right side */}
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="image">
                  Service Type
                </label>
                <input
                  className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Enter Service Type "
                  id="type"
                  name="type"
                  required
                />
                <label
                  className="block mb-2 mt-4 dark:text-white"
                  htmlFor="type"
                >
                  Service Photo
                </label>
                <input
                  className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Enter Service Photo URL"
                  id="img"
                  name="img"
                  required
                />
              </div>
            </div>

            <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
              Product Description
            </label>
            <textarea
              className="w-full p-4 rounded-md border"
              name="description"
              required
              rows={7}
              placeholder="Product Description"
              id="description"
            ></textarea>

            <input
              className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Add Service"
            />
          </form>
        </div>
      </div>
    );
};

export default AddProduct;