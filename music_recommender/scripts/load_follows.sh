#!/bin/sh

# Load user's Followers by HTTP Request (POST)
curl --data "from_user_id=a&to_user_id=b" http://localhost:3000/follow
curl --data "from_user_id=a&to_user_id=c" http://localhost:3000/follow
curl --data "from_user_id=b&to_user_id=c" http://localhost:3000/follow
curl --data "from_user_id=b&to_user_id=d" http://localhost:3000/follow
curl --data "from_user_id=b&to_user_id=e" http://localhost:3000/follow
curl --data "from_user_id=c&to_user_id=a" http://localhost:3000/follow