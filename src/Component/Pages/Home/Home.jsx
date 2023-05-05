import React from 'react';
import Banner from '../../Shared/Header/Banner/Banner';
import AllChefs from '../AllChefs/AllChefs';
import Explore from '../explore/Explore';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllChefs></AllChefs>
            <Explore></Explore>
        </div>
    );
};

export default Home;