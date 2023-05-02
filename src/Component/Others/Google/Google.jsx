
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Google = () => {
 

  return (
    <div>
      <button
        
        type="button"
        class="text-gray-900 bg-teal-200 hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
      >
        <FcGoogle className="mr-2 font-bold"></FcGoogle>
        Sign in with Google
      </button>
    </div>
  );
};

export default Google;
