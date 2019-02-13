var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hell', function(req, res, next) {
  res.send('respond with a resource', { title: 'motorbikes'});
});

module.exports = router;
