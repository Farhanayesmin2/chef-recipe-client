import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Recipes from "./Recipes/Recipes";
import { AiTwotoneLike } from "react-icons/ai";
import LazyLoad from "react-lazyload";
const ChefRecipes = () => {
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
    return (
      <div class="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            class="inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-400"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }







  return (
    <div class=" mt-6 mb-8">
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

            <div>
              <div>
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {recipe.chefName}
                </span>
                <a
                  href="#"
                  class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                  tabindex="0"
                  role="link"
                >
                  I Built A Successful Blog In One Year
                </a>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {recipe.description}
                </p>
              </div>
              <p class="mt-1.5 text-base text-gray-700">
                Years of Experience:
                <span className="font-bold text-red-950">
                  {recipe.yearsOfExperience}
                </span>{" "}
                year
              </p>
              <p className="text-gray-700  text-base">
                Number of Recipes:{" "}
                <span className="font-bold text-red-950">
                  {recipe.numberOfRecipes}
                </span>
              </p>
              <p className="text-gray-700 inline-flex items-center text-base">
                Likes:{recipe.likes}{" "}
                <AiTwotoneLike className="text-blue-500 ml-1 w-4 h-8"></AiTwotoneLike>{" "}
              </p>
              <div class="mt-4">
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
