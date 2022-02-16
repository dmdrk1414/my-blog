/* eslint-disable */ // 전체 룰 끄기
import React from 'react';

// component
import Manu from '../view/component/Manu';
import Right_navbar from '../view/component/RightNavbar';

//screen
import Posts_contant from '../view/screen/Posts_contant';

const Posts = () => {
    return (
        <div>
            <Manu></Manu>
            <Right_navbar></Right_navbar>
            <Posts_contant></Posts_contant>
        </div>
    );
};

/* eslint-disable-next-line  */
export default Posts;
