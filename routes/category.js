var express = require("express");
var router = express.Router();

var categoryController = require('../src/controller/category')();

router.get("/", function(req, res, next){
    res.send("You are inside category");
});

//Get categories
router.get('/get', categoryController.getController);
//Add a new category
router.post('/add', categoryController.postController);

router.get('/get/:id', categoryController.getById);
module.exports = router;