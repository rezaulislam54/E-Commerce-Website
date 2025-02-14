import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthContextProvider";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile, setLoading } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    updateUserProfile({ displayName: name, email: email, photoURL: image })
      .then(() => {
        setLoading(false);
        Navigate(location?.state ? location.state : "/");
        Swal.fire({
          title: "Success!",
          text: "Acount Created Successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
          title: "Success!",
          text: "Acount Updated Successfully!",
          icon: "Success",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <section className="p-6 text-gray-100">
      <form
        onSubmit={handleSubmit}
        noValidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">
          Update Profile
        </h2>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={user?.displayName}
            placeholder="Your name"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id=""
            type="email"
            defaultValue={user?.email}
            placeholder="Your email"
            name="email"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            PhotoURL
          </label>
          <input
            id="message"
            type="text"
            defaultValue={user?.photoURL}
            name="image"
            placeholder="Message..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
          ></input>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900"
          >
            Update
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateProfile;
