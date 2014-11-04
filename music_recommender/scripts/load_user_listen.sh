#!/bin/sh
# Load users songs by HTTP Request POST

# User A
curl --data "user_id=a&music_id=m2" http://localhost:3000/listen
curl --data "user_id=a&music_id=m6" http://localhost:3000/listen

# User B
curl --data "user_id=b&music_id=m4" http://localhost:3000/listen
curl --data "user_id=b&music_id=m9" http://localhost:3000/listen

# User C
curl --data "user_id=c&music_id=m8" http://localhost:3000/listen
curl --data "user_id=c&music_id=m7" http://localhost:3000/listen

# User D
curl --data "user_id=d&music_id=m2" http://localhost:3000/listen
curl --data "user_id=d&music_id=m6" http://localhost:3000/listen
curl --data "user_id=d&music_id=m7" http://localhost:3000/listen

# User E
curl --data "user_id=e&music_id=m11" http://localhost:3000/listen
