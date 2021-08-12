var express = require("express");
var router = express.Router();

var parentController = require('../src/controller/parent')();

router.get("/", function(req, res, next){
    res.send("You are inside parent");
});

//Get current parent
router.get('/get', parentController.getController);
//Add a new parent
router.post('/add', parentController.postController);

router.get('/get/:id', parentController.getById);
module.exports = router;