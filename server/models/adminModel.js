// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const validator = require("validator");
// const Schema = mongoose.Schema;

// const adminSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });
// // static singup method
// adminSchema.statics.signup = function (email, password) {
//   // validator

//   if (!email || !password) {
//     throw Error("All fields must be filled");
//   }

//   if (!validator.isEmail(email)) {
//     throw Error("Email is not valid");
//   }
//   if (!validator.isStrongPassword(password)) {
//     throw Error("password is not strong enough");
//   }

//   return this.findOne({ email })
//     .then((exists) => {
//       if (exists) {
//         throw new Error("Email already in use");
//       }
//       return bcrypt.genSalt(10);
//     })
//     .then((salt) => bcrypt.hash(password, salt))
//     .then((hash) => this.create({ email, password: hash }));
// };

// // static login method
// adminSchema.statics.login = function (email, password) {
//   if (!email || !password) {
//     return Promise.reject(Error("All fields must be filled"));
//   }

//   let foundAdmin;

//   return this.findOne({ email })
//     .then((admin) => {
//       if (!admin) {
//         throw Error("Incorrect email");
//       }
//       foundAdmin = admin;

//       return bcrypt.compare(password, admin.password);
//     })
//     .then((match) => {
//       if (!match) {
//         throw Error("Incorrect password");
//       }
//       return foundAdmin;
//     });
// };

// module.exports = mongoose.model("Admin", adminSchema);
