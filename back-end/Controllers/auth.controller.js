const userModel = require("../Models/user.model.js");
const bcrypt = require("bcrypt")

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    // create data to database
    await userModel.create({
      username: username,
      password: bcrypt.hashSync(password, 10),
      email: email,
      role: "customer",
    });
    // console.log("boy", req.body)
    return res.status(200).send("resgister user");
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  register: register,
};
