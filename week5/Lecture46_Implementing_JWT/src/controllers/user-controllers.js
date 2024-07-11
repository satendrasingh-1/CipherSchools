const User = require("../models/User.js");

const addNewUser = async (req, res) => {
  try {
    const { name, email, age, password } = req.body;
    const user = new User({ name, email, age, password });
    await user.save();
    return res.status(201).send(user);
  } catch (err) {
    console.log(err);
    return res.status(404).send({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmailAndPasswordForAuth(email, password);
    console.info(`User with email ${email} successfully loged in.`);
    return res.status(201).send(user);
  } catch (err) {
    console.log(err);
    return res.status(404).send({ message: "Login Falied!" });
  }
};

module.exports = { addNewUser, loginUser};
