import { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { AuthContext } from "../../authProvider/AuthContextProvider";
import SingleCart from "./SingleCart";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CartPage = () => {
  const {
    user,
    // cartUpdate: [isCartUpdated, setIsCartUpdated],
    // setLoading,
  } = useContext(AuthContext);
  const [Cartproducts, setCartProducts] = useState([]);
  // const totalPrice = Cartproducts.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    fetch(`http://localhost:5000/carts/${user.email}`)
      .then((response) => response.json())
      .then((data) => setCartProducts(data));
  }, [user]);

  const handleProductDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-shop-server-jd3g.onrender.com/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remainingmy = Cartproducts.filter((c) => c._id !== _id);
            setCartProducts(remainingmy);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  // Quantity বাড়ানোর ফাংশন
  // const handleIncrease = (id) => {
  //   const updatedData = Cartproducts.map((item) => {
  //     if (item.prodId === id) {
  //       const newQuantity = item.quantity + 1;

  //       // সার্ভারে আপডেট পাঠানো
  //       fetch(
  //         `https://glowing-cosmetics-shop-server.vercel.app/addToCart/${id}`,
  //         {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ quantity: newQuantity }),
  //         }
  //       )
  //         .then((res) => res.json())
  //         .then((data) => toast.success(data.message));

  //       return { ...item, quantity: newQuantity };
  //     }
  //     return item;
  //   });
  //   setCartProducts(updatedData);
  // };

  // Quantity কমানোর ফাংশন
  // const handleDecrease = (id) => {
  //   const updatedData = Cartproducts.map((item) => {
  //     if (item.prodId === id && item.quantity > 1) {
  //       // Quantity 1 এর নিচে নামতে পারবে না
  //       const newQuantity = item.quantity - 1;

  //       // সার্ভারে আপডেট পাঠানো
  //       fetch(
  //         `https://glowing-cosmetics-shop-server.vercel.app/addToCart/${id}`,
  //         {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ quantity: newQuantity }),
  //         }
  //       )
  //         .then((res) => res.json())
  //         .then((data) => toast.success(data.message));

  //       return { ...item, quantity: newQuantity };
  //     }
  //     return item;
  //   });
  //   setCartProducts(updatedData);
  // };

  // const handleDelete = (prodId, photo) => {
  //   const deleteData = {
  //     email: user?.email,
  //   };

  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "Do you want to delete this product?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     imageUrl: `${photo}`,
  //     imageHeight: "100px",
  //     imageWidth: "100px",
  //     confirmButtonColor: "#82588D",
  //     cancelButtonColor: "#87AC52",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       //   delete fetch
  //       // setLoading(true);
  //       fetch(
  //         `https://glowing-cosmetics-shop-server.vercel.app/addToCart/${prodId}`,
  //         {
  //           method: "DELETE",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(deleteData),
  //         }
  //       )
  //         .then((response) => response.json())
  //         .then(({ message, data: { exists } }) => {
  //           // setLoading(false);
  //           if (exists) {
  //             toast.error(message);
  //           } else {
  //             toast.success(message);
  //             setIsCartUpdated(!isCartUpdated);
  //           }
  //         });
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: "Your Products has been deleted.",
  //         icon: "success",
  //       });
  //     }
  //   });
  // };

  // // ক্যার্ট মুছানোর ��াংশন
  // const handleDelete = (id) => {
  //   fetch(`http://localhost:5000/carts/${user.email}/${id}`, {
  //     method: "DELETE",
  //   })
  //    .then(() => {
  //       setIsCartUpdated(!isCartUpdated);
  //       Swal.fire({
  //         title: "Success!",
  //         text: "Product deleted successfully!",
  //         icon: "success",
  //         confirmButtonText: "Ok",
  //       });
  //     })
  //    .catch((error) => {
  //       console.error("Error deleting product:", error);
  //       Swal.fire({
  //         title: "Error!",
  //         text: "Failed to delete product!",
  //         icon: "error",
  //         confirmButtonText: "Ok",
  //       });
  //     });
  // };

  return (
    <div className="container mx-auto md:px-10 px-3">
      <h2 className="flex items-center my-3">
        Home
        <span className="mx-1">
          <MdChevronRight />
        </span>
        Cart
      </h2>

      <h1 className="text-4xl font-bold">Your cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 my-5">
        <div className=" md:col-span-4 border p-5 shadow-lg rounded-xl">
          <div className="grid gap-3">
            {Cartproducts?.map((product) => (
              <SingleCart
                key={product._id}
                handleProductDelete={handleProductDelete}
                product={product}
              ></SingleCart>
            ))}

            {/* <div className="flex justify-between items-center w-full gap-5 border p-3 rounded-xl">
              <div className="w-36 bg-[#FF33331A] rounded-lg">
                <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726511359/Frame_33_yevjec.png" />
              </div>
              <div className="flex-grow w-full">
                <div className="flex justify-between text-[20px] font-bold">
                  <h2>Gradient Graphic T-shirt</h2>
                  <RiDeleteBinFill />
                </div>
                <p>
                  <span className="font-medium">Size:</span> Large
                </p>
                <p>
                  <span className="font-medium">Color:</span> White
                </p>
                <div className="flex justify-between mt-2">
                  <h2 className="text-2xl font-bold">$145</h2>
                  <h2 className="text-center bg-[#FF33331A] font-bold rounded-full px-3 py-1 text-[16px]">
                    - <span className="mx-5">1</span>+
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full gap-5 border p-3 rounded-xl">
              <div className="w-36 bg-[#FF33331A] rounded-lg">
                <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726518699/71pqrVLTbKL._US500_-removebg-preview_qjuy9q.png" />
              </div>
              <div className="flex-grow w-full">
                <div className="flex justify-between text-[20px] font-bold">
                  <h2>Gradient Graphic T-shirt</h2>
                  <RiDeleteBinFill />
                </div>
                <p>
                  <span className="font-medium">Size:</span> Large
                </p>
                <p>
                  <span className="font-medium">Color:</span> White
                </p>
                <div className="flex justify-between mt-2">
                  <h2 className="text-2xl font-bold">$145</h2>
                  <h2 className="text-center bg-[#FF33331A] font-bold rounded-full px-3 py-1 text-[16px]">
                    - <span className="mx-5">1</span>+
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full gap-5 border p-3 rounded-xl">
              <div className="w-36 bg-[#FF33331A] rounded-lg">
                <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726559292/Frame_32_yzi1mo_1_-removebg-preview_unp3sf.png" />
              </div>
              <div className="flex-grow w-full">
                <div className="flex justify-between text-[20px] font-bold">
                  <h2>Gradient Graphic T-shirt</h2>
                  <RiDeleteBinFill />
                </div>
                <p>
                  <span className="font-medium">Size:</span> Large
                </p>
                <p>
                  <span className="font-medium">Color:</span> White
                </p>
                <div className="flex justify-between mt-2">
                  <h2 className="text-2xl font-bold">$145</h2>
                  <h2 className="text-center bg-[#FF33331A] font-bold rounded-full px-3 py-1 text-[16px]">
                    - <span className="mx-5">1</span>+
                  </h2>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className=" h-fit space-y-4 md:col-span-2 border-2 rounded-xl shadow-lg p-5">
          <h1 className="text-2xl font-bold">Order Summary</h1>
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p className="font-bold">$565</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Discount (-20%)</p>
            <p className="font-bold">-$113</p>
          </div>
          <div className="flex items-center justify-between border-b-2 pb-4">
            <p>Delivery Fee</p>
            <p className="font-bold">$15</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p className="text-2xl font-bold">$467</p>
          </div>

          <div className="flex gap-4 justify-between">
            <div className="bg-[#FF33331A] rounded-full px-3 py-2 flex-1">
              <img
                className="inline-block size-5 mr-3"
                src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726852882/Frame_2x-removebg-preview_gby9t5.png"
              />
              <span>Add promo code</span>
            </div>
            <button className="bg-[#000000] text-white rounded-full px-8">
              Apply
            </button>
          </div>

          <div className="mt-4">
            <button className="w-full bg-[#000000] text-white rounded-full py-3 ">
              Go to Checkout <FaArrowRight className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
