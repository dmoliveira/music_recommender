var express = require('express');
var router = express.Router();
var mongo_address = 'mongodb://127.0.0.1:27017/test';
var mongodb_api = require('../model/mongodb_api');
var follow_schema = require('../model/follow_schema');

router.post('/', function(req, res) {

	var follow_schema_instance = follow_schema.get_follow_schema(mongo_address); 

	mongodb_api.add_to_database(
  		mongo_address, 
  		follow_schema_instance, 
  		req.body);

	res.send('Added follow!'); 
});

module.exports = router;
