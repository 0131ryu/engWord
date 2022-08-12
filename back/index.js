const compression = require("compression");
const cors = require("cors");

const { indexRouter } = require("./src/router/indexRouter");
const { userRouter } = require("./src/router/userRouter");

const express = require("express");
const app = express();
const port = 4000;

//cors 설정
app.use(cors());

//정적 파일 제공
app.use(express.static("front"));

app.use(express.json());
app.use(compression());

indexRouter(app);
userRouter(app);

app.listen(port, () => {
  console.log(`Express 작동 중 포트 번호 : ${port}`);
});
