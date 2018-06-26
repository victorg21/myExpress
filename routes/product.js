var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.status(200);
  res.set('Content-Type', 'text/html');
  res.end('<html><body>' +
      '<h1>product id ' + req.params.id + '</h1>' +
      '</body></html>');
});


/* GET products listing. */
router.get('/procuct', function(req, res, next) {
	res.send('this is the products page');
});

module.exports = router;
