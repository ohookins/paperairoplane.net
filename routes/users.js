const express = require('express');
const router = express.Router();
const contentful = require('../lib/contentful');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var promise = contentful.foo();

  promise.done(function(result) {
    console.log(result);
    if (result['error']) {
      res.send("Received an error: " + result['error'].statusCode);
    } else {
      res.send(result['text']);
    }
  });
});

module.exports = router;
