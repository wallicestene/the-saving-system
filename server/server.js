const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

require("dotenv").config()

const mongoose = require("mongoose");
const customersRoutes = require("./routes/customerRoutes");

// express app
const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// connecting to mongodb

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(process.env.PORT);
    console.log("Connected to the database");
    console.log("Server is running on port",process.env.PORT );
  })
  .catch((err) => console.log(err));

// customers routes
app.use(customersRoutes);

// fallback route for handling unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
