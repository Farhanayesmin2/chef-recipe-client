import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiTwotoneLike } from "react-icons/ai";
import LazyLoad from 'react-lazyload';
import { Link, useLoaderData } from 'react-router-dom';



const AllChefs = () => {
   // const chefs = useLoaderData();
  const [data,setData] = useState([])
useEffect(() => {
    fetch('https://top-chef-server-site-farhanayesmin2.vercel.app/chef')
    .then(res => res.json())
    .then(d => setData(d))
  }, []);
  
   console.log(data);
    return (
        <div>
            <h1 className='text-4xl font-serif text-red-950 text-center mt-5 font-bold'>Our Top MasterChef</h1>
            <p className='text-gray-500 text-center my-4'>Explore More ,Our top six chef are showing most <br></br>delicious recipes.We wish all are giving best service.</p>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-mono">
      {data.map(chef => (
        <div key={chef.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
        
<a href="#" class="group relative block overflow-hidden">
  <button
    class="absolute hover:bg-red-800 end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span class="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-4 w-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>
<LazyLoad height={400} width={400} threshold={0.95}>
          <img
    src={chef.chefPicture}
    alt=""
    class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />
      </LazyLoad>


  <div class="relative border border-gray-100 bg-white p-6">
    <span
      class="whitespace-nowrap rounded-full animate-pulse bg-red-600 px-3 py-1.5 text-xs font-medium"
    >
      Top
    </span>

    <h3 class="mt-4 text-xl font-bold text-rose-950">{chef.chefName}</h3>

    <p class="mt-1.5 text-base text-gray-700">Years of Experience:<span className='font-bold text-red-950'>{chef.yearsOfExperience}</span> year</p>
<p className="text-gray-700  text-base">Number of Recipes: <span className='font-bold text-red-950'>{chef.numberOfRecipes}</span></p>
            <p className="text-gray-700 inline-flex items-center text-base">Likes:{chef.likes} <AiTwotoneLike className='text-blue-500 ml-1 w-4 h-8'></AiTwotoneLike>  </p>
    <form class="mt-4">
      <Link to={`/chef/${chef._id}`}
        className="block w-full text-white rounded bg-red-950 p-4 text-lg font-medium transition hover:scale-105"
      >
        View Recipes Button
      </Link>
    </form>
  </div>
</a>








              



 

        </div>
      ))}
            </div>
             </div>
    );
};

export default AllChefs;