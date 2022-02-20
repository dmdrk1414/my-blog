const postSchema = new mongoose.Schema({
postid: { type: String, required: true, unique: true, trim: true, lowercase: true },
category: { type: String, require: true },
title: { type: String, required: true, default: false },
content: { type: String, required: true },
timestamps: { type: Date, default: Date.now },
});

postSchema 는 postid, category, title, content로 이루어져있다.

---

catagorySchema 도 만들꺼다
cataid, content??? 정도

---

const postschema = require('./db/postSchema');
const test = {
post: [
{
postid: '1번id',
category: '동아리',
title: '1번 제목 category 영어',
content: '1번 내용 category 영어',
},
{
postid: '2번id',
category: '동아리',
title: '2번 제목 category 영어',
content: '2번 내용 category 영어',
},
{
postid: '3번id',
category: 'js',
title: '3번 제목 category 영어',
content: '3번 내용 category 영어',
},
{
postid: '4번id',
category: 'js',
title: '4번 제목 category 영어',
content: '4번 내용 category 영어',
},
],
};
postschema.create(test);
console.log(test);

---

const test = {
category: [{ content: '영어' },
{ content: '동아리' },
{ content: '오픽' },
{ content: '프로그램' },
{ content: 'js' },
{ content: 'java' }],
};

db 이 작은것도 힘든데 큰건 더힘들겠네 역시 설계는 힘들어
