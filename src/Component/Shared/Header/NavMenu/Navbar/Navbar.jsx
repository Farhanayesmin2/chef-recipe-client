// import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
// import { FaUserCircle } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";


import { Avatar, Button, Toast } from "flowbite-react";
import { RiFireFill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";
import { useContext } from "react";


import profile from "../../../../../image/auth-image.jpg";
import { AuthContext } from "../../../../Contexts/UserContext/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="relative w-full">
        <Toast className="w-full animate-bounce ">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-white ">
            <MdLocalOffer className="h-5 w-5 animate-spin text-red-700" />
          </div>
          <div className="ml-3 text-sm font-normal flex">
            <h1 className="text-lg text-black font-mono">Get 60% Offer </h1>
            <RiFireFill className="h-6 w-9  text-yellow-400"> </RiFireFill>
          </div>
          <Toast.Toggle />
        </Toast>
      </div>
      <div className="container mx-auto font-extrabold shadow-lg font-sans ">
        <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 mb-6 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
              <img
                src="https://toppng.com/uploads/preview/free-fire-png-logo-115690680921wyscrhw1c.png"
                class="mr-3 h-6 sm:h-9"
                alt="Logo"
              />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Learn Code
              </span>
            </a>
            <div class="flex md:order-2">
              <>
                {user?.uid ? (
                  <>
                    <button
                      className="py-2 md:mr-6 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      onClick={handleLogOut}
                    >
                      Log out
                    </button>
                    <button className="btn btn-ghost btn-circle">
                      <Link to={"/profile"}>
                        <div className="avatar online">
                          <div className="w-12 rounded-full">
                            <abbr
                              title={
                                user?.displayName
                                  ? user?.displayName
                                  : user.email
                              }
                            >
                              <Avatar
                                 img={user?.photoURL ? user?.photoURL : profile}
                                rounded={true}
                                status="busy"
                                statusPosition="top-right"
                              />
                             
                            </abbr>
                          </div>
                        </div>
                      </Link>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      className="py-2 mx-1 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      to="/login"
                    >
                      <button>LogIn</button>
                    </Link>

               
                  </>
                )}
              </>
            </div>
            <div
              class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul class="flex flex-col lg:text-lg font-serif p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/home"
                    class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Course
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
