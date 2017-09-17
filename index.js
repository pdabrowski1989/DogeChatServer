const port = 8080;
const app = require('express')();
const http = require('http').Server(app);
const mongodb = require('mongodb').MongoClient;
const io = require('socket.io')(http);

const database = require('./config/database.js');
const routes = require('./app/routes.js')(app);

mongodb.connect(database.url);

http.listen(port, () => {
    console.log('listening on ' + port);
});