var express = require('express');
var router = express.Router();
var mongo_address = 'mongodb://127.0.0.1:27017/test';
var mongodb_api = require('../model/mongodb_api');
var user_schema = require('../model/user_schema');

router.post('/', function(req, res) {

	var user_schema_instance = user_schema.get_userschema(mongo_address); 

	mongodb_api.add_music_to_user(
  		mongo_address, 
  		user_schema_instance, 
  		req.query.user_id,
  		req.query.music_id);

	res.send('Added music to user!'); 
});

module.exports = router;
