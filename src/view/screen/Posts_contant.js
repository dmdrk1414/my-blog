/* eslint-disable-next-line  */
import { useState } from 'react';
/* eslint-disable-next-line  */
import { Container } from 'react-bootstrap';
/* eslint-disable-next-line  */
import postsJson from '../../json/posts.json';
// eslint-disable-next-line no-unused-vars

function PostCall({ title, content }) {
    return (
        <div>
            <div className="posts-container_title">{title}</div>
            <div className="posts-container_contant">{content}</div>
        </div>
    );
}
function PostGetContant() {
    const posts = postsJson.posts;

    // eslint-disable-next-line no-unused-vars
    const [test, changeTest] = useState(posts);

    return (
        // 무조건 div는 하나
        <div>
            <Container>
                <div className=" posts-container ">
                    {posts.map((_post) => (
                        <PostCall title={_post.title} content={_post.content} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

/* eslint-disable-next-line  */
export default PostGetContant;
