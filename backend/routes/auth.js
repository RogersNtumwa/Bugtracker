const express = require("express");
const router = express.Router();
const { register } = require("../controllers/authController");

router.get("/", register);

module.exports = router;
