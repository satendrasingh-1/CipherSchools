
const express = require('express');

const router = express.Router();

const userController = require("../controllers/user-controllers.js");

router.post("/login", userController.loginUser);
router.post("/signup", userController.addNewUser);

module.exports = router;
