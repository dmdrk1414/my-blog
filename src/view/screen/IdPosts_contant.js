/* eslint-disable */ // 전체 룰 끄기
/* eslint-disable-next-line  */
import { useEffect, useState } from 'react';
/* eslint-disable-next-line  */
import { Container } from 'react-bootstrap';
/* eslint-disable-next-line  */
import Axios from 'axios';

/* eslint-disable-next-line  */
const REGEX_ID = /^\/post\/[A-Za-z0-9가-힣-_\s_@\!\#\$%\&\*(\):;\-\+=[\]{\}\^~]+$/g;

function PostGetContant() {
    const [getPost, setGetPost] = useState({ Id: '', url: '' });
    useEffect(async () => {
        /* eslint-disable-next-line  */

        // AXIOS 로이용해 express의 데이터를 리액터로 잡기
        /* eslint-disable-next-line  */
        await Axios.get(`http://localhost:5000/posts`).then((res) => {
            const resData = res.data;
            const RegexId = /^[A-Za-z0-9가-힣-_\s_@\!\#\$%\&\*(\):;\-\+=[\]{\}\^~]+$/g;

            const resDataArray = resData.map((data) => ({
                postid: data.title.replace(/\s+/g, '_'),
                title: data.title,
                content: data.content,
                category: data.category,
                timestamps: data.timestamps,
            }));
            console.log('file: IdPosts_contant.js ~ line 26 ~ resDataArray ~ resDataArray', resDataArray);

            // url 잡는 법
            const urlbefor = window.location.href;
            const url = decodeURI(urlbefor);
            /* eslint-disable-next-line  */
            const REGEX_ID = /http:\/\/localhost:3000\/post\/([A-Za-z0-9가-힣-_\s_@\!\#\$%\&\*(\):;\-\+=[\]{\}\^~]+)$/g;
            /* eslint-disable-next-line  */
            const REGEX_ID_Array = REGEX_ID.exec(url);
            const id = REGEX_ID_Array[1];
            setGetPost({ Id: id, url: url, post: [...resDataArray] });
        });
    }, []);

    function CallPostContent() {
        const urlbefor = window.location.href;
        const url = decodeURI(urlbefor);
        if (url === getPost.url) {
            return (
                <div>
                    <div className="posts-container_title">다른 url</div>
                    <div className="posts-container_contant">다른 url</div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="posts-container_title"></div>
                    <div className="posts-container_contant">내용</div>
                </div>
            );
        }
    }

    return (
        // 무조건 div는 하나
        <div>
            <Container>
                <div className=" posts-container ">
                    <CallPostContent />
                </div>
            </Container>
        </div>
    );
}

/* eslint-disable-next-line  */
export default PostGetContant;
