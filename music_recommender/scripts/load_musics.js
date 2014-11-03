var express = require('express');
var router = express.Router();
var mongo_address = 'mongodb://127.0.0.1:27017/test';
var mongodb_api = require('../model/mongodb_api');
var music_schema = require('../model/music_schema');
var music_json_file = './data/music.json';

module.exports = {

	load_musics: function(){

		var fs = require('fs');
		var music_json = JSON.parse(fs.readFileSync(music_json_file, 'utf8'));

		for(key in music_json) {
			mongodb_api.remove_documents(mongo_address, music_schema, key);
			mongodb_api.add_to_database(mongo_address, music_schema, 
										{id: key, tag_list: music_json[key]});
		}
	}
}
