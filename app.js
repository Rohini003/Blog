require('dotenv').config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/routes");
const ejs = require('ejs');
const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error: " + err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRoute);


app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
