#!/bin/sh
# Load users songs

# User One
curl --data "user_id=1&music_id=3" http://localhost:3000/listen
curl --data "user_id=1&music_id=4" http://localhost:3000/listen
curl --data "user_id=1&music_id=9" http://localhost:3000/listen

# User Two
curl --data "user_id=2&music_id=2" http://localhost:3000/listen
curl --data "user_id=2&music_id=11" http://localhost:3000/listen
curl --data "user_id=2&music_id=9" http://localhost:3000/listen
curl --data "user_id=2&music_id=6" http://localhost:3000/listen

# User Three
curl --data "user_id=3&music_id=5" http://localhost:3000/listen
curl --data "user_id=3&music_id=6" http://localhost:3000/listen
curl --data "user_id=3&music_id=7" http://localhost:3000/listen
curl --data "user_id=3&music_id=8" http://localhost:3000/listen

# User Four
curl --data "user_id=4&music_id=12" http://localhost:3000/listen
curl --data "user_id=4&music_id=11" http://localhost:3000/listen
curl --data "user_id=4&music_id=2" http://localhost:3000/listen
curl --data "user_id=4&music_id=5" http://localhost:3000/listen
curl --data "user_id=4&music_id=9" http://localhost:3000/listen
curl --data "user_id=4&music_id=6" http://localhost:3000/listen

# User Five
curl --data "user_id=5&music_id=1" http://localhost:3000/listen
curl --data "user_id=5&music_id=3" http://localhost:3000/listen
curl --data "user_id=5&music_id=7" http://localhost:3000/listen
curl --data "user_id=5&music_id=9" http://localhost:3000/listen
curl --data "user_id=5&music_id=11" http://localhost:3000/listen
