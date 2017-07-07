var express = require('express');
var router = express.Router();

var path = require('path');

router.get('*', function(req,res) {
  console.log('controller.js.7');
  res.sendFile(path.join(__dirname + "/../public/index.html"));
  console.log('controller.js.9');
});


module.exports = router;
