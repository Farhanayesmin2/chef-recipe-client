import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Recipes from "./Recipes/Recipes";
import { AiTwotoneLike } from "react-icons/ai";
import LazyLoad from "react-lazyload";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
const ChefRecipes = () => {
   const { Spinner } = useContext(AuthContext);
  const allRecipes = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [chefData, setChefData] = useState({});

  // here i use the useEffect for loading data
   useEffect(() => {
    setChefData(allRecipes);
    setLoading(false);
  }, [allRecipes]);

// Show a spinner while the data is loading
  if (loading) {
    return Spinner();
  }







  return (
    <div class=" mt-6 mb-8">
<h1 className="text-4xl text-red-950 font-serif font-bold text-center my-3">Chef Recipes</h1>

      {chefData.map((recipe) => (
        <div key={recipe.id}>
          <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 container mx-auto">
            <LazyLoad height={400} width={400} threshold={0.95}>
              {loading && (
                <div
                  className="h-56 w-full bg-gray-200 animate-pulse"
                  style={{ minHeight: "200px" }}
                />
              )}
              <img
                class="object-cover w-full h-64"
                src={recipe.chefPicture}
                alt="Article"
                onLoad={() => setLoading(false)}
              />
            </LazyLoad>

            
              <div className="px-10">
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {recipe.chefName}
                </span>
                <a
                  href="#"
                  class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                  tabindex="0"
                  role="link"
                >
                  Hey, I am {recipe.chefName}
                </a>
                <p class="mt-2 text-sm container mx-auto text-gray-500 dark:text-gray-400">
                  {recipe.description}
                </p>
            </div>
            <div className="px-10">
              <p class="mt-1.5 text-base font-semibold  text-gray-700">
                Years of Experience:
                <span className="font-bold text-red-950">
                  {recipe.yearsOfExperience}
                </span>{" "}
                year
              </p>
              <p className="text-gray-700 font-semibold text-base">
                Number of Recipes: {" "}
                <span className="font-bold text-red-950">
                  {recipe.numberOfRecipes}
                </span>
              </p>
              <p className="text-gray-700 font-semibold  inline-flex items-center text-base">
                Likes: {recipe.likes}{" "}
                <AiTwotoneLike className="text-blue-500 ml-1 w-4 h-8"></AiTwotoneLike> {" "}
              </p>
              <div class="mb-4">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img
                      class="h-10 w-10 rounded-full"
                      src={recipe.chefPicture}
                      alt="Avatar"
                    />
                    <a
                      href="#"
                      class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                      tabindex="0"
                      role="link"
                      
                    >
                      {recipe.chefName}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          

          {/* This is are for recipes card  */}
          {
            <div>
              <div  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
                {recipe.recipes.map((cook) => (
                  <Recipes key={cook.id} cook={cook}  />
                ))}
                
              </div>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default ChefRecipes;
