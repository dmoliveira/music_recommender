var mongoose = require('mongoose');

function get_connection(mongo_address) {
	
	var db = mongoose.connection;

	try {
		mongoose.connect(mongo_address);
	} catch (e) {
		mongoose.connection.close();
		mongoose.createConnection(mongo_address, function(err){
		    if (err) throw err;
		    console.log ('Successfully connected to MongoDB');
		    console.log(mongoose.connection.host);
		    console.log(mongoose.connection.port);
		});
	}

	return mongoose
}

module.exports = {

	add_to_database: function (mongo_address, document_schema, json_document) {

		var mongoose = get_connection(mongo_address);

		var document_instance = new document_schema(json_document);

		document_instance.save(function (err, document_instance) {
	  		if (err) return console.error(err);
	  		console.log('Added Document: ' + document_instance);
			}
		); 
		
	},
	remove_documents: function(mongo_address, document_schema, id) {
		var mongoose = get_connection(mongo_address);
		new document_schema({id: -1}).find({id: id}, function(err,docs){
			if(docs.length > 0) {
				docs.remove();
			}
		});
	},
	add_music_to_user: function(mongo_address, document_schema, user_id, music_id) {

		var mongoose = get_connection(mongo_address);
		new document_schema({id: -1}).find({id: user_id}, function(err,docs){
			if(docs.length > 0) {
				document_from_database = docs[0];
				var new_heard_music_list = document_from_database['heard_music_list'];
				new_heard_music_list.push(music_id);

				json_document = {id: user_id, 
								 follow_user_list: document_from_database['follow_user_list'],
								 follow_user_list: new_heard_music_list};

				var document_instance = new document_schema(json_document);
				document_instance.save(function (err, document_instance) {
			  		if (err) return console.error(err);
			  		console.log('Added Document: ' + document_instance);
					}
				);
	    		docs.remove();
    		}
		});
	},
	close_connection: function() {
		var mongoose = get_connection();
		mongoose.connection.close();
	},
	get_mongoose: function() {
		return get_connection();
	}
};