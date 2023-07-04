const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET, { expiresIn: "3d" });
};

// login admin
const loginAdmin = (req, res) => {
  const { email, password } = req.body;
  Admin.login(email, password)

    .then((admin) => {
      // create token
      const token = createToken(admin._id);

      res.status(200).json({ email, token });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// sugnUp admin
const signupAdmin = (req, res) => {
  const { email, password } = req.body;

  Admin.signup(email, password)

    .then((admin) => {
      // create token
      const token = createToken(admin._id);

      res.status(200).json({ email, token });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

module.exports = {
  loginAdmin,
  signupAdmin,
};
