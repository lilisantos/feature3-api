var express = require("express");
var router = express.Router();

var availabilityController = require('../src/controller/availability')();

router.get("/", function(req, res, next){
    res.send("You are inside availability");
});

//Get current availability
router.get('/get', availabilityController.getController);
//Add a new availability
// router.post('/add', availabilityController.postController);

router.get('/get/:id', availabilityController.getById);
module.exports = router;