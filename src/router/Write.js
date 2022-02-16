/* eslint-disable */ // 전체 룰 끄기
import React from 'react';

// component
import Manu from '../view/component/Manu';
import Right_navbar from '../view/component/RightNavbar';

//screen
import Write_contant from '../view/screen/write_contant';

const Write = () => {
    return (
        <div>
            <Manu></Manu>
            <Right_navbar></Right_navbar>
            <Write_contant></Write_contant>
        </div>
    );
};

/* eslint-disable-next-line  */
export default Write;
