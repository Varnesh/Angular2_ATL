var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://varnesh.kp:admin@ds121955.mlab.com:21955/atl_db');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes');

var atlCtrl = require('./controllers/atl.server.controller');

/* GET Home Page */
app.get('/', function(req,res) {
    res.send('Welcome to ATL API');
}); 

/* POST new book */
app.post('/api/createBook', function(req,res) {
    return atlCtrl.create(req, res);
})

/* GET list of books */
app.get('/api/books', function(req, res) {
    return atlCtrl.getBooks(req, res);
});

/* Find a specific book */
app.get('/api/:bookId', function(req, res) {
    return atlCtrl.findBookById(req, res);
});

app.listen(port, function(){
    console.log('Running on PORT: ' + port);
})
