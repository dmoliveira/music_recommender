module.exports = {

	get_user_model: function (mongo_address) {

		var create_model = require('./create_mongo_model');
		var user_model = create_model.create_model(
			mongo_address, 
			'User', 
			{id: String, heard_music_list: Array, follow_user_list: Array});

		return user_model;
	}
};  