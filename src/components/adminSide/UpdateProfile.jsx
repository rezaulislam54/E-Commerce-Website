import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="p-6 text-gray-100">
      <form
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
            type="text"
            defaultValue={user?.displayName}
            placeholder="Your name"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            defaultValue={user?.email}
            placeholder="Your email"
            required=""
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
