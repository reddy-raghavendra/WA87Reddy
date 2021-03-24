var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
    var randomNumber = Math.random() * 100;
    let input = req.query.x;
    var number;
    if (input == undefined) {
        number = randomNumber;
    } else {
        number = input;
    }
    console.log(input);
    console.log("inside");
    res.send(`Math.round() applied to ${number} is ${Math.round(number)}`);
});

module.exports = router;