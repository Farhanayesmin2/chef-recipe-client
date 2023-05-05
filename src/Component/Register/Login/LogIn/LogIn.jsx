import React, { useContext, useState } from "react";
import { FcKindle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";
import Github from "../../../Others/Github/Github";

const LogIn = () => {
  // State variables
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  // Context variables and functions
  const { signIn, signInWithGoogle, setUser } = useContext(AuthContext);

  // Router variables and functions
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // Event handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Sign in with email and password
    signIn(email, password)
      .then((result) => {
        // Reset error message and set user context
        setErrorMessage("");
        const loggedUser = result.user;
        setUser(loggedUser);

        // Navigate to previous page and reset form
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        // Display error message
        toast.error(error.message);

        // Display success message if there's no error
        if (!error) {
          toast.success("Successfully Login!");
        }
      });
  };

  const handleEmail = (e) => {
    const input = e.target.value;
    setEmail(input);
  };

  const handlePassword = (e) => {
    const input = e.target.value;
    setPassword(input);
  };

  const handleGoogleSignIn = () => {
    // Sign in with Google
    signInWithGoogle()
      .then((result) => {
        // Reset error message and set user context
        setErrorMessage("");
        const loggedUser = result.user;
        setUser(loggedUser);

        // Navigate to previous page
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Display error message
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="font-sans my-10">
      <section className="min-h-screen flex items-center justify-center">
        {/* Login container */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* Form */}
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74] flex">
              Login<FcKindle className="pt-2 h-8"></FcKindle>{" "}
            </h2>
            <p className="text-xs mt-4 text-[#002D74]">
              If you are already a member, easily log in
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email input */}
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"

                value={email}
                onChange={handleEmail}
              />

              {/* Password input */}
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  name="password"
                  placeholder="Password"
                  type={show ? "text" : "password"}
                
                  value={password}
                  onChange={handlePassword}
                />

                <p className="text-danger">
                  {errorMessage && (
                    <span className="text-red-500">{errorMessage}</span>
                  )}
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </p>

                <svg
                  onClick={() => setShow(!show)}
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <button className=" bg-gradient-to-r from-[#774d62] via-pink-100 to-[#774d62] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium  text-sm px-5  text-center mr-2 mb-2 rounded-xl  py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form>
            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <button
              onClick={handleGoogleSignIn}
              className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
            >
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Login with Google
            </button>
            <div className="mt-5 text-center">
              <Github></Github>
            </div>
            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <Link>Forgot your password?/</Link>
            </div>
            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                <Link to="/register">Register</Link>
              </button>
            </div>
          </div>
          {/* image */}
          <div className="md:block hidden w-1/2">
            <img
              alt="login-img"
              className="rounded-2xl opacity-50"
              src="https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;