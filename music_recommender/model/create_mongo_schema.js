module.exports = {
	create_schema: function (mongo_address, collection_name, json_schema) {

		var mongoose = require('mongoose');

		try {
			mongoose.connection(mongo_address);
		} catch (e) {
			//Do nothing for now.
		}

		try {
			var schema = new mongoose.Schema(json_schema);
			var json_model = mongoose.model(collection_name, schema);
		} catch(error) {
			var mongodb_api = require('./mongodb_api');
			mongoose = mongodb_api.get_mongoose();
			var json_model = mongoose.model(collection_name);
		}

		return json_model;
	}
};