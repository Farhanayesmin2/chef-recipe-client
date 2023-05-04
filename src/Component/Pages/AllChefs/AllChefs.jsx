import React from 'react';
import { useLoaderData } from 'react-router-dom';



const AllChefs = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {chefs.map(chef => (
        <div key={chef.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-56 object-cover object-center" src={chef.chefPicture} alt={chef.chefName} />
          <div className="p-4">
            <h2 className="text-gray-900 font-bold text-xl mb-2">{chef.chefName}</h2>
            <p className="text-gray-700 text-base">{chef.description}</p>
            <p className="text-gray-700 text-base">Years of Experience: {chef.yearsOfExperience}</p>
            <p className="text-gray-700 text-base">Number of Recipes: {chef.numberOfRecipes}</p>
            <p className="text-gray-700 text-base">Likes: {chef.likes}</p>
          </div>
        </div>
      ))}
    </div>
    );
};

export default AllChefs;