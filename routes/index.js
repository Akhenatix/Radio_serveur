var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('index', { title: 'Express' });
});
router.get('/download', function(req, res) {
  res.download(__dirname + '/../intro.mp3'); // Set disposition and send it.
});

module.exports = router;
