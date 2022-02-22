/* eslint-disable */ // 전체 룰 끄기
import React from 'react';

// component
import Manu from '../view/component/Manu';
import Right_navbar from '../view/component/RightNavbar';

//screen
import IdPosts_contant from '../view/screen/IdPosts_contant';

const Posts = () => {
    return (
        <div>
            <Manu></Manu>
            <Right_navbar></Right_navbar>
            <IdPosts_contant></IdPosts_contant>
        </div>
    );
};

/* eslint-disable-next-line  */
export default Posts;
