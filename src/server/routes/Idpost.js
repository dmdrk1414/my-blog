// express

const express = require('express');
const router = express.Router();
const postSchema = require('../db/postSchema');

router.get('/', (req, res) => {
    // db에서 리액트로 보내기
    res.send('hi');
    res.statusCode = 200;
});

module.exports = router;
