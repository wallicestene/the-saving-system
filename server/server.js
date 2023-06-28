const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const mongoose = require("mongoose");
const customersRoutes = require("./routes/customerRoutes");

// express app
const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// connecting to mongodb
const dbURI = "mongodb+srv://wallace:wallace@saving.sspopmb.mongodb.net/saving?retryWrites=true&w=majority";
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(5000);
    console.log("Connected to the database");
    console.log("Server is running on port 5000");
  })
  .catch((err) => console.log(err));

// customers routes
app.use(customersRoutes);

// fallback route for handling unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
