/* eslint-disable */ // 전체 룰 끄기

import React from 'react';

// component
import Manu from '../view/component/Manu';
import Right_navbar from '../view/component/RightNavbar';

// screen
import Home_image from '../view/screen/Home_image';
import Home_contant from '../view/screen/Home_contant';

const Home = () => {
    return (
        <div>
            <Manu></Manu>
            <Right_navbar></Right_navbar>
            <Home_image></Home_image>
            <Home_contant></Home_contant>
        </div>
    );
};

/* eslint-disable-next-line  */
export default Home;
