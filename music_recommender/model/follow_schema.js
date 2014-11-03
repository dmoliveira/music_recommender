module.exports = {

	get_follow_schema: function (mongo_address) {

		var create_schema = require('./create_mongo_schema');
		var follow_schema = create_schema.create_schema(
			mongo_address, 
			'Follow', 
			{from_user_id: String, to_user_id: String});

		return follow_schema;
	}
};  