const express = require("express");
const router = express.Router();
const { getBugs } = require("../controllers/bugController");

router.get("/", getBugs);

module.exports = router;
