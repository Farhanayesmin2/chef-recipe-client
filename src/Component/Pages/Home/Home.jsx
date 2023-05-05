import React from 'react';
import Banner from '../../Shared/Header/Banner/Banner';
import AllChefs from '../AllChefs/AllChefs';
import Explore from '../explore/Explore';
import Restaurant from '../Restaurant/Restaurant';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllChefs></AllChefs>
            <Restaurant></Restaurant>
            <Explore></Explore>

        </div>
    );
};

export default Home;