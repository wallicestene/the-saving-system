// login admin
const loginAdmin = (req,res) => {
    res.json({messge: "login Admin"})
}

// sugnUp admin
const signupAdmin = (req,res) => {
    res.json({messge: "signup Admin"})
}

module.exports = {
    loginAdmin,
    signupAdmin
}
