var express = require('express');
var router = express.Router();
var mongodb_api = require('../model/mongodb_api');
var music_model = require('../model/music_model');
var music_json_file = './data/music.json';

/* Load musics from JSON file */
module.exports = {

	load_musics: function(){

		var fs = require('fs');
		var music_json = JSON.parse(fs.readFileSync(music_json_file, 'utf8'));
		music_model = music_model.get_music_model(global.mongo_address);

		for(key in music_json) {
			mongodb_api.remove_documents(global.mongo_address, music_model, {id: key});
			mongodb_api.add_to_database(global.mongo_address, music_model, {id: key, tag_list: music_json[key]});
		}
	}
}
