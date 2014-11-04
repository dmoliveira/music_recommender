var mongoose = require('mongoose');

function get_connection(mongo_address) {
	
	var db = mongoose.connection;

	try {
		mongoose.connect(mongo_address);
	} catch (e) {
		//Do nothing.
	}

	return mongoose
}

module.exports = {

	add_to_database: function (mongo_address, document_model, json_document) {

		var mongoose = get_connection(mongo_address);

		var document_instance = new document_model(json_document);

		document_instance.save(function (err, document_instance) {
	  		if (err) return console.error(err);
	  			console.log('Added Document: ' + document_instance);
			}
		); 
		
	},
	remove_documents: function(mongo_address, document_model, condition) { 
		var mongoose = get_connection(mongo_address);
		document_model.remove(condition, function(err){});
	},
	add_attribute_to_user: function(mongo_address, user_model, condition, attribute_name, attribute_value) {
		var mongoose = get_connection(mongo_address);
		user_model.find(condition, function(err, docs){
			for (var i = 0; i < docs.length; i++) {
				doc = docs[i];
				doc[attribute_name].set(doc[attribute_name].length, attribute_value);
				doc.save();
			}
		});
	},
	find_documents: function(mongo_address, document_model, condition, callback) {
		var mongoose = get_connection(mongo_address);
		document_model.find(condition, function(err, docs) {
			callback.execute(docs);
		});
	},
	close_connection: function() {
		var mongoose = get_connection();
		mongoose.connection.close();
	},
	get_mongoose: function() {
		return get_connection(global.mongo_address);
	}
};