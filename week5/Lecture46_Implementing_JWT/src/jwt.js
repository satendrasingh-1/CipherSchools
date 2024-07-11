const jwt = require("jsonwebtoken");

const CS_SECRET_KEY = "CSSecretKey";

const generateToken = (payload) => {
  const token = jwt.sign(payload, CS_SECRET_KEY);
  return token;
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, CS_SECRET_KEY);
    return { isValidToken: true, payload };
  } catch (err) {
    console.log(err);
    return { isValidToken: false, payload: undefined };
  }
};

module.exports = {generateToken, verifyToken};

// console.log(generateToken({name: "satyam"}));
// console.log(
//   verifyToken(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2F0eWFtIiwiaWF0IjoxNzIwNTk3NjY3fQ.jLuHudnPEI0famXqUw3zc0Zy4UrJLAiwAz834kZ3Pzs"
//   )
// );
