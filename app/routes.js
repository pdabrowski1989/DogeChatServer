module.exports = (app, passport) => {

    app.get('/', (req, res) => {
        res.send('<h1>Woof, woof!</h1>');
    });


};