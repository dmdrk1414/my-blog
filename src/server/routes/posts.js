// express

const express = require('express');
const router = express.Router();
const postSchema = require('../db/postSchema');
const categorySchema = require('../db/categorySchema');

router.get('/', (req, res) => {
    // db에서 리액트로 보내기
    // const postArray = [];
    postSchema.find({}, (error, postSchema) => {
        // for (let index = 0; index < postSchema[0].post.length; index++) {
        //     postArray.push(postSchema[0].post[index]);
        // }
        const postArray = postSchema.map((post) => ({
            title: post.title,
            content: post.content,
            category: post.category,
            timestamps: post.timestamps,
        }));
        res.send(JSON.stringify(postArray));
    });
    res.statusCode = 200;
});

module.exports = router;
