var express = require('express');
var router = express.Router();
var mongodb_api = require('../model/mongodb_api');
var user_model = require('../model/user_model');

/* Page to receive user's musics. */
router.post('/', function(req, res) {

	var user_model2 = user_model.get_user_model(global.mongo_address); 

	mongodb_api.add_attribute_to_user(
  		global.mongo_address, 
  		user_model2, 
  		{id: req.body['user_id']},
  		'heard_music_list', 
  		req.body['music_id']);

	res.send('[Response ' + new Date() + '] Added music ' + req.body['music_id'] + ' to user ' + req.body['user_id']+ '.\n'); 
});

module.exports = router;