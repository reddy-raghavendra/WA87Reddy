var express = require('express');
var router = express.Router();

/* My data page */
router.get('/', function(req, res, next) {
    res.render('mydata', { title: 'Raghavendra Reddy' });
});

module.exports = router;