const express = require("express")
const morgan = require("morgan")
const cors = require('cors');
const mongoose = require("mongoose")
const customersRoutes = require("./routes/customerRoutes")

// connecting to mongodb
const dbURI = "mongodb+srv://wallace:wallace@saving.sspopmb.mongodb.net/saving?retryWrites=true&w=majority"
mongoose.connect(dbURI)
.then(() =>{
    app.listen(5000)
    console.log(`connected to the database`)
})
.catch((err) => console.log(err))

// express app
const app = express()

// listen for request


console.log('server is running on port', 5000);

// middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(cors());

//customers routes
app.use(customersRoutes)
