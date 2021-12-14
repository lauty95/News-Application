const express = require('express');
const { News } = require('../db');
const news = require("./news");
const router = express();

const error = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.use("/", error(news));

module.exports = router;