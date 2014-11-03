module.exports = {

	get_user_schema: function (mongo_address) {

		var create_schema = require('./create_mongo_schema');
		var user_schema = create_schema.create_schema(
			mongo_address, 
			'User', 
			{id: String, heard_music_list: Array, follow_user_list: Array});

		return user_schema;
	}
};  