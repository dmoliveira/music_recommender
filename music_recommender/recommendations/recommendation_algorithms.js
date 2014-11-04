var express = require('express');
var router = express.Router();
var mongodb_api = require('../model/mongodb_api');
var user_model = require('../model/user_model');
var music_model = require('../model/music_model');

module.exports = {

	// Get most similar and frequent items (Similarity + Popularity)
	get_recommendation_items_from_strategy_a: function(top_n, user_id, http_response) {
		console.log(user_id);
		var mongoose = mongodb_api.get_mongoose();
		user_model.get_user_model(global.mongo_address).find({id: user_id}, function(err, user_list) {
			
			// Get User musics ids
			user_music_id_list = get_user_music_id_list(user_list);

			music_model.get_music_model(global.mongo_address).find({}, function(err, music_list){

				// Get Unique Tag List
				tag_list = get_unique_tag_list(music_list, user_list);

				// Get Music Score List
				music_score_dict = get_music_score_list(music_list, tag_list);
				
				// Get Top N Music ID Recommendations
				music_id_list_recommendation = get_top_n_music_id_recommendations(top_n, music_score_dict);
				
				// Send HTTP Response
				http_response.send({resp: music_id_list_recommendation});
			});
		});
	},
	// Get items from follows that user likes (Diversity)
	get_recommendation_items_from_strategy_b: function(top_n, user_id) {
		//To do..
	}
}

// Auxiliary methods below.
function get_user_music_id_list(user_list) {

	var user_music_id_list = [];

	for (var i = 0; i < user_list.length; i++) {
		for (var j = 0; j < user_list[i]['heard_music_list'].length; j++) {
			
			music_id = user_list[i]['heard_music_list'][j];

			if(user_music_id_list.indexOf(music_id) == -1) {
				user_music_id_list.push(music_id);
			}
		}
	}

	return user_music_id_list;
}

function get_unique_tag_list(music_list, user_music_id_list) {

	var tag_list = [];

	for(var i = 0; i < music_list.length; i++) {
		if(user_music_id_list.indexOf(music_list[i]['id']) != -1) {
			for(var t = 0; t < music_list[i]['tag_list'].length; t++) {
				tag_list.push(music_list[i]['tag_list'][t]);
			}
		}
	}

	return tag_list;
}

function get_music_score_list(music_list, tag_list) {

	var music_score_dict = [];

	for(var i = 0; i < music_list.length; i++) {

		if(user_music_id_list.indexOf(music_list[i]['id']) == -1) {

			var music_score = 0;

			for(var t = 0; t < music_list[i]['tag_list'].length; t++) {
				if(tag_list.indexOf(music_list[i]['tag_list'][t]) != -1) {
					music_score += 1;
				}
			}

			music_score_dict.push({key: music_list[i]['id'], value: music_score});
		}
	}

	music_score_dict.sort(function(a,b) {
	    return b.value - a.value;
	});

	return music_score_dict;
}

function get_top_n_music_id_recommendations(top_n, music_score_dict) {

	var music_id_list_recommendation = [];

	for(var i = 0; i < Math.min(top_n, music_score_dict.length); i++) {
		music_id_list_recommendation.push(music_score_dict[i].key);
	}

	return music_id_list_recommendation;
}