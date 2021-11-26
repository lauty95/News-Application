const express = require('express');
const { News } = require('../db');
const news = require("./news");
const router = express();

router.use("/", news);

module.exports = router;