var express = require("express");
var router = express.Router();

var minderController = require('../src/controller/minder')();

router.get("/", function(req, res, next){
    res.send("You are inside minder");
});

//Get current minder
router.get('/get', minderController.getController);
//Add a new minder
router.post('/add', minderController.postController);
//Get minder by id
router.get('/get/:id', minderController.getById);
module.exports = router;