const express = require("express");
const router = express.Router();

const tweetControl = require("../controllers/tweetControl");

router.get("/", tweetControl.getAllTweet);

module.exports = router;
