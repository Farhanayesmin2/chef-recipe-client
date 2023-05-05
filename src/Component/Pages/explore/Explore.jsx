import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
const Explore = () => {
  return (
    <div className="container mx-auto my-20 text-center">
      <div className="">
        <h2 className="text-5xl text-red-950 font-serif font-bold">Our Resturant</h2>
        <p className="text-lg text-gray-500">
         NATOQUE PENATIBUS
        </p>
      </div>
      <div className="">
        <div className="flex flex-col-reverse items-center  lg:flex-row">
          {/* left side  */}
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 mt-4 lg:mt-8">
              <h2 className="lg:max-w-lg mb-6 font-sherif lg:text-2xl font-bold tracking-tight text-4xl sm:text-4xl sm:leading-none text-center lg:text-left">
                We take care of your foodie life.
              </h2>
              <p className="text-base text-gray-500 md:text-lg text-justify">
               The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables". Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword

Restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword.
              </p>
              


<a
  class="group mt-5 relative inline-block text-sm font-medium text-rose-600 focus:outline-none focus:ring active:text-indigo-500"
  href="/"
>
  <span
    class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-rose-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
  ></span>

  <span class="relative block border border-current bg-white px-8 py-3">
    Our New Services
  </span>
</a>



<a
  class="group ml-10 relative inline-block text-sm font-medium text-green-600 focus:outline-none focus:ring active:text-indigo-500"
  href="/"
>
  <span
    class="absolute inset-0 translate-x-0 translate-y-0 bg-green-300 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"
  ></span>

  <span class="relative block border border-current bg-white px-8 py-3">
    Next Level Services
  </span>
</a>

              
            </div>
          </div>
          {/* right side  */}
          {/* Lottie Animation */}
          <div className="lg:w-1/2 ">
            <div className="w-full lg:w-4/5 lg:ml-auto">
              <Player
                autoplay
                speed={1.5}
                loop
                src="/60366-pizza-ingrediants.json"
                className="rounded"
              ></Player>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
