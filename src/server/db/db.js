const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://dmdrk1414:qkrtmdcks1!@cluster0.yz5dg.mongodb.net/my-blog?';
const MONGO_URL_2 = 'mongodb+srv://dmdrk1414:qkrtmdcks1!@cluster0.yz5dg.mongodb.net/my-blog?retryWrites=true&w=majority';
async function connect() {
    await mongoose
        .connect(MONGO_URL, { useNewUrlParser: true })
        .then(() => {
            console.log('connect done');
        })
        .catch((err) => {
            console.log(err);
        });
}
connect();

const db = mongoose.connection;

const handleOpen = () => console.log('✅ connected to DB 몽고db연결완료');
const handleError = (error) => console.log(`❌ ${error}`);

// 연결, 에러, 접속 끊김이 일어나면 콜백함수를 실행합니다.
// 연결 끊길 시 자동으로 재접속을 실행하게끔 콜백함수를 설정했습니다.
db.once('open', handleOpen);
db.on('error', handleError);
db.on('disconnected', connect);
