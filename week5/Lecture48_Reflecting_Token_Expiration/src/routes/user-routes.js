const express = require("express");

const router = express.Router();

const userController = require("../controllers/user-controllers.js");
const authMiddleware = require("../middleware/auth-middleware.js");

router.post("/login", userController.loginUser);
router.post("/signup", userController.addNewUser);
router.delete("/self", authMiddleware, userController.deleteUser);
module.exports = router;
