const Admin = require("../models/adminModel");

// login admin
const loginAdmin = (req, res) => {
  res.json({ messge: "login Admin" });
};

// sugnUp admin
const signupAdmin = (req, res) => {
  const { email, password } = req.body;

  Admin.signup(email, password)
    .then((admin) => {
      res.status(200).json({ email, admin });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

module.exports = {
  loginAdmin,
  signupAdmin,
};
