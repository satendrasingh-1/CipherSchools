const { verifyToken } = require("../jwt");
const User = require("../models/User")

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if(!authorization){
    return res.status(400).send({ message: "Please send a token" });
  }
  const token = authorization.substring(7);
  const { isValidToken, payload } = verifyToken(token);
  if (isValidToken) {
    console.log("Token is valid");
    const user = await User.findOne({_id: payload._id})
    req.token=token;
    req.user=user;
    next();
  } else {
    console.warn("Token is invalid");
    return res.status(403).send({ message: "Please use a valid token" });
  }
};

module.exports = authMiddleware;


