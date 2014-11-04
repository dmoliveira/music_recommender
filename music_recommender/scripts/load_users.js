var express = require('express');
var router = express.Router();
var mongodb_api = require('../model/mongodb_api');
var user_model = require('../model/user_model');
var user_json_file = './data/listen.json';

/* Load users ids only */
module.exports = {

	load_users: function(){

		var fs = require('fs');
		var user_json = JSON.parse(fs.readFileSync(user_json_file, 'utf8'));
		user_model = user_model.get_user_model(global.mongo_address);

		for(key in user_json) {
			mongodb_api.remove_documents(global.mongo_address, user_model, {id: key});
			mongodb_api.add_to_database(global.mongo_address, user_model, {id: key, heard_music_list: [], follow_user_list: []});
		}
	}
}
