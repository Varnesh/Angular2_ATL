var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://varnesh.kp:admin@ds121955.mlab.com:21955/atl_db');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api', bookRouter);

app.get('/', function(req,res) {
    res.send('Welcome to ATL API');
});

app.listen(port, function(){
    console.log('Running on PORT: ' + port);
})
