var express = require('express');
var router = express.Router();

router.post('/listen', function(req, res) {
  res.send({listen: 'Listen Value' });
});

module.exports = router;
