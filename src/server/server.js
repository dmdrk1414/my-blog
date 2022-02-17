const cors = require('cors');
const express = require('express');

const app = express();
// bodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors 추가
app.use(cors());
const port = 5000; // <- 3000에서 다른 숫자로 변경

const writeRouter = require('./routes/write');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/write', writeRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
