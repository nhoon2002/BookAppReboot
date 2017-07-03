var express = require('express');
var router = express.Router();

var path = require('path');

router.get('*', function(req,res) {
  console.log('sup');
  res.sendFile(path.join(__dirname + "/../public/index.html"));
  console.log('sup');
});


module.exports = router;
