var express = require('express');
var router = express.Router();

/* Page to do music recommendations based on Users and Music data */
router.get('/', function(req, res) {

  // Calling recommendations module - Strategy A (Similarity and Popularity).
  var recommendations = require('../recommendations/recommendation_algorithms');
  recommendations.get_recommendation_items_from_strategy_a(5, req.query['user_id'], res);

});

module.exports = router;
