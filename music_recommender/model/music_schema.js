module.exports = {

	get_music_schema: function (mongo_address) {

		var create_schema = require('./create_mongo_schema');
		var music_schema = create_schema.create_schema(
			mongo_address, 
			'Music', 
			{id: String, tag_list: Array});

		return music_schema;
	}
};  