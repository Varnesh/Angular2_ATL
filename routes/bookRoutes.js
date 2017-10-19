var express = require('express');
var router = express.Router();
var atlCtrl = require('../controllers/atl.server.controller');

/* GET Home Page */
router.get('/', function(req,res) {
    res.send('Welcome to ATL API');
});

/* POST new book */
router.post('/createBook', function(req,res) {
    return atlCtrl.create(req, res);
})

/* GET list of books */
router.get('/books', function(req, res) {
    return atlCtrl.getBooks(req, res);
});

/* Find a specific book */
router.get('/:bookId', function(req, res) {
    return atlCtrl.findBookById(req, res);
});
