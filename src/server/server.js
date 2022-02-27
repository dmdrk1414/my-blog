const db = require('./db/db');
const postSchema = require('./db/postSchema');

const cors = require('cors');
const express = require('express');
const app = express();

// bodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors 추가
app.use(cors());
const port = 5000; // <- 3000에서 다른 숫자로 변경

// 라우터
const writeRouter = require('./routes/write');
const postsRouter = require('./routes/posts');
const IdPostRouter = require('./routes/Idpost');

app.get('/', (req, res) => {
    // eslint-disable-next-line no-console
    res.send('Hello World!');
});

const REGEX_ID = /^\/posts\/[A-Za-z0-9가-힣-_\s_@\!\#\$%\&\*(\):;\-\+=[\]{\}\^~]+$/g;
app.use('/write', writeRouter);
app.use('/posts', postsRouter);
app.use(REGEX_ID, IdPostRouter);
// async function callPostSchema() {
//     let IdArray;
//     await postSchema.find().exec((error, postSchema) => {
//         IdArray = postSchema.map((_post) => _post.postid);
//         console.log('file: server.js ~ line 25 ~ awaitpostSchema.find ~  IdArray', IdArray);
//     });
// }
// callPostSchema();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
