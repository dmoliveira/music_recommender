module.exports = {

	get_music_model: function (mongo_address) {

		var create_model = require('./create_mongo_model');
		var music_model = create_model.create_model(
			mongo_address, 
			'Music', 
			{id: String, tag_list: Array});

		return music_model;
	}
};  