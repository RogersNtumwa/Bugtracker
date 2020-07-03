const express = require("express");
const router = express.Router();
const { getassignments } = require("../controllers/assignmentController");

router.get("/", getassignments);

module.exports = router;
