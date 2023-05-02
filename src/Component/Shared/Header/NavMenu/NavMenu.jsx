import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoFastFoodOutline, IoFastFoodSharp } from "react-icons/io5";
  
function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white shadow-md font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
                      <div className="text-2xl  text-[#774d62] hidden lg:block from-current font-mono ">
                          <span className='flex justify-center h-8  items-center font-bold'> 
                          <IoFastFoodSharp className='flex justify-center h-8  items-center font-bold' />Food Cuisine </span></div>
                      
                      
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline font-bold space-x-4">
              <Link to="/home" className="text-[#774d62] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">Home</Link>
              <Link to="/jobs" className="text-[#774d62]  border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">Applied Jobs</Link>
              <Link to="/statistics" className="text-[#774d62] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">Statistics</Link>
              <Link to="/blog" className="text-[#774d62]  border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">Blog</Link>
            </div>
          </div>
          <div className="hidden md:block bg-[#774d62]">
            <button className="shadow-lg    text-white font-semibold  px-4 py-2 rounded hover:bg-blue-950">Login</button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:text-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 font-bold text-xl  pt-2 pb-3 space-y-1 ">
      




<div class="flex h-screen flex-col justify-between border-e bg-white ">
  <div class="px-4 py-6">
    <span
      class="grid h-10 w-[100%] place-content-center rounded-lg bg-gray-100 text-xl text-gray-600"
    >
     <span className='flex justify-center h-8  items-center font-bold'> 
                          <IoFastFoodSharp className='flex justify-center h-8  items-center font-bold' />Food Cuisine </span>
    </span>

    <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
    
          <Link to="/home" className="text-sm font-medium flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 border-b-4 border-transparent  hover:border-current hover:text-red-700">Home</Link>
          <Link to="/blog" className="text-sm font-medium flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700  border-b-4 border-transparent  hover:border-current hover:text-red-700">Recipes</Link>
          
          <Link to="/home" className="text-sm font-medium flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700  border-b-4 border-transparent  hover:border-current hover:text-red-700">Chef</Link>
        
          <Link to="/home" className="text-sm font-medium flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700  border-b-4 border-transparent  hover:border-current hover:text-red-700">Blog</Link>
      

     
   



      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <div class="flex items-center gap-2">
           

            <span class="text-sm font-medium"> Account </span>
          </div>

          <span class="shrink-0 transition duration-300 group-open:-rotate-180">
            
          </span>
        </summary>

        <nav aria-label="Account Nav" class="mt-2 flex flex-col px-4">
          <a
            href="#"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            
            <span class="text-sm font-medium"> Details </span>
          </a>

          <a
            href="#"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
           

            <span class="text-sm font-medium"> Security </span>
          </a>

          <form action="/logout">
            <button
              type="submit"
              class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span class="text-sm font-medium"> Logout </span>
            </button>
          </form>
        </nav>
      </details>
    </nav>
  </div>

  <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <img
        alt="Man"
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        class="h-10 w-10 rounded-full object-cover"
      />

      <div>
        <p class="text-xs">
          <strong class="block font-medium">Eric Frusciante</strong>

          <span> eric@frusciante.com </span>
        </p>
      </div>
    </a>
  </div>
</div>




















                  
        </div>
        
      </div>
    </nav>
  );
}

export default NavMenu;
