var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.get('/', function (req, res) {
    res.render('default', {
        title: 'Home',
        classname : 'home',
        'users': [
            'Ben', 'Jasiek', 'Krasiek', 'Sraka'
        ]
    });
});

app.get('/about', function (req, res) {
    res.render('default', {
        title: 'About Us',
        classname : 'home'
    });
});

app.get('*', function (req, res) {
    res.send('Bad route!');
});

var server = app.listen(3000, function () {
    console.log('Your new amazing server is running on port 3000!');
});