const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./front/js/secret");

exports.jwtMiddleware = async function (req, res, next) {
  const token = req.headers["w-access-token"];

  if (!token) {
    return res.send({
      isSuccess: false,
      code: 403,
      message: "로그인이 되어 있지 않습니다.",
    });
  }

  //토큰이 있는 경우 토큰 검증
  try {
    const verifiedToken = jwt.verify(token, jwtSecret);
    req.verifiedToken = verifiedToken;
    next();
  } catch {
    return res.send({
      isSuccess: false,
      code: 403,
      message: "토큰 검증 실패",
    });
  }
};
