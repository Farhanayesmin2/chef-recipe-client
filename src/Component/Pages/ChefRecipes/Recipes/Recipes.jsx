import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ cook }) => {
    const { recipe_name, cooking_method, ingredients, recipe_img } = cook;
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(true);
    

  const handleFavoriteClick = () => {
    setIsFavorite(true);
    toast.success('The recipe is your favorite.');
  };



  return (
    <div >
    
          
      <div className="rounded-lg shadow hover:border-x-2 hover:border-red-400 transition hover:shadow-lg hover:shadow-slate-500 font-sherif h-full">
      <LazyLoad height={400} width={400} threshold={0.95}>
        {loading && (
          <div
            className="h-56 w-full bg-gray-200 animate-pulse"
            style={{ minHeight: '200px' }}
          />
        )}
        <img
          alt="cooking pic"
          src={recipe_img}
          className="h-56 w-full object-cover"
          onLoad={() => setLoading(false)}
        />
      </LazyLoad>
        <div className="bg-white p-4 sm:p-6">
          <time datetime="2022-10-10" className="block text-xs text-gray-500">
            10th may 2023
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-xl text-gray-500 "> <span className='text-rose-950 font-bold'>{ recipe_name } </span> </h3>
          </a>

                  <h3 className='font-semibold text-gray-500'> 
                      Ingredients: 
                     
                 </h3>
           <span className='text-gray-700 font-bold'>  { ingredients }     </span>
           
<p className='text-gray-500 font-bold'>  Cooking Method:</p>
          <p className="mt-2  text-sm ">
          { cooking_method }
                  </p>
                        <button
          className={`bg-rose-900 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded ${isFavorite ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={ isFavorite }
          onClick={ handleFavoriteClick }
        >
          { isFavorite ? 'Favorited' : 'Favorite' }
        </button>
              </div>
              
        
          </div>
          <ToastContainer
                      position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
          />
           <div id="toast" className="hidden absolute bottom-4 left-4 bg-green-500 text-white py-2 px-4 rounded">
        Recipe favorited!
      </div>
    </div>
  );
};

export default Recipes;
