var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/review-1', function(req, res, next) {
    res.render('review-1',{ page: '1'});
});

router.get('/review-2', function(req, res, next) {
    res.render('review-2',{ page: '2'});
});

router.get('/review-3', function(req, res, next) {
    res.render('review-3',{ page: '3'});
});

router.get('/review-4', function(req, res, next) {
    res.render('review-4',{ page: '4'});
});

router.get('/review-5', function(req, res, next) {
    res.render('review-5',{ page: '5'});
});

router.get('/review-6', function(req, res, next) {
    res.render('review-6',{ page: '6'});
});



module.exports = router;