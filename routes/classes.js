var express = require("express");
var router = express.Router();
const classesController = require("../controllers/classesController");
router.get("/", classesController.classes);
router.post("/add", classesController.addClass);
module.exports = router;
