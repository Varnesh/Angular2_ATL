var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
          .get(function(req, res){
              var responseJson = {help:"This is my api"};

              res.json(responseJson);
          });
app.use('/api', bookRouter);

app.get('/', function(req,res) {
    res.send('Welcome to ATL API ***');
});

app.listen(port, function(){
    console.log('Running on PORT: ' + port);
})
