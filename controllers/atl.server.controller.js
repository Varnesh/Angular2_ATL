var Book = require('../models/bookModel.js');

exports.create = function(req, res) {
    var entry = new Book({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        read: req.body.read
    });

    entry.save();
    res.status(201).send(entry);
    console.log(entry);
}

exports.getBooks = function(req,res){
    Book.find(function(err,books){
        if (err)
          res.status(500).send(err);
      else {
          var returnBooks = [];
          books.forEach(function(element, index, array){
                var newBook = element.toJSON();
                newBook.links = {};
                newBook.links.self = 'http://' + req.headers.host + '/api/books/' + newBook._id;
                returnBooks.push(newBook);
          });
          res.json(returnBooks);
      }
    });   
}

exports.findBookById = function(req,res) {
    Book.findById(req.params.bookId, function(err, book) {
        if (err)
            res.status(500).send(err);
        else
            res.json(book);
    });
}