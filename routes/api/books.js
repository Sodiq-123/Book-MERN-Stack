const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../../models/Book');

// @route GET api/books/test
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
router.get('/', (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ error: 'No Books found' }));
});

// @route GET api/books/:id
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ error: 'No Book found' }));
});

// @route POST api/books
router.post('/', (req, res) => {
  Book.create(req.body)
    .then(book => res.json({ success: 'Book added successfully' }))
    .catch(err => res.status(400).json(err))
});

// @route GET api/books/:id
router.patch('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ success: 'Updated successfully' }))
    .catch(err => res.status(400).json(err))
});

// @route GET api/books/:id
router.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ success: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json(err))
});

module.exports = router;