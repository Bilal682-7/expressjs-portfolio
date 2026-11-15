var express = require('express');
var router = express.Router();

// Each route renders one EJS view from the views folder.
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', active: 'home' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me', active: 'about' });
});

router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects', active: 'projects' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact', active: 'contact' });
});

module.exports = router;