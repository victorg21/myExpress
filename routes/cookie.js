var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("ggggggggggg=" +req.cookies.counter);
    let cnt = 0;
	if (!req.cookies.counter) {
	    console.log("counter = 0");
	    cnt = 0;
		res.cookie('counter', 0);
	}else{
		console.log("counter = " +req.cookies.counter);
	    cnt = parseInt(req.cookies.counter,10) + 1
		res.cookie('counter', cnt);
	}

  	res.render('cookie', { title: 'cookie counter', text: 'cookie text', counter: cnt, 'cookiesObject': req.cookies});
});

router.post('/', function (req, res) {
	console.log("ppppppppppp");
	let cookieName = req.body.cookieName;
	let cookieValue = req.body.cookieValue;
	let cnt = parseInt(req.cookies.counter,10);
	res.cookie(cookieName, cookieValue, { maxAge: 900000, httpOnly: true });
	if(req.cookies) {
		console.log("cookieName=" + cookieName + " cookieValue=" + cookieValue + " cookies=" + req.cookies);
	}else{
		console.log("cookieName=" + cookieName + " cookieValue=" + cookieValue);
	}

	let cookiesObject = req.cookies;
	cookiesObject[cookieName] = cookieValue;

	res.render('cookie', { title: 'cookie counter', text: 'cookie text', counter: cnt, 'cookiesObject': cookiesObject });
	console.log("xxxxxxxxxxxxx");
	res.end();

	//res.send('POST request to homepage');
});

module.exports = router;
