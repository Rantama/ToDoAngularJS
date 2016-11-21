
var express = require("express");
var router = express.Router();
var controller = require("./note.controller.js");
//Restart Database
require("./seed");


router.get("/",controller.getList);
router.post("/",controller.save);
router.get("/:id",controller.getOne);
router.put("/:id",controller.save);
router.delete("/:id",controller.delete);

module.exports = router;
