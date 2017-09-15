const port = 8080;
const app = require('express')();
const http = require('http').Server(app);
const mongodb = require('mongodb').MongoClient;
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

mongodb.connect('mongodb://doge_db_admin_1:oddajhajsy@ds135574.mlab.com:35574/doge_db_1', (err, db) => {
    if (err) throw err;

    db.collection('users').find().toArray((err, result) => {
        if (err) throw err;
    })
});

io.on('connection', () => {
    console.log('a user connected');
});

http.listen(port, () => {
    console.log('listening on ' + port);
});