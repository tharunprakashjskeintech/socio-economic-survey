var express = require('express');

var userRouter=require('./user.route')

// router instance
var router = express.Router();

router.use('/user',userRouter);


module.exports = router;