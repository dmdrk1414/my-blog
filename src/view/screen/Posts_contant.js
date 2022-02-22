/* eslint-disable-next-line  */
import { useEffect, useState } from 'react';
/* eslint-disable-next-line  */
import { Container } from 'react-bootstrap';
/* eslint-disable-next-line  */
import Axios from 'axios';

function PostCall({ title, content }) {
    return (
        <div>
            <div className="posts-container_title">{title}</div>
            <div className="posts-container_contant">{content}</div>
        </div>
    );
}

function PostGetContant() {
    /* eslint-disable-next-line  */
    const [post, setPost] = useState({ title: [], content: [], category: [], timestamps: [] });

    /* eslint-disable-next-line  */
    const [makePostsArray, setMakePostsArray] = useState({ postsArray: [] });

    /* eslint-disable-next-line  */
    let postArray = [];

    useEffect(async () => {
        // AXIOS 로이용해 express의 데이터를 리액터로 잡기
        await Axios.get('http://localhost:5000/posts').then((res) => {
            const dataList = res.data;
            postArray = dataList.map((_post) => ({
                title: _post.title,
                content: _post.content,
                category: _post.category,
                timestamps: _post.timestamps,
            }));
            // eslint-disable-next-line no-console

            for (let i = 0; i < postArray.length; i += 1) {
                post.title[i] = postArray[i].title;
                post.content[i] = postArray[i].content;
                post.category[i] = postArray[i].category;
                post.timestamps[i] = postArray[i].timestamps;
            }
            // eslint-disable-next-line no-console
        });
    }, [post]);

    // db에서 받아온 데이터를 줄력하기
    const tempPostsArray = [];
    for (let i = 0; i < post.title.length; i += 1) {
        tempPostsArray.push({
            title: post.title[i],
            content: post.content[i],
            category: post.category[i],
            timestamps: post.timestamps[i],
        });
    }

    if (makePostsArray.postsArray !== tempPostsArray) {
        setInterval(() => {
            setMakePostsArray({
                postsArray: [...tempPostsArray],
            });
            // eslint-disable-next-line no-console
        }, 1000);
    }

    return (
        // 무조건 div는 하나
        <div>
            <Container>
                <div className=" posts-container ">
                    {makePostsArray.postsArray.map((_post) => (
                        <PostCall title={_post.title} content={_post.content} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

/* eslint-disable-next-line  */
export default PostGetContant;
