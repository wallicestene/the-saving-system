const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const customersRoutes = require("./routes/customerRoutes")

// connecting to mongodb
const dbURI = "mongodb+srv://wallace:wallace@saving.sspopmb.mongodb.net/saving?retryWrites=true&w=majority"
mongoose.connect(dbURI)
.then(() =>{
    app.listen(5000)
})
.catch((err) => console.log(err))

// express app
const app = express()

// listen for request


console.log('server is running on port', 5000);

// middleware
app.use(morgan("dev"))
app.use(express.json())
//customers routes
app.use(customersRoutes)