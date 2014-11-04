module.exports = {

	// Script that starts a new fresh database with clean data.
	start_fresh_database: function() {
		// Clean and Load Musics
		var load_musics = require('./load_musics');
		load_musics.load_musics();
		console.log('[Log] Loaded Musics.');

		// Clean and Load Users
		var load_users = require('./load_users');
		load_users.load_users();
		console.log('[Log] Loaded Users.');
	}

}