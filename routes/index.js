var express = require('express'),
    router = express.Router();

// Home page
router.get('/', function(req, res) {
    res.render('index.html', {
        page: {
            name: 'Home',
            body_cls: 'home'
        }
    });
});

module.exports = router;