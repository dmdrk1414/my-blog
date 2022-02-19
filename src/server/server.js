const db = require('./db/db');
const cors = require('cors');
const express = require('express');
const app = express();

// 몽고디비에 넣기
const postSchema = require('./db/postModel');

const testAPI = new postSchema({
    postid: 'db에 넣기',
    category: '응가1414',
    title: 'db에 넣기',
    content: '내용을 넣는 법',
});
postSchema.create(testAPI);

// bodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors 추가
app.use(cors());
const port = 5000; // <- 3000에서 다른 숫자로 변경

const writeRouter = require('./routes/write');

console.log(testAPI);
app.get('/', (req, res) => {
    // eslint-disable-next-line no-console
    res.send('Hello World!');
});

app.use('/write', writeRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
