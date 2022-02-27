// express

const express = require('express');
const router = express.Router();
const categorySchema = require('../db/categorySchema');
const postSchema = require('../db/postSchema');

router.get('/', (req, res) => {
    // 카테고리 db 연결후 리엑트로 보내기
    categorySchema.find().exec((error, categorySchema) => {
        const categoryData = categorySchema[0].category;
        res.send(categoryData);
    });
});
router.post('/', (req, res) => {
    // eslint-disable-next-line no-console
    // console.log(req.body); // req.body는 리액트에서 받는 곳이다.

    // 리액트에서 쓴거 받아서 db로 보내기
    const body = req.body[0];

    // 리액트에서 보내는 데이터 정리 객체
    const reqBodyObject = {
        category: body.category,
        title: body.title,
        content: body.content,
    };
    // console.log('file: write.js ~ line 26 ~ router.post ~ reqBodyObject', reqBodyObject);

    const ID_REGEX = /^[A-Za-z0-9가-힣-_\s_@\!\#\$%\&\*(\):;\-\+=[\]{\}\^~]+$/g;
    const REGEXarrayTitle = ID_REGEX.exec(reqBodyObject.title);
    const REGEX_ID_replace = REGEXarrayTitle[0].replace(/\s+/g, '_');
    // console.log('file: write.js ~ line 30 ~ router.post ~ REGEXarray', REGEXarrayTitle[0]);
    // console.log('file: write.js ~ line 31 ~ router.post ~ REGEXreplace', REGEX_ID_replace);

    const creatPostBody = {
        postid: REGEX_ID_replace,
        category: reqBodyObject.category, // 여기가 문자열이 아니다.
        title: reqBodyObject.title,
        content: reqBodyObject.content,
    };
    console.log(REGEX_ID_replace);
    // console.log('file: write.js ~ line 42 ~ router.post ~ reqBodyObject.category', typeof reqBodyObject.category);
    // console.log('file: write.js ~ line 42 ~ router.post ~ reqBodyObject.title', typeof reqBodyObject.title);
    // console.log('file: write.js ~ line 43 ~ router.post ~ reqBodyObject.conten', typeof reqBodyObject.content);

    postSchema.create(creatPostBody).catch((err) => {
        console.log(err);
    });

    res.send('write'); // res.send 는 리액트로 데이터를 주는 곳
});

module.exports = router;
