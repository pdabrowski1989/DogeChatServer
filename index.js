const app = require('express')();
const http = require('http').Server(app);
const MongoClient = require('mongodb').MongoClient;
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

MongoClient.connect('mongodb://doge_db_admin_1:databasePasswordQ!@#@ds135574.mlab.com:35574/doge_db_1', (err, db) => {
    if (err) throw err;

    db.collection('mammals').find().toArray((err, result) => {
        if (err) throw err;

        console.log(result);
    })
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

http.listen(8080, () => {
    console.log('listening on *:8080');
});