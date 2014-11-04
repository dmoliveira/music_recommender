# Music Recommendation System
--
![](./music_recommender.png =509x400)
**Description:** This music recommendation system (MRS) aims only to illustrate the capabilities of creating a Web system using technologies related to JavaScript and NoSQL database. To really check a real MRS or know more about recommendation systems, please visit [Last FM](http://www.last.fm/) and [Recommendation Systems @Netflix](http://www.slideshare.net/xamat/qcon-sf-2013-machine-learning-recommender-systems-netflix-scale).

## Tech Overview
### Technologies
* NodeJS
* Express Framework
* MongoDB
* Javascript
* Mongoose

### Files Structure
|_ music_recommender
   |_ data
   |_ model
   |_ recommendations
   |_ routes
   |_ scripts
   |_ apps.js

* **data:** Contains JSON files to be imported or to inspire the creation of the database models and requests.
* **model:** Contains database models and MongoDB API.
* **recommendations:** Constains all recommendations strategies of this software. See section [Recommendation Algorithms](#recommendation_algorithms) for more detalis.
* **routes:** Constains all pages to handle HTTP (GET and POST) requests. In this case, for add user's followers (follow.js), for add user's musics (listen.js) and for get recommendation (recommendations.js). See section [How to Make Requests](#how_to_make_requests) to more information about the requests.
* **scripts**: Contains scripts for initializing data at database and automating HTTP request.
* **apps.js**: It is the main file for framework initialization. In here, there is called some initialization scripts to populate users and music at database.

### Dependencies
* express: ~4.9.0
* body-parser: ~1.8.1
* cookie-parser: ~1.3.3
* morgan: ~1.3.0
* mongoose: ~3.8.18
* serve-favicon: ~2.1.3
* debug: ~2.0.0
* jade: ~1.6.0
* mongodb: ~2.6.5
* nodemon: ~1.4.28

## How to Operate

### How to Start the Server
```
nodemon ./bin/www
```

### How to Run Initial Scripts
After starting the web-server, it is necessary to run two scripts to make HTTP requests: one to populate the database with user's followers and other to add initial user's musics.
* **load_follows:** 
```
sh ./load_follows.sh
```
* **load_user_listen:**
```
sh ./load_user_listen.sh
```

##<a name="how_to_make_requests"></a> How to Make Requests

### How to Add Musics
Musics can be added as shown below. X and Y must be replaced with valid ids. See examples in the script files folder.

* **URL:** http://localhost:3000
* **POST-FORM:** user_id=X&music_id=Y

### How to Add User's Followers
Followers can be added as shown below. X and Y must be replaced with valid ids. See examples in the script files folder.

* **URL:** http://localhost:3000
* **POST-FORM:** from_user_id=X&to_user_id=Y

### How to Get a Recommendation
The recommendation requisition  is performed via a GET request and therefore can be done through direct way. X must be replaced by a valid user id. By default, recommendations comes from strategy A.

* **URL:** http://localhost:3000
* **GET:** user_id=X
* **Example:** http://localhost:3000&user_id=a

**Output:**
```
{"resp":["m1","m2","m3","m5","m6"]}
```

##<a name="recommendation_algorithms"></a>  Recommendation Algorithms

### Boost by Similarity and Popularity (Strategy A)
Creates a feature vector from the tags present in the songs that have already been heard by the user. From this information, we seek the database for similar songs making up the weighting of tags by their frequency.

* Used by default.

### Boost by Followers (Strategy B)
Explores music of the followers of the users and makes a ranking by frequent tags.

* Not implemented yet.
