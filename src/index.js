/* eslint-disable */ // 전체 룰 끄기

// main index.html

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// 이걸 안하면 bootstrap 사용 안된다 주의
import 'bootstrap/dist/css/bootstrap.min.css';

// index.scss 통합 import scss 파일
import './scss/index.scss';

// view 을 import 을하라
import App from './view/App';

// component
import Manu from './view/component/Manu';
import Right_navbar from './view/component/RightNavbar';

// screen
import Home_image from './view/screen/Home_image';
import Home_contant from './view/screen/Home_contant';

// html
ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        <Manu></Manu>
        <Home_image></Home_image>
        <Home_contant></Home_contant>
        <Right_navbar></Right_navbar>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
