/* eslint-disable-next-line  */
import { useEffect, useState } from 'react';
/* eslint-disable-next-line  */
import { Container } from 'react-bootstrap';
/* eslint-disable-next-line  */
import Axios from 'axios';

function PostGetContant() {
    useEffect(async () => {
        // AXIOS 로이용해 express의 데이터를 리액터로 잡기
        /* eslint-disable-next-line  */
        await Axios.get('http://localhost:5000/posts').then((res) => {});
    }, []);
    return (
        // 무조건 div는 하나
        <div>
            <Container>
                <div className=" posts-container ">
                    <div>
                        <div className="posts-container_title">제목</div>
                        <div className="posts-container_contant">내용</div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

/* eslint-disable-next-line  */
export default PostGetContant;
