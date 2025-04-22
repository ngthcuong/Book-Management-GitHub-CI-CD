const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Routes for /api/books
router
  .route('/')
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

// Routes for /api/books/:id
router
  .route('/:id')
  .get(bookController.getBookById)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;
