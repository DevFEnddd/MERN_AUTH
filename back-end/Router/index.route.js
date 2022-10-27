const express = require("express");
const router = express.Router();
const indexController = require("../Controllers/index.controller.js");

router.get("/", indexController.getIndex);

module.exports = router;
