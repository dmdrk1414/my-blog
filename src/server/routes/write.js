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
    console.log(req.body); // req.body는 리액트에서 받는 곳이다.

    // 리액트에서 쓴거 받아서 db로 보내기
    const body = req.body[0];
    const reqBodyObject = {
        category: body.category,
        title: body.title,
        content: body.content,
    };
    // console.log('file: write.js ~ line 26 ~ router.post ~ reqBodyObject', reqBodyObject);

    const ID_REGEX = /^[A-Za-z0-9가-힣-_\s_@\!\#\$%\&\*(\):;\-\+=[\]{\}\^~]+$/g;
    const REGEXarray = ID_REGEX.exec(reqBodyObject.title);
    const REGEXreplace = REGEXarray[0].replace(/[\s]+/, '_');
    console.log('file: write.js ~ line 30 ~ router.post ~ REGEXarray', REGEXarray[0]);
    console.log('file: write.js ~ line 31 ~ router.post ~ REGEXreplace', REGEXreplace);

    const creatPostBody = {
        post: [
            {
                postid: { type: String, required: true, unique: true, trim: true, lowercase: true },
                category: { type: String, require: true },
                title: { type: String, required: true, default: false },
                content: { type: String, required: true },
                timestamps: { type: Date, default: Date.now },
            },
        ],
    };
    postSchema.create;
    res.send('write'); // res.send 는 리액트로 데이터를 주는 곳
});

module.exports = router;
