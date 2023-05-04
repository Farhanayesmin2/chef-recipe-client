import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ cook }) => {
    const { recipe_name, cooking_method, ingredients, recipe_img } = cook;
    const [isFavorite, setIsFavorite] = useState(false);
    
    

  const handleFavoriteClick = () => {
    setIsFavorite(true);
    toast.success('The recipe is your favorite.');
  };


//   const handleFavoriteClick = () => {
//     setIsFavorite(true);
//       showToast()

//   };

//   const showToast = () => {
//       const toast = document.getElementById('toast');
//             toast.success("The recipe is your favorite.")
//     toast.classList.remove('hidden');
//     setTimeout(() => {
//       toast.classList.add('hidden');
//     }, 3000);
//   };

  return (
    <div>
    
          
      <div className="rounded-lg shadow transition hover:shadow-lg font-sherif">
        <img
          alt="cooking pic"
          src={recipe_img}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <time datetime="2022-10-10" className="block text-xs text-gray-500">
            10th Oct 2022
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
