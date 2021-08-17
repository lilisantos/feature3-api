var express = require("express");
var router = express.Router();

var availabilityMinderController = require('../src/controller/availability_minder')();

router.get("/", function(req, res, next){
    res.send("You are inside availability");
});

//Get current availability
router.get('/get', availabilityMinderController.getController);
//Add a new availability
router.post('/add', availabilityMinderController.postController);

router.get('/get/:id', availabilityMinderController.getById);
module.exports = router;