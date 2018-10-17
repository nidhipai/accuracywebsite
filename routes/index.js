var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Accuracy' });
});

router.get('/company', function(req, res, next) {
  res.render('company', {title: 'Company | Accuracy'});
})

router.get('/team', function(req, res, next) {
  res.render('team', {title: 'Team | Accuracy'});
})

router.get('/testimonials', function(req, res, next) {
  res.render('testimonials', {title: 'Testimonials | Accuracy'});
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


module.exports = router;
