require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const tweetRoute = require("./routes/tweets");
app.use("/api/tweet", tweetRoute);

module.exports = app;
