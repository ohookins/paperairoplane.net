const express = require('express');
const router = express.Router();
const contentful = require('../lib/contentful');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.append('Content-Type', 'text/html');

  try {
    var response = contentful.getPost('post_791');
    console.log(response);
    res.render('index', response);
  } catch(err) {
    if (err.statusCode) {
      res.send("Received status code " + err.statusCode + " from upstream");
    } else {
      res.send(err);
    }
  }
});

module.exports = router;
