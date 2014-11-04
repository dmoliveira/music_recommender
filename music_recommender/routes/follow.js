var express = require('express');
var router = express.Router();

var mongodb_api = require('../model/mongodb_api');
var user_model = require('../model/user_model'); 

/* Page to receive user's followers */
router.post('/', function(req, res) {

	mongodb_api.add_attribute_to_user(
  		global.mongo_address, 
  		user_model.get_user_model(global.mongo_address), 
  		{id: req.body['from_user_id']},
  		'follow_user_list', 
  		req.body['to_user_id']);

	res.send('[Response ' + new Date() + '] Added follow ' 
		+ req.body['to_user_id'] + ' to user ' 
		+ req.body['from_user_id'] + '.\n'); 
});

module.exports = router;
