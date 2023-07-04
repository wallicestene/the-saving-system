const express = require("express")
const router = express.Router()
// cpntroller functions
const adminController = require("../controllers/adminController")

// login route

router.post("/api/admin/login", adminController.loginAdmin)

// sognup route
router.post("/api/admin/signup", adminController.signupAdmin)

module.exports = router