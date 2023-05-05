import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
const Explore = () => {
  return (
    <div className="container mx-auto my-20 text-center">
      <div className="">
        <h2 className="text-3xl text-red-950 font-serif font-bold">Our Resturant</h2>
        <p className="text-lg text-gray-500">
         NATOQUE PENATIBUS
        </p>
      </div>
      <div className="">
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row h-full">
          {/* left side  */}
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 mt-4 lg:mt-8">
              <h2 className="lg:max-w-lg mb-6 font-sans lg:text-2xl font-bold tracking-tight text-4xl sm:text-4xl sm:leading-none text-center lg:text-left">
                We take care of your foodie life
              </h2>
              <p className="text-base text-gray-500 md:text-lg text-justify">
               The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables". Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword

Restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword
              </p>
              <div className="my-6 w-1/2 mx-auto lg:w-fit lg:mx-0">
                <Link to="/register">
                  <button className="btn w-full">Get Started</button>
                </Link>
              </div>
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
                src="/126364-cooking.json"
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
