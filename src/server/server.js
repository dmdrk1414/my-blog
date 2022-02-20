const db = require('./db/db');

const cors = require('cors');
const express = require('express');
const app = express();

// const postSchema = require('./db/postSchema');
// postSchema.find({}, (error, postSchema) => {
//     console.log(postSchema[0].post[0]);
// });

// bodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors 추가
app.use(cors());
const port = 5000; // <- 3000에서 다른 숫자로 변경

// 라우터
const writeRouter = require('./routes/write');
const postsRouter = require('./routes/posts');
const { post } = require('./routes/write');

app.get('/', (req, res) => {
    // eslint-disable-next-line no-console
    res.send('Hello World!');
});

app.use('/write', writeRouter);
app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
