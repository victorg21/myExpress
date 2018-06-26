var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("gggggggggggggg");
	let weightGet = req.query.weightGet;
	let heightGet = req.query.heightGet;
	let hGet = parseInt(heightGet);
	let wGet = parseInt(weightGet);
	let theBmiGet = hGet / wGet;
	console.log("weightGet=" +weightGet +" heightGet=" +heightGet +" theBmiGet" +theBmiGet)
	res.render('bmi', { title: 'Bmi Page',
						textGet: 'Bmi Get Page Text',
						weightGet: weightGet,
						heightGet: heightGet,
						theBmiGet: theBmiGet });
});

//router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function (req, res) {
	console.log("ppppppppppp");
	let weightPost = req.body.weightPost;
	let heightPost = req.body.heightPost;
	let hPost = parseInt(heightPost);
	let wPost = parseInt(weightPost);
	let theBmiPost = hPost / wPost;
	console.log("weightPost=" +weightPost +" heightPost=" +heightPost +" theBmiPost" +theBmiPost)
	res.render('bmi', { title: 'Bmi Page',
		textPost: 'Bmi Post Page Text',
		weightPost: weightPost,
		heightPost: heightPost,
		theBmiPost: theBmiPost	});

	//res.send('POST request to homepage');
});

module.exports = router;
