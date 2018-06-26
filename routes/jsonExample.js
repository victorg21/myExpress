var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("bbbbbbbbbbbbb");
	//let weight = req.query.weight;
	//let w = parseInt(weight);
	//let theBmi = h / w;

	res.json({p1:"111", p2:"222", p3:"333"});

/*
	res.render('bmi', { title: 'Bmi Page',
						text: 'Bmi Page Text',
						weight: weight,
						height: height,
						theBmi: theBmi	});
*/
});

module.exports = router;
