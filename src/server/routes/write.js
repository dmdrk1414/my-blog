// express

const express = require('express');
const router = express.Router();
const categorySchema = require('../db/categorySchema');

router.get('/', (req, res) => {
    categorySchema.find().exec((error, categorySchema) => {
        const categoryData = categorySchema[0].category;
        res.send(categoryData);
    });
});
router.post('/', (req, res) => {
    // eslint-disable-next-line no-console
    console.log(req.body); // req.body는 리액트에서 받는 곳이다.
    res.send('write'); // res.send 는 리액트로 데이터를 주는 곳
});

module.exports = router;
