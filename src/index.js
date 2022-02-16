/* eslint-disable */ // 전체 룰 끄기

// main index.html

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

// 이걸 안하면 bootstrap 사용 안된다 주의
import 'bootstrap/dist/css/bootstrap.min.css';

// index.scss 통합 import scss 파일
import './scss/index.scss';

// view 을 import 을하라
import App from './view/App';

// 라우트
import Home from './router/Home';
import Posts from './router/Posts';
import Write from './router/Write';

// html 여기에 라우트를 연결하고.
// 라우트에다가는 각각의 view을 연결하라.
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="posts" element={<Posts />} />
                <Route path="write" element={<Write />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
