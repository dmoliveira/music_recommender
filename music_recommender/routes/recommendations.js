var express = require('express');
var router = express.Router();

router.get('/recommendations', function(req, res) {
  res.send({recommendations: 'Recommendations value' });
});

module.exports = router;
