import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from './Recipes/Recipes';
import { AiTwotoneLike } from "react-icons/ai";
const ChefRecipes = () => {
  const allRecipes = useLoaderData();
  console.log(allRecipes);
  return (
    <div>
      {allRecipes.map((recipe) => (
        <div key={recipe.id}>
           
              
<div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 container mx-auto">
    <img class="object-cover w-full h-64" src={recipe.chefPicture} alt="Article"/>

    <div class="p-6">
        <div>
                          <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{ recipe.chefName}</span>
            <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">I Built A Successful Blog In One Year</a>
                          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{recipe.description}</p>
        </div>
  <p class="mt-1.5 text-base text-gray-700">Years of Experience:<span className='font-bold text-red-950'>{recipe.yearsOfExperience}</span> year</p>
<p className="text-gray-700  text-base">Number of Recipes: <span className='font-bold text-red-950'>{recipe.numberOfRecipes}</span></p>
            <p className="text-gray-700 inline-flex items-center text-base">Likes:{recipe.likes} <AiTwotoneLike className='text-blue-500 ml-1 w-4 h-8'></AiTwotoneLike>  </p>
        <div class="mt-4">
            <div class="flex items-center">
                <div class="flex items-center">
                    <img class="h-10 w-10 rounded-full" src={recipe.chefPicture} alt="Avatar"/>
                    <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">{ recipe.chefName}</a>
                </div>
                             
            </div>
        </div>
    </div>
</div>













{/* This is are for recipes card  */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
            {recipe.recipes.map((cook) => (
              <Recipes key={cook.id} cook={cook} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChefRecipes;
