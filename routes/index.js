var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Accuracy' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About | Accuracy'});
})

router.get('/calendar', function(req, res, next) {
  res.render('calendar', {title: 'Calendar | Accuracy'});
})

router.get('/sp', function(req, res, next) {
  res.render('sp', {title: 'Services and Pricing | Accuracy'});
})

router.get('/terms', function(req, res, next) {
  res.render('terms', {title: 'Terms of Service | Accuracy'});
})

router.get('/contactus', function(req, res, next) {
  res.render('contactus', {title: 'Contact Us | Accuracy'});
})

router.get('/faq', function(req, res, next) {
  res.render('faq', {title: 'FAQ | Accuracy'});
})

router.get('/sitemap', function(req, res, next) {
  res.render('sitemap', {title: 'Sitemap | Accuracy'});
})

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Website Credits | Accuracy' });
});


module.exports = router;
