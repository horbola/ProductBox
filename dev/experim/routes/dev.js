var express = require('express');
var router = express.Router();

/* home pages listing. */
router.get('/', function(req, res, next) {
    res.send('This is dev home panel. To get specific page add the page path after this url');
});

router.get('/tag-order', function(req, res, next) {
    res.render('dev/singlets/tag-order-a');
});

router.get('/margin-auto', function(req, res, next) {
    res.render('dev/singlets/margin-auto-a');
});


module.exports = router;
