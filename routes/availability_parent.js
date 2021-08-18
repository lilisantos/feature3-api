var express = require("express");
var router = express.Router();

var availabilityParentController = require('../src/controller/availability_parent')();

router.get("/", function(req, res, next){
    res.send("You are inside availability_parent");
});

//Get current availability
router.get('/get', availabilityParentController.getController);
//Add a new availability
router.post('/add', availabilityParentController.postController);
//Get availability by id
router.get('/get/:id', availabilityParentController.getById);
module.exports = router;