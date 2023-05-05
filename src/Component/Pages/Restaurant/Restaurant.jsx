import React from 'react';

const Restaurant = () => {
    return (
        <div>
           
<div class="py-16 bg-white">
    <div  class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
        <div class="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
            <div class="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                <h1 class="text-4xl text-gray-700 font-bold md:text-5xl">Our Top Services Home Made Food <span class="text-blue-500">30% off</span></h1>
                <p class="text-lg">The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables". Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword</p>
                <div class="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                    <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
                        <span class="block text-white font-semibold">
                            Book Now
                        </span>
                    </button>
                    <button type="button" title="more about" class="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max">
                        <span class="block text-gray-600 font-semibold">
                         Add To Favourite
                        </span>
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                <div class="col-span-2 row-span-4">
                    <img src="https://i.pinimg.com/564x/01/55/3f/01553fa889de4b43031b4e7a87dc67e9.jpg" class="rounded-full" width="640" height="960" alt="shoes" loading="lazy"/>
                </div>
                <div class="col-span-2 row-span-4">
                    <img src="https://i.pinimg.com/564x/b5/d2/54/b5d254d634611e85a04d87a60467e592.jpg" class="rounded-full" width="640" height="960" alt="shoes" loading="lazy"/>
                </div>
                <div class="col-span-2 row-span-2">
                    <img src="https://i.pinimg.com/564x/8d/72/d0/8d72d032190882f8e73a35304f6a9de6.jpg" class="w-full h-full object-cover object-top rounded-xl" width="640" height="640" alt="shoe" loading="lazy"/>
                </div>
                <div class="col-span-3 row-span-3">
                    <img src="https://easy-recipes.netlify.app/assets/images/recipes/hasher-mangsho-vuna.jpg" class="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy"/>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Restaurant;