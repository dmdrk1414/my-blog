const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    // 데이터 받는 곳
    // req

    // eslint-disable-next-line no-console
    console.log(req.body);
    res.send('write');
});

module.exports = router;
