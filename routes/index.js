const express = require('express');
const router = express.Router();
const path = require('path');

router.use (function (req,res,next) {
  console.log('/' + req.method);
  console.log("test")
  next();
});

router.get('/',function(req,res){
  console.log("test")
  return res.sendFile(path.resolve('views/index.html'));
});

module.exports = router;
