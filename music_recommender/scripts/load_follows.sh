#!/bin/sh
# Load Follows
curl --data "from_user_id=1&to_user_id=2" http://localhost:3000/follow
curl --data "from_user_id=1&to_user_id=4" http://localhost:3000/follow
curl --data "from_user_id=2&to_user_id=4" http://localhost:3000/follow
curl --data "from_user_id=3&to_user_id=2" http://localhost:3000/follow
curl --data "from_user_id=3&to_user_id=1" http://localhost:3000/follow
curl --data "from_user_id=5&to_user_id=1" http://localhost:3000/follow
curl --data "from_user_id=1&to_user_id=5" http://localhost:3000/follow