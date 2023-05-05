import React, { useState } from "react";




const Banner = () => {


  return ( 
    
        <div>


<section
  class="relative bg-[url(https://images.pexels.com/photos/12620889/pexels-photo-12620889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="bg-gradient-to-r from-gray-800 to-white/75 absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
       Let us find your

        <strong class="block font-extrabold text-rose-700">
        Favourite Chef.
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed">
        Food is not just essential for our survival, it's also a universal language that brings people together!
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
        About Our Chef
        </a>

        <a
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Explore Services
        </a>
      </div>
    </div>
  </div>
</section>

   </div>

   
  );
};

export default Banner;


